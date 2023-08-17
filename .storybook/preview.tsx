import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle, Themes } from '@mds/components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview, ReactRenderer } from '@storybook/react';

const GlobalStyles = () => <Global styles={GlobalStyle} />;

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
    withThemeFromJSXProvider<ReactRenderer>({
      themes: Themes,
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
