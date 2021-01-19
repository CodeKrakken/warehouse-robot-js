function Robot(warehouse) {
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
  this.warehouse = warehouse
}

Robot.prototype.instruct = function(instruction) {
  if(this.directions.includes(instruction)) {
    instructions = instruction.split('')
    if(this.tryMove(instructions) === true) { this.move(instructions) }
    return this.location
  } else if(instruction === 'G') {
    return this.tryGrab()
  } else {
    return 'Invalid instruction.'
  }  
}

Robot.prototype.tryMove = function(directions) {
  let location = this.location
  let response = true
  directions.forEach(function(direction) {
    if(direction === 'N' && location[1]+1 > 5) { response = false }
    if(direction === 'E' && location[0]+1 > 5) { response = false }
    if(direction === 'S' && Math.abs(location[1]-1) > 5) { response = false }
    if(direction === 'W' && Math.abs(location[0]-1) > 5) { response = false }
  })
  return response
}

Robot.prototype.move = function(directions) {
  let location = this.location
  directions.forEach(function(direction) {
    if(direction === 'N') { location[1]++ }
    if(direction === 'S') { location[1]-- }
    if(direction === 'E') { location[0]++ }
    if(direction === 'W') { location[0]-- }
  })
}

Robot.prototype.tryGrab = function() {
  crate = this.warehouse.crates.find(function(crate) { return crate })
  return crate // this is an array - needs to be a single value
}

Robot.prototype.grab = function() {

}

module.exports = Robot;