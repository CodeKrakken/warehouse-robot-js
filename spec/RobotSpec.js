'use strict';

const Warehouse = require('../src/Warehouse');

describe('robot', function() {

  const Robot = require('../src/Robot');
  let robot;
  let warehouse;

  beforeEach(function() {
    warehouse = new Warehouse;
    robot = new Robot(warehouse);
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
})