'use strict';

describe('Warehouse', function() {
  const Warehouse = require('../src/Warehouse');
  let warehouse;

  beforeEach(function() {
    warehouse = new Warehouse();
  })

  it('has dimensions', function() {
    expect(warehouse.dimensions).toBeDefined();
  })

  it('can contain crates', function() {
    expect(warehouse.crates).toBeDefined();
  })

  it('responds to receive', function() {
    expect(warehouse.receive).toBeDefined()
  })
})