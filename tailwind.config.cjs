/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,svelte}'
  ],
  theme: {
    extend: {},
    colors: {
      'marine-blue': '#02295a',
      'purplish-blue': '#473dff',
      'pastel-blue': '#adbeff',
      'light-blue': '#bfe2fd',
      'strawberry-red': '#ed3548',

      'cool-gray': '#9699ab',
      'light-gray': '#d6d9e6',
      'magnolia': '#f0f6ff',
      'alabaster': '#fafbff',
      'white': '#ffffff',
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
};
