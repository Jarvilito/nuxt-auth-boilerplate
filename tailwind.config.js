/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
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
  plugins: [],
}

