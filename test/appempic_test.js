'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('get name', function () {
    appempic.getName().should.equal('luis');
  });

  it('get last name', function () {
    appempic.getLastName().should.equal('ospina');
  });
});
