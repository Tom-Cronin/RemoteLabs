# RemoteLabs

In order to develop this software you will need a good idea such as Visual Studio Code and to have Node installed.
While you can use brew to install this its recomeded to use their website to install node

* [Node](https://nodejs.org/en/) 
* [Visual Studio Code](https://code.visualstudio.com/) - IDE

## Development
**Note** for fist time installation after cloning the repo use
```
  npm install -g @angular/cli
```
Then cd into the repo 
```
  npm install
```
to download the dependancies


You use node to run the app in the top level directory of the project
```
  npm run start:electron
```

If you want to do live updates while working, use this comand
It will open a web browser and do live updates of the app
```
  ng serve --open
```

## Authors

* **[Tom Cronin](https://github.com/FumoDraconis)**
* **[Arthan Jansen](https://github.com/ArthanJans)**
* **[Sinead O'Sullivan](https://github.com/Sinead-OSullivan)**

## Built With

* [Electron](https://www.electronjs.org/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
