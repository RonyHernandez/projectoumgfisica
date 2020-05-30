# Fisica 1

<!-- markdownlint-disable MD033 MD034 MD007 -->

React Application for the Mobile Administrative Suite.

Para correr esta aplicacion se deben de cumplir todos los requerimientos.

## Para Correr en Desarrollo

```bash
# Install dependecies
yarn install

# Build and start webpack server
yarn run dev

# Navigate to the dev site
http://localhost:3001
```

## Dependencias globales

1. Git ([git-linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   or [git-windows](https://git-for-windows.github.io/)).
1. [Node.js](https://nodejs.org/en/) version 10+.<br>
   It is preferable install **[nvm](https://github.com/creationix/nvm)**
   (Node Version Manager).
1. [Yarn](https://yarnpkg.com/es-ES/docs/install#windows-stable) installed as global package.

Consider install Node Version Manager (**nvm**) to upgrade easily the NodeJS version.<br>
Go to https://github.com/creationix/nvm and check the installation process for your OS.

> If you are running Windows, you can install
> [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows).
> Follow every step mentioned
> [here](https://github.com/coreybutler/nvm-windows#installation--upgrades)
> so that nvm will be correctly installed to manage multiple installations
> of **node.js** (with **npm**) on a Windows computer.

---

> If you are running Windows, you can install [git for windows](https://git-for-windows.github.io/).
> As a command line tool, it is recommended to use the **Git Bash**.
> The BASH emulation behaves just like the "git" command in LINUX and UNIX environments.
> See how to [Add Git Bash to VS Code](#add-git-bash-to-vs-code).

### Verificar dependencias globales

```bash
# Check global dependencies
node --version
npm --version
yarn --version

# If yarn is not installed
npm i -g yarn
```

---

## Otros Comandos

- **`yarn run dev`** runs the TS linter, builds in "development" mode and starts the webpack-dev-server.
- **`yarn run start`** just starts the webpack-dev-server.
- **`yarn run build`** runs TS linter, builds in "production" mode, copy assets from `src/static` to `public/public` folder, and runs unit tests.
- **`yarn run copy-assets`** copy assets from `src/static` to `public/*` folder. You can pass the `--subfolder=*` parameter.

---

## VS Code Extensiones

Recomendamos utilizar VS Code.<br>
Ir al panel izquierdo y darle click a las **Extensions** `(Ctrl+Shift+X)`

1. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): it uses `.editorconfig` to resolve the configuration and applies any relevant editor settings.
1. [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint): Markdown linting and style checking for Visual Studio Code.
1. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): autocompletes npm modules in import statements.
1. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): format your JavaScript / TypeScript / CSS / MD.
1. [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): extension to lint CSS / SCSS / Less with stylelint.
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): integrates ESLint JavaScript into VS Code.

---
