module.exports = {
  theme: {
    extend: {},
    container: {
      center: true, // Centers the container horizontally
      padding: {
        DEFAULT: '1rem', // Padding for all screen sizes
        sm: '2rem', // Padding for small screens
        lg: '4rem', // Padding for large screens
        xl: '5rem', // Padding for extra-large screens
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
