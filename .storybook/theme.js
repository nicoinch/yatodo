import { create } from '@storybook/theming';
import tokens from '../tailwind.config';

export default create({
  base: 'dark',

  colorPrimary: tokens.theme.extend.colors.teal['400'],
  colorSecondary: tokens.theme.extend.colors.teal['400'],

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode:
    '"\'SohneMono-Buch\'", "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace',

  brandTitle: 'todo-app',
  brandUrl: 'https://github.com/nicoinch/todo-app',
  brandImage: 'https://storage.googleapis.com/nicoinch-public/LogoTodo-Storybook.png',
});
