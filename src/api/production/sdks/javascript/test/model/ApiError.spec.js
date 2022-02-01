/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.3
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SalesTimApi);
  }
}(this, function(expect, SalesTimApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SalesTimApi.ApiError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiError', function() {
    it('should create an instance of ApiError', function() {
      // uncomment below and update the code to test ApiError
      //var instance = new SalesTimApi.ApiError();
      //expect(instance).to.be.a(SalesTimApi.ApiError);
    });

    it('should have the property odataContext (base name: "@odata.context")', function() {
      // uncomment below and update the code to test the property odataContext
      //var instance = new SalesTimApi.ApiError();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new SalesTimApi.ApiError();
      //expect(instance).to.be();
    });

  });

}));
