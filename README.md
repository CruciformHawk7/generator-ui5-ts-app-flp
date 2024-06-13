# generator-ui5-ts-app-flp

This is a fork of [generator-ui5-ts-app][https://github.com/ui5-community/generator-ui5-ts-app] with the addition of FLP Sandbox.

[![License Status][license-image]][license-url]

[Yeoman](https://yeoman.io/) generator kickstarting the development of UI5 applications using TypeScript. The generator incorporates the latest best-practices, is using the [UI5 Tooling](https://sap.github.io/ui5-tooling/) and the UI5 Tooling extensions provided by the [UI5 community](https://github.com/ui5-community/ui5-ecosystem-showcase/). It is maintained by the UI5 community and [OpenUI5](https://openui5.org)/[SAPUI5](https://ui5.sap.com) developers. This generator was build as a plug-in for the community project [Easy-UI5](https://github.com/SAP/generator-easy-ui5/) by [SAP](https://github.com/SAP/).

## Standalone usage

Note the different greeting when the generator starts:

```bash
$> npm i -g yo
$> yo ui5-ts-app-flp

     _-----_     ╭──────────────────────────╮
    |       |    │      Welcome to the      │
    |--(o)--|    │ generator-ui5-ts-app-flp │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `
```

## Support

Please use the GitHub bug tracking system to post questions, bug reports or to create pull requests.

## Contributing

We welcome any type of contribution (code contributions, pull requests, issues) to this generator equally.

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the LICENSE file.

[license-image]: https://img.shields.io/github/license/ui5-community/generator-ui5-ts-app.svg
[license-url]: https://github.com/ui5-community/generator-ui5-ts-app/blob/main/LICENSE

## Local Usage

```bash
$> git clone ...
$> cd <folder>
$> npm ci
$> npm link
```

Go to your target folder

```bash
$> yo ui5-ts-app-flp
```

follow on screen prompt
