# Fisica 1

<!-- markdownlint-disable MD033 MD034 MD007 -->

React Application for the Mobile Administrative Suite.

In order to run this application, all the [requirements](#global-dependencies)
must be met.

## Running in Development

```bash
# Install dependecies
yarn install

# Build and start webpack server
yarn run dev

# Navigate to the dev site
http://localhost:3001
```

## Global dependencies

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

### Checking global dependencies

```bash
# Check global dependencies
node --version
npm --version
yarn --version

# If yarn is not installed
npm i -g yarn
```

---

## Other Commands

- **`yarn run dev`** runs the TS linter, builds in "development" mode and starts the webpack-dev-server.
- **`yarn run start`** just starts the webpack-dev-server.
- **`yarn run build`** runs TS linter, builds in "production" mode, copy assets from `src/static` to `public/public` folder, and runs unit tests.
- **`yarn run copy-assets`** copy assets from `src/static` to `public/*` folder. You can pass the `--subfolder=*` parameter.
- **`yarn run lint`** runs the `tsc` compiler and fixes broken syntax/rules with `eslint` for typescript files in `src/client` folder.
- **`yarn run lint:src`** just runs `eslint` to validate and fixes syntax/rules for typescript files in the `src/client` folder.
- **`yarn run pretty`** runs `prettier` to format typescript files by applying code-style rules defined in `eslint` and `prettier` config files.
- **`yarn run test`** runs the TS linter, builds in "development" mode and runs all unit tests with `jest`.
- **`yarn run update:articles`** download from vcs.services.dev.car.com all the articles specified on [./src/static/api/articles.json](./src/static/api/articles.json).

---

## VS Code Extensions

The recommended way to lint files is by using VS Code.<br>
Go to the left panel, and click the icon for **Extensions** `(Ctrl+Shift+X)`

1. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): it uses `.editorconfig` to resolve the configuration and applies any relevant editor settings.
1. [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint): Markdown linting and style checking for Visual Studio Code.
1. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): autocompletes npm modules in import statements.
1. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): format your JavaScript / TypeScript / CSS / MD.
1. [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): extension to lint CSS / SCSS / Less with stylelint.
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): integrates ESLint JavaScript into VS Code.

Other extensions you may want to try:

1. [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): debug JavaScript code in Google Chrome browser, or other targets that support the Chrome DevTools Protocol.
1. [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): Show TODO, FIXME, etc. comment tags in a tree view.
1. [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Display import/require package size in the editor.
1. [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): REST Client allows you to send HTTP request and view the response in VS Code.
1. [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons): If you are not using any theme, you can add this set of icons for files in VS Code.
1. [New Moon Syntax Theme](https://marketplace.visualstudio.com/items?itemName=taniarascia.new-moon-vscode): The optimized dark theme for web development.
1. [One Monokai Theme](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai): A cool dark theme.
1. [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer): SVG Viewer for VS Code.

---

## Debugging

The way we usually debug JavaScript code, is through a web browser and
typing the keyword `debugger` or `console.log` in our files, but switching
between the browser and VS Code can be annoying. VS Code provides the extension
[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
which enables you to edit, debug, set breakpoints to your JavaScript
application without leaving VS Code!

> See more details about [Debugging with VS Code](https://gist.github.com/jherax/a8e3bbf5f710d69bbb083c89977740b7).

### Debugging Node

1. Open the JavaScript file (\*.js, \*.ts) you want to debug.
1. Set breakpoints or the `debugger;` statement where you want to stop.
1. Press **`Ctrl + Shift + D`**, or click on the **Debug** icon in the left panel.
1. Select DEBUG &#8227; **Node: Current File** option in the top panel.
1. Press **`F5`** to start debugging.

### Debugging Jest

1. Open the TypeScript file (\*.spec.ts) you want to debug.
1. Set breakpoints or the `debugger;` statement where you want to stop.
1. Press **`Ctrl + Shift + D`**, or click on the **Debug** icon in the left panel.
1. Select DEBUG &#8227; **Jest: Current File** option in the top panel.
1. Press **`F5`** to start debugging.

---

## Add Git Bash to VS Code

Using `Powershell` or the default `cmd` in Windows are not the best-suited to use with **git**,
because those terminals lack a lot of commands and utilities being used in **git**.

The best way to leverage the **git** environment from VS Code is to link the Git Bash terminal
to VS Code. To do that, add the following steps:

- Press `Ctrl + Shift + P` and write `"default shell"`, then click on the option
  `Terminal: Select Default Shell` and pick `Git Bash`.
- Restart all instances of VS Code.

> Git Bash for Windows is not just bash compiled for Windows. It's package that contains bash (which is a command-line shell) and a collection of other, separate _\*nix_ utilities like _ssh, scp, cat, find_ and others (which you run using the shell), compiled for Windows, and a new command-line interface terminal window called **mintty**.

Read more about VS Code [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)

---

## Lint and Commit

<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f436.png" alt="husky" width="20" style="float: left; margin-right: 5px;"/> Git hooks made easy!

- This project uses [Husky](https://github.com/typicode/husky) as **pre-commit**
  tool which can prevent commits with errors, by leveraging the power of
  [Git hooks](https://git-scm.com/book/uz/v2/Customizing-Git-Git-Hooks).

- Also we are using [Prettier](https://prettier.io/docs/en/precommit.html)
  to re-format code-style in the _staged_ files before you commit.

- And finally, [ESLint](https://eslint.org/docs/user-guide/command-line-interface) is used to
  check TypeScript code for readability, and syntax errors.
  > - When **ESLint** discovers an error with **Husky**, the intent to create a new `commit`
  >   will be aborted, showing the list of staged files with errors.
  > - You can open each file in the list and fix errors, or try to fix all
  >   by running `yarn run pretty && yarn run lint` in the terminal.<br>
