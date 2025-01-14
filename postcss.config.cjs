/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')(),
    require('autoprefixer')(),
  ],
}