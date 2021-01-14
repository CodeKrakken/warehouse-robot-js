'use strict';

describe("Crate", function() {
  var Crate = require('../src/Crate');
  var crate;

  beforeEach(function() {
    crate = new Crate();
  })

  it('responds to location', function() {
    expect(crate.location).toBeDefined();
  })
})