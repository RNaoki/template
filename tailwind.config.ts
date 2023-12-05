import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

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
        },
        slidein: {
          '0%': {transform: 'translateY(1200%)', opacity: '0'},
          '100%': {transform: 'translateY(0%)', opacity: '100'}
        }
      },
      animation: {
        fadein: 'fadein 2s linear',
        slidein: 'slidein .3s forwards',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }:{matchUtilities:any, theme:any}) => {
      matchUtilities(
        {
          "animation-delay": (value: any) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}
export default config
