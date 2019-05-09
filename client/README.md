# nixleven

> front de pagina musical de NixLeven

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

echo "# NIXLEVEN" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/rengifolu/NIXLEVEN.gitgit
git push -u origin master

#para cliente

npm install --save axios

#para servidor

npm init -f

npm install -save nodemon eslint

#en package,json

<!-- para linux
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    "lint": "./node_modules/.bin/eslint \"**/*.js\""
  }, -->

<!-- para windows
  "scripts": {
    "start": "nodemon src/app.js",
    "lint": "./node_modules/.bin/eslint \"**/*.js\""
  }, -->

node ./node_modules/eslint/bin/eslint.js --init

npm install --save express body-parser cors morgan
