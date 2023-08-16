import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle, Themes } from '@mds/components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: Themes,
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: () => <Global styles={GlobalStyle} />,
    }),
  ],
};

export default preview;
