# Overview
This project allows users to compare dragen command lines, run time, max memory used, max disk space used between any two input trip.runner stages by providing staging id. The stage metadata is retrived from suites api <https://suites.api.trip.illumina.com/api/v1/stages/10749883/?fields=metadata&format=json>.

# Goal
1. Rewrite the cmp_parser and adding new features by using React.
2. Host cmp_parser to TaaS <https://trip.illumina.com/dashboard>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
