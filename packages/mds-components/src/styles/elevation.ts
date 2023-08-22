import { Theme, css } from '@emotion/react';

export default {
  light: {
    elevation1: (theme: Theme) => css`
      box-shadow: 0px 1px 3px 1px ${theme.Color.sys.shadow}26,
        0px 1px 2px 1px ${theme.Color.sys.shadow}4d;
    `,
    elevation2: (theme: Theme) => css`
      box-shadow: 0px 2px 6px 2px ${theme.Color.sys.shadow}26,
        0px 1px 2px 0px ${theme.Color.sys.shadow}4d;
    `,
    elevation3: (theme: Theme) => css`
      box-shadow: 0px 1px 3px 0px ${theme.Color.sys.shadow}4d,
        0px 4px 8px 3px ${theme.Color.sys.shadow}26;
    `,
    elevation4: (theme: Theme) => css`
      box-shadow: 0px 2px 3px 0px ${theme.Color.sys.shadow}4d,
        0px 6px 10px 4px ${theme.Color.sys.shadow}26;
    `,
    elevation5: (theme: Theme) => css`
      box-shadow: 0px 4px 4px 0px ${theme.Color.sys.shadow}4d,
        0px 8px 12px 6px ${theme.Color.sys.shadow}26;
    `,
  },
  dark: {
    elevation1: (theme: Theme) => css`
      box-shadow: 0px 1px 2px 0px ${theme.Color.sys.shadow}4d,
        0px 1px 3px 1px ${theme.Color.sys.shadow}26;
    `,
    elevation2: (theme: Theme) => css`
      box-shadow: 0px 1px 2px 0px ${theme.Color.sys.shadow}4d,
        0px 2px 6px 2px ${theme.Color.sys.shadow}26;
    `,
    elevation3: (theme: Theme) => css`
      box-shadow: 0px 1px 3px 0px ${theme.Color.sys.shadow}4d,
        0px 4px 8px 3px ${theme.Color.sys.shadow}26;
    `,
    elevation4: (theme: Theme) => css`
      box-shadow: 0px 2px 3px 0px ${theme.Color.sys.shadow}4d,
        0px 6px 10px 4px ${theme.Color.sys.shadow}26;
    `,
    elevation5: (theme: Theme) => css`
      box-shadow: 0px 4px 4px 0px ${theme.Color.sys.shadow}4d,
        0px 8px 12px 6px ${theme.Color.sys.shadow}26;
    `,
  },
};
