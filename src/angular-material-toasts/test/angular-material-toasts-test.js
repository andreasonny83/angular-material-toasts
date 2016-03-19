'use strict';

describe('Factory: materialToast', function () {

  // load the factory's module
  beforeEach(module('ngMaterialToasts'));

  var materialToast;
      // $rootScope;

  // Initialize the factory and a mock scope
  beforeEach(inject(function ($injector) {
    materialToast = $injector.get('materialToast');
    // spyOn(materialToast, 'killToast');
  }));

  it('The materialToast factory should be available in the app', function () {
    expect(materialToast).toBeDefined();
  });

  it('The materialToast factory should run the latest version', inject(function(version) {
    expect(version).toEqual('0.0.3');
  }));

  it('Once the app starts, there should be no active nofitications', function () {
    expect(materialToast.count).toBeFalsy();
  });

  it('When a notification is triggered, the internal count should be set to TRUE', function() {
    materialToast.show('toast message');
    expect(materialToast.count).toBeTruthy();
  });

  // it('When a second notification is triggered, the first should disappear', function() {
  //   materialToast.show('another toast message');
  //
  //   $rootScope.$digest();
  //
  //   console.log(materialToast.count);
  // });
});
