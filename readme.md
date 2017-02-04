#

# Read Me

This is a basic boilerplate for projects using Sass and Gulp I created for my own personal use, however feel free to use it if you find it helpful.

## Basic File Structure
```
--src
--scss
    --styles.scss
--css
--images
--js
    --script.js
    --jquery.min.js
--index.html
--.gitignore
--gulpfile.js
--package.json
--readme.md
```

(Production folder will be created automatically on build)

## What does it do?

* Compiles sass to unminiified css in your src directory
* Compile sass to mininifed css in your prod directory
* Adds autoprefixes and sourcemaps to css
* Watches css, js and html files and live reloads dev server (localhost:3000)
* Concatenates and minifies javascript files
* Optimises and caches images (jpg, png, svg, gif)
* Builds a clean production website folder


## Dependencies
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

2. Install gulp into your new local project directory by running the command `npm install gulp`

3. Run `npm install` which will install all dependencies into a `node_modules` folder (located at the root of your project directory)


###Gulp

4. Run the command `gulp` to spin up a development server and have your sass, html and js files automatically reload

###Gulp Build

5. Run the command `gulp build` to delete previous builds, concat and minify css and js and optimise images. A new "prod" folder will be created with all files needed for production. 