import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/app/globals.css';

// Initialize MSW
initialize();

// replace with the name of your tailwind css file
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [],
};

export default preview;
