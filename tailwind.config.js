/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      //custom color, not adding on top of theme because it will override the default colors
      colors: {

        // PRIMARY COLOURS
        "brand-blue": {
          light: "#0054A8",
          DEFAULT: "#0054A8",
          dark: "#4197ED"
        },

        "brand-dark-blue": {
          light: "#003D7A",
          DEFAULT: "#003D7A ",
          dark: "#003162"
        },

        "brand-medium-blue": {
          light: "#64A2DF",
          DEFAULT: "#64A2DF ",
          dark: "#81C1FF"
        },

        "brand-extra-light-blue": {
          light: "#F0F8FF",
          DEFAULT: "#F0F8FF",
          dark: "#182D4D"
        },

        // OCEAN

        "ocean": {
          light: "#00ABD9",
          DEFAULT: "#00ABD9",
          dark: "#00ABD9"
        },

        "ocean-medium": {
          light: "#67DBFA",
          DEFAULT: "#67DBFA",
          dark: "#4BCEF1"
        },

        "ocean-light": {
          light: "#B8F0FF",
          DEFAULT: "#B8F0FF",
          dark: "#A5ECFF"
        },

        // NEUTRALS
        "neutral-medium": {
          light: "#EDF1F6",
          DEFAULT: "#EDF1F6",
          dark: "#535B64"
        },

        "neutral-medium-dark": {
          light: "#A5A8AD",
          DEFAULT: "#A5A8AD",
          dark: "#182D4D"
        },

        "grey-medium": {
          light: "#E8EAED",
          DEFAULT: "#E8EAED",
          dark: "#575B61"
        },

        "grey-light": {
          light: "#EFF2F6",
          DEFAULT: "#EFF2F6",
          dark: "#3B3F46 "
        },

        "white": {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#FFFFFF"
        },
        "dark": {
          light: "#282C32",
          DEFAULT: "#282C32",
          dark: "#212529"
        },

        // FONT
        "font-primary": {
          light: "#384250",
          DEFAULT: "#384250",
          dark: "#F0F3F6"
        },

        "font-secondary": {
          light: "#4F5968",
          DEFAULT: "#4F5968",
          dark: "#D2D6DB"
        },

        "font-tertiary": {
          light: "#858D98",
          DEFAULT: "#858D98",
          dark: "#BDC2C9"
        },

        // STROKES

        "stroke": {
          light: "#ADB6C3",
          DEFAULT: "#ADB6C3",
          dark: "#9DA7B6"
        },

        "stroke-light": {
          light: "#D5DBE2",
          DEFAULT: "#D5DBE2",
          dark: "#8994A4"
        },

        "stroke-extra-light": {
          light: "#E7EAEE",
          DEFAULT: "#E7EAEE",
          dark: "#6D7787"
        },

        //STATE COLOURS

        //ERROR
        "red-main": {
          light: "#EC6257",
          DEFAULT: "#EC6257",
          dark: "#FF756A"
        },
        "red-medium": {
          light: "#FD9C95",
          DEFAULT: "#FD9C95",
          dark: "#FD9C95"
        },
        "red-background-tone": {
          light: "#FFF5F4",
          DEFAULT: "#FFF5F4",
          dark: "#310200"
        },

        //WARNING
        "yellow-main": {
          light: "#FFA902",
          DEFAULT: "#FFA902",
          dark: "#FFDD63"
        },
        "yellow-medium": {
          light: "#FFC759",
          DEFAULT: "#FFC759",
          dark: "#FFC759"
        },
        "yellow-background-tone": {
          light: "#FFFCF3",
          DEFAULT: "#FFFCF3",
          dark: "#261E07"
        },

        //SUCCESS
        "green-main": {
          light: "#8DC800",
          DEFAULT: "#8DC800",
          dark: "#ABD34A"
        },
        "green-medium": {
          light: "#D2EF8C",
          DEFAULT: "#D2EF8C",
          dark: "#9AC927"
        },
        "green-background-tone": {
          light: "#FBFFF1",
          DEFAULT: "#FBFFF1",
          dark: "#16230D"
        },
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

