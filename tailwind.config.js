/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'img-login': "url('/images/korok_login_background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
