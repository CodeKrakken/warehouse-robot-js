'use strict';

describe('robot', function() {

  const Robot = require('../src/Robot');
  let robot;
  let warehouse;
  let crate;

  beforeEach(function() {
    warehouse = jasmine.createSpyObj('warehouse', ['crates'])
    robot = new Robot(warehouse);
    crate = jasmine.createSpyObj('crate', ['update', 'location'])
    warehouse.crates = [crate]
  })
  
  it('has a location', function() {
    expect(robot.location).toBeDefined();
  })

  it('responds to instruct', function() {
    expect(robot.instruct).toBeDefined();
  })

  it('moves one space east when instruct("E") is called', function() {
    expect(robot.instruct('E')).toEqual([1,0])
  })

  it('moves one space west when instruct("W") is called', function() {
    expect(robot.instruct('W')).toEqual([-1,0])
  })

  it('moves one space north when instruct("N") is called', function() {
    expect(robot.instruct('N')).toEqual([0,1])
  })

  it('moves one space south when instruct("S") is called', function() {
    expect(robot.instruct('S')).toEqual([0,-1])
  })

  it('moves one space northeast when instruct("NE") is called', function() {
    expect(robot.instruct('NE')).toEqual([1,1])
  })

  it('moves one space northwest when instruct("NW") is called', function() {
    expect(robot.instruct('NW')).toEqual([-1,1])
  })

  it('moves one space southeast when instruct("SE") is called', function() {
    expect(robot.instruct('SE')).toEqual([1,-1])
  })

  it('moves one space northwest when instruct("SW") is called', function() {
    expect(robot.instruct('SW')).toEqual([-1,-1])
  })

  it('will not move outside warehouse north wall', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('N')
    }
    expect(robot.instruct('N')).toEqual([0,5])
  })

  it('will not move outside warehouse east wall', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('E')
    }
    expect(robot.instruct('E')).toEqual([5,0])
  })

  it('will not move outside warehouse south wall', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('S')
    }
    expect(robot.instruct('S')).toEqual([0,-5])
  })

  it('will not move outside west wall', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('W')
    }
    expect(robot.instruct('W')).toEqual([-5,0])
  })

  it('does not move at all if southy diagonal move cannot be completed', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('S')
    }
    expect(robot.instruct('SW')).toEqual([0,-5])
    expect(robot.instruct('SE')).toEqual([0,-5])
  })

  it('does not move at all if northy diagonal move cannot be completed', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('N')
    }
    expect(robot.instruct('NW')).toEqual([0,5])
    expect(robot.instruct('NE')).toEqual([0,5])
  })

  it('does not move at all if easty diagonal move cannot be completed', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('E')
    }
    expect(robot.instruct('NE')).toEqual([5,0])
    expect(robot.instruct('SE')).toEqual([5,0])
  })

  it('does not move at all if westy diagonal move cannot be completed', function() {
    for(let i=0; i < 5; i++) {
      robot.instruct('W')
    }
    expect(robot.instruct('NW')).toEqual([-5,0])
    expect(robot.instruct('SW')).toEqual([-5,0])
  })

  it('returns an error if given invalid instructions', function() {
    expect(robot.instruct('Z')).toEqual('Invalid instruction.')
  })

  it('responds to grab', function() {
    expect(robot.grab).toBeDefined()
  })

  it('holds a crate once grabbed', function() {
    crate.location = [0,0]
    expect(robot.instruct('G')).toEqual(crate) // not sure this test quite works - come back to it
  })

  it('will not grab a crate if none present at robot location', function() {
    crate.location = [0,1]
    expect(robot.instruct('G')).toEqual('No crate to grab.')
  })
})