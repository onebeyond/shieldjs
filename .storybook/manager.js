import { addons } from '@storybook/addons';
import shieldJSTheme from './shieldjs.theme';
import favicon from './favicon.ico';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: shieldJSTheme,
});