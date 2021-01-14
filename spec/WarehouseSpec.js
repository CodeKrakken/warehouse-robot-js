'use strict';

describe('Warehouse', function() {
  const Warehouse = require('../src/Warehouse');
  let warehouse;
  let crate;
  let crate2;

  beforeEach(function() {
    warehouse = new Warehouse();
    crate = jasmine.createSpyObj('crate', ['update', 'location']);
    crate2 = jasmine.createSpyObj('crate', ['update', 'location']);
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

  it('will note receive a crate if alreadu in crates array', function() {
    warehouse.receive(crate, 0, 0)
    expect(warehouse.receive(crate, 0, 1)).toEqual('Crate already in warehouse.')
  })

  it('will not receive crate in same location as existing one', function() {
    warehouse.receive(crate, 0, 0)
    expect(warehouse.receive(crate2, 0, 0)).toEqual('Position occupied.')
  })
})