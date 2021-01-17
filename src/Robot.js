function Robot() {
  this.location = [0,0]
  this.directions = [
    'N',
    'S',
    'E',
    'W',
    'NW',
    'NE',
    'SW',
    'SE'
  ]
}

Robot.prototype.instruct = function(instruction) {
  if(this.directions.includes(instruction)) {
    instructions = instruction.split('')
    this.try_move(instructions)
    return this.location
  } else {
    return 'Invalid instruction.'
  }  
}

Robot.prototype.try_move = function(directions) {
  let location = this.location
  directions.forEach(function(direction) {
    if(['W','E'].includes(direction) && location[0] < 5) {
      if(direction === 'E') { location[0]++ }
      if(direction === 'W') { location[0]-- }
    }
    if(['N','S'].includes(direction) && Math.abs(location[1]) < 5) {
      if(direction === 'N') { location[1]++ }
      if(direction === 'S') { location[1]-- }
    }
  })
  
}

Robot.prototype.move = function(direction, location) {
  if(direction === 'N') { location[1]++ }
  if(direction === 'S') { location[1]-- }
  if(direction === 'E') { location[0]++ }
  if(direction === 'W') { location[0]-- }
}

module.exports = Robot;