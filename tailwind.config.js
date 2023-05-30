/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeBase: '#1A1B1E',
        themeSlate: '#2E3033',
        themeDarkGray: 'rgba(26, 27, 30, 0.5)',
        themeText: '#B8B8B8',
        themeLightSlate: '#9F9F9F',
      },
    },
  },
  plugins: [],
};
