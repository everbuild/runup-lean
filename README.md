> Lean Runup model

Runup-lean contains a [Runup](everbuild/runup) model with a fairly complete set of web (app) development tools.
It's rather opinionated as it contains those tools I currently prefer to work with.
Use what you like, tweak what you don't (and share).
 
I try to find tools that do the job well and do it efficiently.
Currently these are:
 
For JS:

* [Rollup](https://rollupjs.org/) for bundling ES modules
* [Babel](https://babeljs.io/) for transpiling them to JS in prd mode
* [Uglify](http://lisperator.net/uglifyjs/) for minifying them in prd mode
* [ESLint](http://eslint.org/) for linting
* [Thintest](everbuild/thintest) for testing

For CSS:

* [Node-sass](sass/node-sass) for compiling from [Sass](http://sass-lang.com/)
* [Autoprefixer](postcss/autoprefixer) (through [PostCSS](http://postcss.org/)) to add vendor prefixes
* [CSSO](css/csso) to minify it in prd mode


# Install

```
$ npm install --saveDev runup runup-lean
```


# Usage

If you haven't yet, [setup Runup](everbuild/runup/blob/master/README.md#usage).

Then let your model extend runup-lean:

```ecmascript 6
// file: project.js

module.exports = {

    extend: 'runup-lean',
    
    // you can override tool options:
    sass: {
        // usual Node-sass options...
        outputStyle: 'compact'
    }
    // there are similar hooks for all tools, see the flow files

    // ... other settings ...
}
```

Then start Runup in dev or prd mode as usual.
For more info on Runup, see [the wiki](everbuild/runup/wiki).