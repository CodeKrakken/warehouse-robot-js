'use strict';

describe('robot', function() {

  const Robot = require('../src/Robot');
  let robot;

  beforeEach(function() {
    robot = new Robot();
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
})