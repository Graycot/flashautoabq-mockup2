module.exports = {
  purge: {
   node: 'layers',
   content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
   extend: {
   colors: {
     'primary-light': '#5a0703dd',
     'primary-dark': '#5a0703',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
 }