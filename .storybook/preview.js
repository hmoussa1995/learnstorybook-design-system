export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F6F9FC',
      },
      {
        name: 'dark',
        value: '#2F2F2F',
      },
    ],
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  }
};

// import { ThemeProvider } from 'styled-components';

// import { Theme } from './theme';

// // Function to obtain the intended theme
// const getTheme = (themeName) => {
//   return Theme[themeName]
// }

// const withThemeProvider=(Story,context)=>{
//   const theme = getTheme(context.globals.theme);
//   return (
//     <ThemeProvider theme={theme}>
//       <Story {...context} />
//     </ThemeProvider>
//   )
// }
// export const decorators = [withThemeProvider];