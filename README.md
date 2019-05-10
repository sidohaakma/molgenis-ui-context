# molgenis-ui-context

Collection of top level page components for use in molgenis interface

- Header component
  - Header image component
  - Navbar
- Footer compoment
- Cookie wall 

note: HeaderImageComponent may also be used as separate components

## Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/molgenis/molgenis-ui-context/blob/master/CHANGELOG.md).

## Components

#### Header component

Sticky header that contains HeaderImageComponent and Navbar.
Takes a molgenis menu object as property and renders a menu and top logo image ( if set molgenis menu object). Header is fixed at the top of the page.

#### Footer compoment

Sticky footer, takes a molgenis footer object as property and renders a footer.
Footers is rendered at the botom of the window and pushed down by the content.

#### Cookie wall
Shows cookie warning if 'permissionforcookies' cookie is not set. If user accepts cookies the 'permissionforcookies' is set. 

## Page layout

      ------------------------------------------
      | page                                   |
      |  ------------------------------------  |
      |  | sticky-header                    |  |
      |  | -------------------------------  |  |
      |  | | header-image                |  |  |
      |  | |                             |  |  |
      |  | -------------------------------  |  |
      |  | -------------------------------  |  |
      |  | | nav-bar                     |  |  |
      |  | -------------------------------  |  |
      |  ------------------------------------  |
      |  ------------------------------------  |
      |  | content                          |  |
      |  |                                  |  |
      |  |                                  |  |
      |  |                                  |  |
      |  |                                  |  |
      |  |                                  |  |
      |  |                                  |  |
      |  ------------------------------------  |
      |  ------------------------------------  |
      |  |footer                            |  |
      |  |                                  |  |
      |  |                                  |  |
      |  ------------------------------------  |
      ------------------------------------------
 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

The default build target is set to build the navBar components as library

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
