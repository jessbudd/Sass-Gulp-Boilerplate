This is a basic boilerplate for projects using Sass and Gulp I created for my own personal use, however feel free to use it if you find it helpful.

## Basic File Structure
```
|--css
|--fonts
|--images
|--js
    |--script.js
    |--jquery.min.js
|--src
|--scss
    |--styles.scss
    |--helpers
    |--base
    |--components
    |--layout
    |--pages
    |--vendor
|--index.html
|--gulpfile.js
|--package.json
|--readme.md
|--.gitignore
```

(Production folder will be created automatically on build)

## What does it do?

* Scaffolds architecture for basic sass/html project
* Compiles sass to unminiified css in your src directory
* Compiles sass to mininifed css in your prod directory
* Autoprefixes to the last 4 versions and adds sourcemaps to css
* Watches css, js and html files to live reload dev server (localhost:3000) when a save is detected
* Concatenates and minifies javascript files
* Optimises and caches images in image folder (jpg, png, svg, gif)
* Builds a clean production website folder on command


### Dependencies
* gulp
* gulp-Sass
* browser-sync
* gulp-rename
* gulp-autoprefixer
* gulp-useref
* gulp-if
* gulp-uglify
* gulp-sourcemaps
* gulp-imagemin
* gulp-cache
* del
* run-seqeunce


## How to Use

1. Clone repo to create a local project directory (rename folder to your project's name)

2. Run `npm install` which will create a `node_modules` folder at the root of your project directory and install all dependencies


### Development

Run the command `gulp` to spin up a development server. Your sass, html and js files automatically reload when saved.

### Production

Run the command `gulp build` to delete previous builds, concat and minify css and js and optimise images.
A new "prod" folder will be created with all other files needed for production. 


## Notes

The Sass file structure of this boilerplate is heavily adapted from HugoGiraudel's sass boilerplate (https://github.com/HugoGiraudel/sass-boilerplate). The only changes made was renaming "abstracts" to "helpers" and removing the themes folder.