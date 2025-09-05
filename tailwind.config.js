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
        'rd-blue': 'var(--background)',
        'rd-white': 'var(--foreground)', 
        'rd-primary': 'var(--primary)'
      },
      fontSize: {
        'rd-title': 'var(--title)',
        'rd-nav': 'var(--nav)',
        'rd-body': 'var(--body)',
        'rd-small': 'var(--small)',
      },
      fontFamily: {
        'rd-pixel': ['var(--rd-pixel)', 'monospace'],
        'rd-terminal': ['var(--rd-terminal)', 'monospace']
      }
    }
  },
  plugins: [],
}