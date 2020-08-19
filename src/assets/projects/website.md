This is the website I'm using as a portfolio/place to put my public facing projects, It's probably more complicated then it needs to be, but I like over-doing my own projects to keep things interesting.
I don't have anything extra to add, But I feel like this section should be longer, enjoy your stay.`

# Features

## Routing

As this is a SPA ([single page application](https://en.wikipedia.org/wiki/Single-page_application)) when you navigate between pages insted of loading the entire page again like a traditional website it only loads what it needs to load the new page, as a result navigating the site is much faster then a traditional site, and it has the added benifit of being less demanding on the server.

### Lazy Loading

While this is a SPA not everything is downloaded when you first load the page, While you could probably get away with this for an app of this size for larger apps this can make the inital load time very long so the app is setup to only downloads what it needs for the particular section of the app it's in, so the javascipt libraries and components needed to load the project pages aren't loaded until they're needed.

<!-- ### Navigation Animations
(Not Implimented yet) -->

## Theme changing

If you click on the palette icon at the top right you can change the theme used over the entire site, the theme id is saved on the browser so the next time you vist it will remain the same. Currently there are only 2 themes you can choose from, a dark theme (the default) and a light theme.
This feature is totally unnecessary, I just wanted to see if I could do it.

## Document Generation

The projects section of this site are loaded from files on the server, this means that I don't need to rebuild the entire app to update the project pages and I can just swap them out on the server if I want to change something, It also means that you only download the pages you go to which helps with loading times.

## Contact Page

Insted of simply sharing my email address I have a contact page, this is to avoid leaking my email address for web scrapers to gather.

---

# Technical Details

(This section is just a mirror of the readme file)

## Stack

This app is built on [Angular](https://angular.io/) which also handles the user facing routing, the app itself it deployed on an [Apache](https://www.apache.org/) server and uses [php](https://www.php.net/) for the very limited amount of server side processing there is.

Currently there is no database because there is next to no data I need to track, this may change.

- [Angular Docs](https://angular.io/docs)
- [Apache Docs](https://httpd.apache.org/docs/)
- [php Docs](https://www.php.net/docs.php)

## Pipeline

This project has a CI/CD pipeline running though [Gitlab](https://about.gitlab.com/), the pipeline details can be seen in `.gitlab-ci.yml`.

The Github repo is mirrored on gitlab where the pipeline then runs, the pipeline currently has 4 stages:

- Restore
  - downloads all the node modules and caches them for the rest of the steps.
- Test
  - Runs `ng test` and `ng e2e`, if either of these fails the pipeline stops here.w
- Build
  - Runs `ng build --prod` and saves build artifact
- Deploy
  - This step is only run on the master branch, it deploys the artifact via ftp to the server, removing the previous version.

## Theming/css

The website is themed using [scss](https://sass-lang.com/) leveraging [Angular Material](https://material.angular.io/) components and mixins to theme the app, Angular handles the scss compliation so no additional programs or commands are needed.

Currently the `/src/themes/theming.scss` file contins all theme colour configuration, this imports `/src/themes/theme-mixins.scss` which has the theme colour configuration.

The rest of the css config is in `styles.scss` (which has all the global css) and in component specific `scss` files.

- [scss Docs](https://sass-lang.com/documentation)
- [Angular Material Docs](https://material.angular.io/components/categories)
- [Materal Design Docs](https://material.io/)

**Colour Tools:**

- [Material Palette Generator](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)
- [Colour Tool](https://material.io/resources/color/)

## Page Generation

Project pages are acutally created from a json file that references the text and images it uses, The text on the project details page are generated from markdown files using [ngx-markdown](https://github.com/jfcere/ngx-markdown).

## Unit tests

Currently unit tests are minimal on this app (effectively limited to making sure classes can be instantiated), This is mainly because the app has very few features that need testing and the fact that I'm the only one who touches the codebase.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## end-to-end tests

Similar story to above, though I may use this to test the nav UI eventally.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
