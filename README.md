<p align="center">
  <img style="background-color: white;border-radius: 8px" width="auto" height="128" src="https://storage.googleapis.com/nicoinch-public/LogoTodo-Background.png">
</p>

# Welcome to YATODO

**YATODO** (yet another todo) is a single page web application developed to address
the [**Hasura recruitment exercise**](https://hasura.io/careers/).

View full documentation on Storybook:

<a href='https://nicoinch.github.io/yatodo/index.html?path=/story/%F0%9F%8E%89-readme--page'>
    <img src='https://storage.googleapis.com/nicoinch-public/yatodo-button-docs.svg' style='height: 48px'>
</a>

## Project setup
```
yarn install
```

## Get the graphql schema

To get the graphql schema, run:
```
yarn install graphqurl
gq https://hiring-nicolas-2.hasura.app/v1/graphql --introspect --format json > schema.json
```

### Generate code from graphql schema
```
yarn generate
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Start storybook
```
yarn storybook
```

### Deploy storybook to github pages
```
yarn deploy-storybook
```
