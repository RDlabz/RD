/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rd-base': 'var(--background)',
        'rd-fg': 'var(--foreground)', 
        'rd-primary': 'var(--primary)'
      },
      fontSize: {
        'rd-title': 'var(--title)',
        'rd-nav': 'var(--nav)',
        'rd-sub': 'var(--sub-nav)',
        'rd-body': 'var(--body)',
        'rd-small': 'var(--small)',
      },
      fontFamily: {
        'rd-pixel': ['var(--rd-pixel)', 'monospace'],
        'rd-terminal': ['var(--rd-terminal)', 'monospace'],
        'rd-text': ['var(--rd-text)', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        fadeInDelay1: "fadeIn 1s forwards 0s",
        fadeInDelay2: "fadeIn 1s forwards 1.2s",
        fadeInDelay3: "fadeIn 1s forwards 2.4s",
      },
    }
  },
  plugins: [],
}