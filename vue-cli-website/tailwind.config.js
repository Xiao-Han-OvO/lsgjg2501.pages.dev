/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 在 v4 中，自定义颜色可能需要不同的方式
      colors: ({ colors }) => ({
        // 保留默认颜色
        ...colors,
        // 添加自定义颜色
        'vue-start': '#00cd95',
        'vue-end': '#438bf1',
      }),
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '42': '10.5rem',
        '60': '15rem',
        '90': '22.5rem',
        '120': '30rem',
        '150': '37.5rem',
        '180': '45rem',
        '210': '52.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
