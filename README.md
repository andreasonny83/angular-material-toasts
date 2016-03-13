# Angular Material Toasts

[![Bower version](https://badge.fury.io/bo/angular-material-toasts.svg)](https://badge.fury.io/bo/angular-material-toasts)
[![Build Status](https://travis-ci.org/andreasonny83/angular-material-toasts.svg?branch=master)](https://travis-ci.org/andreasonny83/angular-material-toasts)

Cool material toasts for your AngularJS app

Click [here](https://jsbin.com/momuke/edit?html,output) to see the plug-in in action inside an interactive AngularJS Demo project.

## Getting Started

Install the library with [Bower](http://bower.io/) or download the the files directly from the `dist` folder in the repo.

    bower install angular-material-toasts --save

### Usage

Include `dist/angular-material-toasts.min.js` and `dist/angular-material-toasts.min.css` to your AngularJS project.

Add `ngMaterialToasts` as a module dependency for your module.

    angular.module('myApp', ['materialToast']);

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
