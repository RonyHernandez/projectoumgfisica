# Fisica 1

<!-- markdownlint-disable MD033 MD034 MD007 -->

React Application for the Mobile Administrative Suite.

Para correr esta aplicacion se deben de cumplir todos los requerimientos.

## Para Correr en Desarrollo

```bash
# Instalar Dependencias
yarn install

# Buildear y Correr Webpack
yarn run dev

# Navegar al sitio en Desarrollo
http://localhost:3001
```

## Dependencias globales

1. Git ([git-linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   or [git-windows](https://git-for-windows.github.io/)).
1. [Node.js](https://nodejs.org/en/) version 10+.<br>
   Es preferiblemente instalar **[nvm](https://github.com/creationix/nvm)**
   (Node Version Manager).
1. [Yarn](https://yarnpkg.com/es-ES/docs/install#windows-stable) instalar como un paquete global.

Recomendamos instalar (**nvm**) para un mejor manejo de versiones de Node.js<br>
https://github.com/creationix/nvm

> Si estas corriendo en Windows puedes instalar
> [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows).
> Sigue cada paso especificado
> [here](https://github.com/coreybutler/nvm-windows#installation--upgrades)
> de esa manera NVM estara instalado y puedes manejar distintas versiones de Node.js

---

> Si estas corriendo en windows puedes instalar [git para windows](https://git-for-windows.github.io/).
> Como linea de comando te aconsejamos utilizar **Git Bash**.

### Verificar dependencias globales

```bash
# verificar dependecias globales.
node --version
npm --version
yarn --version

# Si yarn no esta instalado.
npm i -g yarn
```

---

## Otros Comandos

- **`yarn run dev`** Build en Desarrollo y inicia un server webpack.
- **`yarn run start`** inicia un server webpack.
- **`yarn run build`** Build en Produccion y inicia un server webpack.
- **`yarn run copy-assets`** copy archivos estaticos `src/static` para `public/*` folder.

---

## VS Code Extensiones

Recomendamos utilizar VS Code.<br>
Ir al panel izquierdo y darle click a las **Extensions** `(Ctrl+Shift+X)`

1. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
1. [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
1. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
1. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
