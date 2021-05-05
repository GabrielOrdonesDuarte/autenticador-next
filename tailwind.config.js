/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './children/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'login-card': '400px',
        'logo-width': '330px',
      },
      colors: {
        loginBtn: '#65d818',
        loginBtnActive: '#51ad13',
      },
      outline: {
        zero: '0 !important',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
