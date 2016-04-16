# Angular Material Toasts

[![Bower version](https://badge.fury.io/bo/angular-material-toasts.svg)](https://badge.fury.io/bo/angular-material-toasts)
[![Build Status](https://travis-ci.org/andreasonny83/angular-material-toasts.svg?branch=master)](https://travis-ci.org/andreasonny83/angular-material-toasts)
[![devDependency Status](https://david-dm.org/andreasonny83/angular-material-toasts/dev-status.svg)](https://david-dm.org/andreasonny83/angular-material-toasts#info=devDependencies)

<img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30">

Cool material toasts for your AngularJS app

Click [here](https://jsbin.com/momuke/edit?html,output) to see the plug-in in action inside an interactive AngularJS Demo project.

## Getting Started

Install the library with [Bower](http://bower.io/) or download the the files directly from the `dist` folder in the repo.

    bower install angular-material-toasts --save

### Usage

Include `dist/angular-material-toasts.min.js` and `dist/angular-material-toasts.min.css` to your AngularJS project.
There is also an online distribution version you can include, if you don't want to install your local dependecies, available at:

    http://sonnywebdesign.com/angular-material-toasts/angular-material-toasts.min.css
    http://sonnywebdesign.com/angular-material-toasts/angular-material-toasts.min.js

So your index.html should look like this:

    <link rel="stylesheet" href="//sonnywebdesign.com/angular-material-toasts/angular-material-toasts.min.css">
    <script src="//sonnywebdesign.com/angular-material-toasts/angular-material-toasts.min.js"></script>

Add `ngMaterialToasts` as a module dependency for your module.

    angular.module('myApp', ['ngMaterialToasts']);

Then inject and use the `materialToast` service.

    function myController($scope, materialToast) {
      materialToast.show('Howdy! I\'m a notification message.');
      materialToast.show('And I\'m a persistent notification.', {persist:persist});
    }

## Build & development

Clone
Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the unit tests with karma.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :sunglasses:

## License

MIT © [Andrea SonnY](http://andreasonny.mit-license.org/)
