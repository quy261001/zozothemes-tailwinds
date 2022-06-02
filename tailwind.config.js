module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './*.{js,jsx,ts,tsx,vue}',
  ],
  content: [],
  theme: {
    extend: {
      spacing: {
        33: "33px",
        1: "1px",
      },  
      colors: {
        'bgWhile': 'rgba(255, 255, 255, 0.8)',
        'bg24': 'rgba(0, 0, 0, 0.7)',
      },
      boxShadow: {
        'drop': '0 6px 12px rgb(0 0 0 / 18%)',
      }
    },
  },
  plugins: [],
}
