/**
 * nBold API
 * Visit our [API documentation](https://docs.nbold.co/api/) for more information. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@nbold.co
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
    factory(root.expect, root.NBoldApi);
  }
}(this, function(expect, NBoldApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NBoldApi.MicrosoftTeamsTeamsApi();
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

  describe('MicrosoftTeamsTeamsApi', function() {
    describe('getTeamNamespaceMetadata', function() {
      it('should call getTeamNamespaceMetadata successfully', function(done) {
        //uncomment below and update the code to test getTeamNamespaceMetadata
        //instance.getTeamNamespaceMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setTeamNamespaceMetadata', function() {
      it('should call setTeamNamespaceMetadata successfully', function(done) {
        //uncomment below and update the code to test setTeamNamespaceMetadata
        //instance.setTeamNamespaceMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTeamNamespaceMetadata', function() {
      it('should call updateTeamNamespaceMetadata successfully', function(done) {
        //uncomment below and update the code to test updateTeamNamespaceMetadata
        //instance.updateTeamNamespaceMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
