import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {},
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
  },
};
