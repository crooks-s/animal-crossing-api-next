/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/animal-crossing-bg.jpg')",
        "card-pattern": "url('/images/animal-crossing-wood-bg.png')",
        "chat-pattern": "url('/images/chat-bubble.png')",
      },
      boxShadow: {
        "3xl": "-20px 0 400px -15px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
