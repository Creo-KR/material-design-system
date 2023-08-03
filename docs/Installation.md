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

## vscode workspace - mds.code-workspace

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

## yarn workspace - package.json

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

## PnP setting - mds.code-workspace

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

## PnP Prettier setting - .vscode/settings.json

Root 설정을 위해서, packages 에서는 `"../../.yarn/sdks/prettier/index.js"` 와 같이 상대 경로로 설정 해야한다.

```json
{
  "prettier.prettierPath": ".yarn/sdks/prettier/index.js"
}
```

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

## Storybook - .storybook/tsconfig.json

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

## Add Workspace Package (@mds/components) - mds.code-workspace

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

## Init Yarn Package - mds/packages/mds-components

```bash
yarn init -y
```
