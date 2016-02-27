# PostCSS Webpack Demo
This repository is a very basic example of how to create CSS Modules using webpack, postcss, CSS and JavaScript for the February 27, 2016 meetup of Seattle Ladies JS. If you'd like to read more about this topic you can refer to our [blog](http://seattleladiesjs.github.io/postcss).

If you'd like to make this repository better you can help us by filing issues or creating pull requests for features you'd like to see added, including better documentation and more examples.

##Getting Started
 * Make a copy of the repository

    `git clone https://github.com/SeattleLadiesJS/postcss-grunt-gulp-demo.git`

 * Change directories, into the repository

    `cd postcss-webpack-demo`

 * Install Dependencies

    `npm install`

 * Build the bundle

    `npm run build`

 * Run the server

    `npm run start`

 * See the results

    `http://localhost:8080`


##Organization

 * `/dev` - The source files for the JavaScript module which "requires" the CSS and applies styles via JavaScript.

 * `/public` - The output directory for compiled CSS and JavaScript, also where the main `index.html` is served from.
