module.exports = {
<<<<<<< HEAD
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
=======
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
