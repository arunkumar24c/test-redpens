/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brnd-red':'#D82128',
        'brnd-gray':'#F8F8F8',
        'brnd-border':'#E1E1E1',
        'brnd-black': '#1E1E1E',
        'brnd-white':'#FFFFFF',
        'brnd-gray-1':'#D9D9D9',
        'brnd-dark-blue':'#1A1757',
        'brnd-title-clr-1':'#308B81',
        'brnd-secondary-color':'#0EA7AF',
   
       },
      visibility:['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
