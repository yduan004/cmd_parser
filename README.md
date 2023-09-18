# Overview
This project allows users to compare dragen command lines, run time, max memory used, max disk space used between any two input trip.runner stages by providing stage id. The stage metadata can be retrived from suites api <https://suites.api.trip.illumina.com/api/v1/stages/10749883/?fields=metadata&format=json>.

# Goal
1. Add a new widget (CMD COMPARISON) to TaaS dashboard <https://trip.illumina.com/dashboard>. UI repo: <https://git.illumina.com/Trippy/trip.services.ui>
2. The widget page will look like
   
![stage_cmd_comparison](https://github.com/yduan004/cmd_parser/assets/22733883/20dad987-33de-4cba-89b4-c10c3ec5da00)

Note: the common args will be marked as green if their values between stage 1 and stage 2 are the same, red if not the same, grey if arg is one of `events-log-file`, `output-directory`, `output-file-prefix` since they varies in every stage.

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
