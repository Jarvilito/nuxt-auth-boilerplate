/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',],
  darkMode: 'class',
  theme: {
    extend: {
      //custom color, not adding on top of theme because it will override the default colors
      //to add more colours variable go to main.scss inside assets/scss
      // make sure to include dark mode color too
      colors: {

        // PRIMARY COLORS
        'brand-blue': 'rgba(var(--brand-blue), <alpha-value>)',
        'brand-dark-blue': 'rgba(var(--brand-dark-blue), <alpha-value>)',
        'brand-medium-blue': 'rgba(var(--brand-medium-blue), <alpha-value>)',
        'brand-extra-light-blue': 'rgba(var(--brand-extra-light-blue), <alpha-value>)',

        // OCEAN
        ocean: 'rgba(var(--ocean), <alpha-value>)',
        'ocean-medium': 'rgba(var(--ocean-medium), <alpha-value>)',
        'ocean-light': 'rgba(var(--ocean-light), <alpha-value>)',

        // NEUTRALS
        'neutral-medium': 'rgba(var(--neutral-medium), <alpha-value>)',
        'neutral-medium-dark': 'rgba(var(--neutral-medium-dark), <alpha-value>)',
        'grey-medium': 'rgba(var(--grey-medium), <alpha-value>)',
        'grey-light': 'rgba(var(--grey-light), <alpha-value>)',
        white: 'rgba(var(--white), <alpha-value>)',
        dark: 'rgba(var(--dark), <alpha-value>)',

        // FONT
        'font-primary': 'rgba(var(--font-primary), <alpha-value>)',
        'font-secondary': 'rgba(var(--font-secondary), <alpha-value>)',
        'font-tertiary': 'rgba(var(--font-tertiary), <alpha-value>)',

        // STROKES
        stroke: 'rgba(var(--stroke), <alpha-value>)',
        'stroke-light': 'rgba(var(--stroke-light), <alpha-value>)',
        'stroke-extra-light': 'rgba(var(--stroke-extra-light), <alpha-value>)',

        // STATE COLORS
        // ERROR
        'red-main': 'rgba(var(--red-main), <alpha-value>)',
        'red-medium': 'rgba(var(--red-medium), <alpha-value>)',
        'red-background-tone': 'rgba(var(--red-background-tone), <alpha-value>)',

        // WARNING
        'yellow-main': 'rgba(var(--yellow-main), <alpha-value>)',
        'yellow-medium': 'rgba(var(--yellow-medium), <alpha-value>)',
        'yellow-background-tone': 'rgba(var(--yellow-background-tone), <alpha-value>)',

        // SUCCESS
        'green-main': 'rgba(var(--green-main), <alpha-value>)',
        'green-medium': 'rgba(var(--green-medium), <alpha-value>)',
        'green-background-tone': 'rgba(var(--green-background-tone), <alpha-value>)',
      },

      //custom gradient
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #0054A8 0%, #00ABD9 100%)',
      },

    },
    fontFamily: {
      'red-hat-text': "Red Hat Text, sans-serif",
      'red-hat-mono': "Red Hat Mono, sans-serif"
    },

    container: {
      center: true,
      padding: '2rem',
    }
  },
  //safelist work for dynamic class names

  safelist: [
    'bg-brand-blue',
    // PRIMARY COLORS
    'aria-checked:bg-brand-blue',
    'aria-checked:dark:bg-brand-blue',
    'aria-checked:bg-brand-dark-blue',
    'aria-checked:dark:bg-brand-dark-blue',
    'aria-checked:bg-brand-medium-blue',
    'aria-checked:dark:bg-brand-medium-blue',
    'aria-checked:bg-brand-extra-light-blue',
    'aria-checked:dark:bg-brand-extra-light-blue',

    // OCEAN
    'aria-checked:bg-ocean',
    'aria-checked:dark:bg-ocean',
    'aria-checked:bg-ocean-medium',
    'aria-checked:dark:bg-ocean-medium',
    'aria-checked:bg-ocean-light',
    'aria-checked:dark:bg-ocean-light',

    // NEUTRALS
    'aria-checked:bg-neutral-medium',
    'aria-checked:dark:bg-neutral-medium',
    'aria-checked:bg-neutral-medium-dark',
    'aria-checked:dark:bg-neutral-medium-dark',
    'aria-checked:bg-grey-medium',
    'aria-checked:dark:bg-grey-medium',
    'aria-checked:bg-grey-light',
    'aria-checked:dark:bg-grey-light',
    'aria-checked:bg-white',
    'aria-checked:dark:bg-white',
    'aria-checked:bg-dark',
    'aria-checked:dark:bg-dark',

    // FONT
    'aria-checked:bg-font-primary',
    'aria-checked:dark:bg-font-primary',
    'aria-checked:bg-font-secondary',
    'aria-checked:dark:bg-font-secondary',
    'aria-checked:bg-font-tertiary',
    'aria-checked:dark:bg-font-tertiary',

    // STROKES
    'aria-checked:bg-stroke',
    'aria-checked:dark:bg-stroke',
    'aria-checked:bg-stroke-light',
    'aria-checked:dark:bg-stroke-light',
    'aria-checked:bg-stroke-extra-light',
    'aria-checked:dark:bg-stroke-extra-light',

    // STATE COLORS (ERROR)
    'aria-checked:bg-red-main',
    'aria-checked:dark:bg-red-main',
    'aria-checked:bg-red-medium',
    'aria-checked:dark:bg-red-medium',
    'aria-checked:bg-red-background-tone',
    'aria-checked:dark:bg-red-background-tone',

    // STATE COLORS (WARNING)
    'aria-checked:bg-yellow-main',
    'aria-checked:dark:bg-yellow-main',
    'aria-checked:bg-yellow-medium',
    'aria-checked:dark:bg-yellow-medium',
    'aria-checked:bg-yellow-background-tone',
    'aria-checked:dark:bg-yellow-background-tone',

    // STATE COLORS (SUCCESS)
    'aria-checked:bg-green-main',
    'aria-checked:dark:bg-green-main',
    'aria-checked:bg-green-medium',
    'aria-checked:dark:bg-green-medium',
    'aria-checked:bg-green-background-tone',
    'aria-checked:dark:bg-green-background-tone',
  ],
  plugins: [],
}

