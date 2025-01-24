import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
	// A secret string you define, to ensure correct encryption
	secret: useRuntimeConfig().authSecret,
	pages: {
		//which route should the signin page redirect
		signIn: '/login',
	},
	providers: [
		// Use default imports correctly
		// @ts-expect-error will not work without this
		GithubProvider.default({
			clientId: 'Ov23liqGeTcB3cF4Tcl2',
			clientSecret: '87af5b25b452ff3540a6970d27c22bd6c52f5058',
		}),
		// @ts-expect-error will not work without this
		CredentialsProvider.default({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials: { username: string; password: string }) {
				console.log('Authorize function called with credentials:', credentials);
				try {
					const res: any = await $fetch('https://dummyjson.com/auth/login', {
						method: 'POST',
						body: credentials,
					});
					console.log('Authorize function response:', res);
					if (res && res?.accessToken) {
						return res;
					} else {
						return res.message || 'Invalid credentials';
					}
				} catch (e: any) {
					console.error(
						'Authorize function error:',
						e.response?.data?.message || e.message
					);
					return e.response?.data?.message || 'Failed to authenticate';
				}
			},
		}),
	],

	session: {
		strategy: 'jwt',
	},

	callbacks: {
		async jwt({ token, user, account }) {
			console.log('JWT callback called with token:', token, 'and user:', user);
			if (user) {
				token = {
					...token,
					...user,
					...account,
				};
			}
			console.log('JWT callback returning token:', token);
			return token;
		},

		async session({ session, token }) {
			console.log(
				'Session callback called with session:',
				session,
				'and token:',
				token
			);
			session.user = {
				...token,
				...session.user,
			};
			console.log('Session callback returning session:', session);
			return session;
		},
	},
});
