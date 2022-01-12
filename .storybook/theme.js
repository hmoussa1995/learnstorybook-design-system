import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'deepskyblue',
  colorSecondary: 'green',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://blue-images-isi.imgix.net/en-us/-/media/ISI/Intuitive/Card/Press-Resources/intuitive-logo-black-1060874-low-res-.png?q=100&w=540&h=360&auto=compress%2Cformat&fit=crop&crop=entropy&s=aba81d33a7bfae61c4bca9009d19890a',
});