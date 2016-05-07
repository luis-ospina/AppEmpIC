'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('get name', function () {
    appempic.getName().should.equal('Pedro');
  });

  it('get last name', function () {
    appempic.getLastName().should.equal('Picapiedra');
  });
});
