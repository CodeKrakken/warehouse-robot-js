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
  if(Math.abs(location[1]) === 5) { 
    return 
  } else {
    this.move(directions, location)
  }
}

Robot.prototype.move = function(directions, location) {
  directions.forEach(function(direction) {
    if(direction === 'N') { location[1]++ }
    if(direction === 'S') { location[1]-- }
    if(direction === 'E') { location[0]++ }
    if(direction === 'W') { location[0]-- }
  })
}

module.exports = Robot;