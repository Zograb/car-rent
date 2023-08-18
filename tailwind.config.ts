import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#006AFF',
        'primary/20': 'rgba(0, 106, 255, 0.2)',
        'secondary': '#FF2727',
        'green': '#52C93F',
        'gray2': '#525256',
        'gray3': '#656575',
        'gray4': '#DEDEDE',
        'dark-gray': '#999999',
        'dark-gray/10': 'rgba(153, 153, 153, 0.10)',
        'white': '#FFFFFF',
        'white/20': 'rgba(255, 255, 255, 0.2)',
        'white/25': 'rgba(255, 255, 255, 0.25)',
        'white/80': 'rgba(255, 255, 255, 0.8)',
        'floralWhite': '#F8F7F1',
        'black': '#1A1919',
        'black/20': 'rgba(255, 255, 255, 0.2)',
      },
      gridTemplateColumns: {
        dashboard: 'max-content 1fr',
        header: 'max-content 1fr',
        'car-availablity': '1fr 2fr max-content',
      },
      spacing: {
        sidebar: '15rem',
        dashboardColumn: '21.5rem',
        'logo-vertical': '1.875rem',
      },
      fontSize: {
        logo: '1.625rem',
      },
      boxShadow: {
        'input': '0 2.7px 27px rgba(69, 69, 80, 0.1)',
        'input-focused': '0 3.5px 30px rgba(69, 69, 80, 0.2)',
        'section': '0px 8px 24px rgba(69, 69, 80, 0.1)',
        'date-picker': '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
      },
      minWidth: {
        table: '39rem',
      },
      maxWidth: {
        calendar: '15rem',
        xxs: '8rem',
      },
    },
  },
  plugins: [],
}
export default config
