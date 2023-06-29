/** @type {import('tailwindcss').Config} */

import { values } from "./tailwind.rewrite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },

      colors: {
        "soft-cyan": "hsl(174, 77%, 80%)", // Full Slider Bar
        "strong-cyan": "hsl(174, 86%, 45%)", // Slider Backround
        "light-grayish-red": "hsl(14, 92%, 95%)", // Discount Background
        "light-red": "hsl(15, 100%, 70%)", // Discount Text
        "pale-blue": "hsl(226, 100%, 87%)", // CTA Text
        "very-pale-blue": "hsl(230, 100%, 99%)", // Main Background
        "light-grayish-blue-1": "hsl(224, 65%, 95%)", // Empty Slider Bar
        "light-grayish-blue-2": "hsl(223, 50%, 87%)", // Toggle Background
        "grayish-blue": "hsl(225, 20%, 60%)", // Text
        "dark-desaturated-blue": "hsl(227, 35%, 25%)", //Text & CTA Background
      },

      backgroundImage: {
        pattern: "url('/images/bg-pattern.svg')",
        "pattern-circle": "url('/images/pattern-circles.svg')",
      },

      ...values,
    },
  },
  plugins: [],
};
