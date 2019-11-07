[![codecov](https://codecov.io/gh/molgenis/molgenis-js-i18n/branch/master/graph/badge.svg)](https://codecov.io/gh/molgenis/molgenis-js-i18n)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# molgenis-ui-context
Collection of top level page components for use in molgenis interface

## Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/molgenis/molgenis-ui-context/blob/master/CHANGELOG.md).

## Components
There are three components which are wrapped in a parent component:
- [Header component](#header-component)
  - HeaderImageComponent
  - Navbar
- [Footer component](#footer-component)
- [Cookie wall](#cookie-wall)

Wrapper component:
- [Page component](page-component)

### Header component
Sticky header that contains HeaderImageComponent and Navbar.
Takes a MOLGENIS menu object as property and renders a menu and top logo image (if set MOLGENIS menu object). Header is fixed at the top of the page.

### Footer compoment
Sticky footer, takes a molgenis footer object as property and renders a footer.
Footers is rendered at the botom of the window and pushed down by the content.

### Cookie wall
Shows cookie warning if 'permissionforcookies' cookie is not set. If user accepts cookies the 'permissionforcookies' is set. 

### Page component
Consists of all the components mentioned above. The page layout is shown below.

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
 
## Usage

### Adding peer dependencies
When you include the seperate components or the page components you need to include the peerDependencies of the molgenis-ui-context.
You can do this by adding the peerDependencies in your target project.

```bash
yarn add bootstrap@4.3.1
yarn add popper.js@0.14
yarn add jquery@3.3
```

```main.ts / main.js
import 'bootstrap'
```

Your set!

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

### How to commit
We use conventional commits to generate changelogs and release notes. Please check: https://www.conventionalcommits.org/

**Example**
```
git commit file.ext -m "fix(file.ext): fixes something"
```

### How to publish
Each time a PR is merged a release will be done to NPM. The CHANGELOG.md and GitHub release will be ammended. 

The version of the package is based upon convential commits. Check: http://commitizen.github.io/cz-cli/.

