const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_moduels/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_moduels/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px'
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: []
});
