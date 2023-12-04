import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': {opacity: '0'},
          '100%': {opacity: '100'}
        }
      },
      animation: {
        fadein: 'fadein 2s linear',
      }
    },
  },
  plugins: [],
}
export default config
