/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry-regular', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'cicular-web': ['cicular-web'],
        'robert-medium': ['robert-medium'],
        'robert-regular': ['robert-regular'],
        'valorant': ['valorant'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        red: {
          primary: '#ff5246',
          secondary: '#f03131',
          tertiary: '#ff1023',
        },
        yellow: {
          primary: "#8e983f",
          secondary: "#edff66",
        },
        button: {
          50: '#EE7F6D',
          100: '#EB635E',
          150: "#e9464e",

        }
      }
    },
  },
  plugins: [],
}
