module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      flexbox: 'no-2009'
    })
  ],
};
