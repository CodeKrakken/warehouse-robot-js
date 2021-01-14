'use strict';

describe('Warehouse', function() {
  const Warehouse = require('../src/Warehouse');
  let warehouse;
  let crate;

  beforeEach(function() {
    warehouse = new Warehouse();
    crate = jasmine.createSpyObj('crate', ['update']);
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

  it('can receive a crate', function() {
    expect(warehouse.receive(crate)).toEqual([crate])
  })

  it('adds location to crate when received', function() {
    warehouse.receive(crate, 0, 0)
    expect(crate.update).toHaveBeenCalled()
  })
})