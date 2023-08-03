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
      "name": "monorepo",
      "path": ".."
    }
  ],
  "settings": {
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    },
    "files.eol": "\n"
  },
  "extensions": {
    "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
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
    "eslint.nodePath": ".yarn/sdks",
    "typescript.tsdk": ".yarn/sdks/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
  }
}
```

## PnP Prettier setting - .vscode/settings.json

Root 설정을 위해서, packages 안에서는 ../../ 와 같이 상대 경로로 설정 해야한다.

```json
{
  "prettier.prettierPath": ".yarn/sdks/prettier/index.js"
}
```
