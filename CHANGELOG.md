## [1.1.2](https://github.com/molgenis/molgenis-ui-context/compare/v1.1.1...v1.1.2) (2019-05-31)


### Bug Fixes

* **components:** update components to comply to new menu model ([8f12219](https://github.com/molgenis/molgenis-ui-context/commit/8f12219))
* **href.ts:** updated types reference to relative path for building in MOLGENIS ([6467b03](https://github.com/molgenis/molgenis-ui-context/commit/6467b03))
* **menu:** Add top menu image to navbar ([c56873e](https://github.com/molgenis/molgenis-ui-context/commit/c56873e)), closes [molgenis/molgenis#8422](https://github.com/molgenis/molgenis/issues/8422)
* **NavBar.spec.ts.snap:** update with new params property in menu model ([fd998f6](https://github.com/molgenis/molgenis-ui-context/commit/fd998f6))
* **package.json:** build targets differ from old cli ([a0b3137](https://github.com/molgenis/molgenis-ui-context/commit/a0b3137))
* **package.json:** update yarn build to postversion step ([c215d0b](https://github.com/molgenis/molgenis-ui-context/commit/c215d0b))
* **semantic-deps:** add plugins for auto release ([9c15c7d](https://github.com/molgenis/molgenis-ui-context/commit/9c15c7d))

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1]
### Fixed
- #52 Errors in console when not logged in

## [1.0.0]
### Added
- Sticky header that includes header image and navbar
### Changed
- Toplogo image is removed from navbar ( now in header)
### Breaking
- Footer component css positioning is removed, footer is now sticky ( via molgenis sticky-footer.css and the .footer class) 

## [0.5.2]
### Changed
- Be more lenient when checking for line wrap on navbar ( work around for ie issue in molgenis) https://github.com/molgenis/molgenis/issues/8486

## [0.5.1]
### Fixed
- #46 Logo above menu bar does not work on small screen

## [0.5.0] - 2019-03-18
### Added
- Footer component

## [0.4.0] - 2019-01-24
### Added
- Cookiewall component

## [0.3.0] - 2019-01-23
### Added
- Dynamic (via js) menu collapse breakpoints (hamburger menu).
### Removed
### Changed
- Larger logo height, set via css on HTML class
### Fixed
- #29 fix active menu item not getting active class

## [0.2.0] - 2019-01-11
### Added
- Submenu item styling

## [0.1.3] - 2019-01-08
### Fixed
- Brand image not showing due to js naming error 

## [0.1.2] - 2019-01-07
### Added
- Intitial menu setup using vue cli-3, and bootstrap

[Unreleased]: https://github.com/molgenis/molgenis-ui-context/compare/v1.0.0...HEAD
