# Installation

## node.js@20.5.0

## npm@latest

```bash
npm install -g npm@latest
```

## yarn@stable

```bash
corepack enable
corepack prepare yarn@stable  --activate
yarn set version latest
# yarn initialize
yarn init -2
# PnP 사용 안할 시
# yarn config set nodeLinker node-modules
```

## vscode workspace - `mds.code-workspace`

```json
{
  "folders": [
    {
      "name": "mds-monorepo",
      "path": "."
    }
  ],
  "settings": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    },
    "files.eol": "\n"
  },
  "extensions": {
    "recommendations": [
      "arcanis.vscode-zipfs",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ]
  }
}
```

## yarn workspace - `package.json`

```json
{
  "name": "@mds/monorepo",
  "private": true,
  "version": "0.0.0",
  "packageManager": "yarn@3.6.1",
  "workspaces": ["packages/*"]
}
```

## Typescript

```bash
yarn add -D typescript
yarn tsc --init
```

## Install Yarn Plugin

```bash
yarn plugin import typescript
yarn plugin import workspace-tools
yarn plugin import interactive-tools
```

## ESLint, Prettier

```bash
yarn add -D eslint prettier eslint-plugin-prettier
npm init @eslint/config -- --config next,prettier
#yes
#yarn

# Install PnP SDK(typescript, eslint, prettier)
yarn dlx @yarnpkg/sdks vscode
# prettier@3.0.0 버전과 yarn sdk가 호환이 잘 안된다.
yarn add -D prettier@2.8.8 eslint-plugin-prettier@4.2.1
```

## PnP setting - `mds.code-workspace`

```json
{
  "settings": {
    /* ... */
    "search.exclude": {
      "**/.yarn": true,
      "**/.pnp.*": true
    },
    /* Workspace root folder name (mds-monorepo) */
    "eslint.nodePath": "mds-monorepo/.yarn/sdks",
    "typescript.tsdk": "mds-monorepo/.yarn/sdks/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "prettier.prettierPath": "../../.yarn/sdks/prettier/index.js"
  }
}
```

세팅 이후 `>TypeScript: Select Typescript Version` 명령 실행하고 `Use Workspace Version`

## PnP Prettier setting - `.vscode/settings.json`

Root 설정을 위해서 아래와 같이 설정한다.

```json
{
  "prettier.prettierPath": ".yarn/sdks/prettier/index.js"
}
```

packages 에서는 `"../../.yarn/sdks/prettier/index.js"` 와 같이 상대 경로로 설정 해야한다.(Workspace 설정)

## Storybook

```bash
npx storybook@latest init
#y
#Webpack 5
#y
#nextjs
#y

# Install Storybook Dependencies
yarn add -D webpack next
```

## Storybook - `.storybook/tsconfig.json`

For main.ts, preview.ts

```json
{
  "extends": "../tsconfig.json",
  "references": [
    {
      "path": "../"
    }
  ],
  "include": ["./*.ts*"]
}
```

## Add Workspace Package (@mds/components) - `mds.code-workspace`

```json
{
  "folders": [
    {
      "name": "mds-monorepo",
      "path": "."
    },
    {
      "name": "mds-components",
      "path": "./packages/mds-components"
    }
  ]
  /* ... */
}
```

## Init Yarn Package - `$ mds/packages/mds-components/`

```bash
yarn init -y
yarn add -D typescript
```

## Root tsconfig.json Setting - `mds/tsconfig.json`

packages/mds-components/src/index.ts 파일을 메인으로 씀

```json
{
  /* ... */
  "compilerOptions": {
    /* ... */
    "baseUrl": ".",
    "paths": {
      "@mds/components": ["./packages/mds-components/src/index"]
    }
  },
  "references": [
    {
      "path": ["./packages/mds-components"]
    }
  ]
}
```

## Package tsconfig.json Setting - `mds/packages/mds-components/tsconfig.json`

Root 의 설정을 그대로 가져가기 위해서

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../"
  },
  "references": [
    {
      "path": ["../../"]
    }
  ],
  "include": ["./src/**/*.ts", "./src/**/*.tsx"]
}
```

## Install Emotion (CSS Prop) - `$ mds/`

```bash
yarn add -D @emotion/react
yarn add -D @emotion/babel-plugin @babel/core @babel/preset-react
```

## Storybook Babel Setting - `mds/.storybook/main.ts`

```ts
const config: StorybookConfig = {
  /* ... */
  babel: (config, options) => {
    config.plugins = [...(config.plugins || []), '@emotion'];
    config.presets = [
      ...(config.presets || []),
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ];

    return config;
  },
};

export default config;
```

## tsconfig.json Setting - `mds/tsconfig.json`

```json
{
  /* ... */
  "compilerOptions": {
    /* ... */
    "jsxImportSource": "@emotion/react"
  }
}
```

## Install Emotion in @mds/components - `$ mds/packages/mds-components/`

```bash
yarn add @emotion/react react react-dom
yarn add -D @storybook/react @storybook/testing-library
```

## Example Storybook Source - `mds/packages/mds-components/src/components/button/Button.stories.ts`

```ts
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mds/components';

export const Primary: StoryObj<Meta<typeof Button>> = {};

export default {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;
```

## Apply Emotion Global Style on Storybook - `$ mds/`

```bash
yarn add -D @storybook/addon-styling
```

## Apply Emotion Global Style on Storybook - `mds/.storybook/main.ts`

```ts
const config: StorybookConfig = {
  /* ... */
  addons: [
    /* ... */
    getAbsolutePath('@storybook/addon-styling'),
  ],
};
```

## Apply Emotion Global Style on Storybook - `mds/.storybook/preview.tsx`

```tsx
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle, Themes } from '@mds/components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview, ReactRenderer } from '@storybook/react';

const preview: Preview = {
  /* ... */
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: Themes,
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: () => <Global styles={GlobalStyle} />,
    }),
  ],
};

export default preview;
```

## Child Packages Dependencies Version - `mds/packages/mds-components/package.json`

```json
{
  /* ... */
  "dependencies": {
    "any dependency": "*"
    /* ... */
  },
  "devDependencies": {
    "any dependency": "*"
  }
}
```
