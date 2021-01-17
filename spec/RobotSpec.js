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
})