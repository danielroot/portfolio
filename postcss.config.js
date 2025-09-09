module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      flexbox: 'no-2009'
    })
  ],
};
