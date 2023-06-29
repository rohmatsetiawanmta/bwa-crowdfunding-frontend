module.exports = {
  theme: {
    extend: {
      boxShadow: {
        outline: '0 0 0 1px rgba(66, 153, 225, 0.5)',
      },
      colors: {
        'orange-button': '#FF872E',
        'green-button': '#1ABC9C',
        'purple-hover': '#4C52F8',
        'purple-hover-stroke': '#8286FF',
        'purple-progress': '#3B41E3',
        'primary-color': '#820263',
        'second-color': '#FFD400',
        'third-color': '#E6BF00',
        'light-color': '#EADEDA',
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
  variants: {},
  plugins: [],
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `utils/**/*.{js,ts}`,
    `nuxt.config.js`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `Error.{js,ts,vue}`,
    `error.{js,ts,vue}`,
    `app.config.{js,ts}`,
  ],
}
