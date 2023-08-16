import { default as Color } from './color';
import { default as Elevation } from './elevation';
import { default as Typography } from './typography';
export { default as GlobalStyle } from './global';

const LightTheme = {
  Color: Color.light,
  Elevation: Elevation.light,
  Typography,
};

const DarkTheme = {
  Color: Color.dark,
  Elevation: Elevation.dark,
  Typography,
};

type MDSTheme = typeof LightTheme & typeof DarkTheme;

export const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

declare module '@emotion/react' {
  export interface Theme extends MDSTheme {}
}
