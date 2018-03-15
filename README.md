# Repoinfo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Serve locally

```
npm install
npm start
```

and Open http://localhost:4200 in your browser of choice 

## Run tests
```
npm test
```

## Notes

Playing around with the strongly opinionated [Nrwl Extensions for Angular](https://nrwl.io/nx). In essence it's a bunch of scaffolding tools, and utilities that extend Angular CLI in order to suppor multiple applications in a monorepo style.

I'm using ngrx because it's someting I want to better at, and also it has scaffolding, and marble test suppot by Nx. With that said however this project may not benefit much from introducing a fairly complex state management.

For the visual components I'm using angular-material sometimes combined with some hand made flex layouting.

I replaced Jasmine with Jest using the great [jest-preset-angular](https://github.com/thymikee/jest-preset-angular). Mainly because I hate waiting for Jasmine+Karma+Browser combo to boot up. Run unit tests with `npm test`.

## Todo

- improve scss with mixins, maybe start using @angular/flex-layout
- add visualisation library
- test in other browsers (Chrome and Safari works) 
- error handling for failed http requests

## Known issues

- search should save the query in the url as a parameter (to help reload, and enable deeplinking) 
- npm test and ng test does two different things, since
- description is truncated if too long, plus it could use more padding on the right

