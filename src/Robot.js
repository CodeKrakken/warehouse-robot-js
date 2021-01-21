function Robot(warehouse) {
  this.location = [0,0]
  this.directions = {
    'N': [0, 1],
    'E': [1, 0],
    'S': [0,-1],
    'W': [-1,0],
    'NW': [-1,1],
    'NE': [1,1],
    'SW': [-1,-1],
    'SE': [1,-1],
  }
  this.warehouse = warehouse
}

Robot.prototype.instruct = function(instruction) {
  if(Object.keys(this.directions).includes(instruction)) {
    if(this.tryMove(instruction) === true) { this.move(instruction) }
    return this.location
  } else if(instruction === 'G') {
    return this.tryGrab()
  } else if(instruction === 'D') {
    return this.tryDrop()
  } else {
    return 'Invalid instruction.'
  }  
}

Robot.prototype.tryMove = function(direction) {
  if(Math.abs(this.location[0] + this.directions[direction][0]) <= 5 && Math.abs(this.location[1] + this.directions[direction][1]) <= 5) {
    return true
  } else {
    return false
  }
}

Robot.prototype.move = function(direction) {
  this.location = this.location.map(function(location,change) { return location + this[change]}, this.directions[direction])
  if(this.crate) { this.crate.update(this.location.slice(0)) }
}

Robot.prototype.tryGrab = function() {
  if(this.crate) { return 'Already holding crate.' }
  this.crate = this.warehouse.crates.find(crate => crate.location[0] === this.location[0] && crate.location[1] === this.location[1])
  return (this.crate ? this.grab() : 'No crate to grab.')
}

Robot.prototype.grab = function() {
  this.warehouse.crates = this.warehouse.crates.filter(crate => crate !== this.crate)
  return this.crate
}

Robot.prototype.tryDrop = function() {
  if(this.warehouse.occupied(this.location)) {
    return 'Cannot drop crate here.'
  } else if(!this.crate) { 
    return 'No crate to drop.'
  } else {
    return this.drop()
  }
}

Robot.prototype.drop = function() {
  this.warehouse.crates.push(this.crate)
  this.crate = null
  return 'Dropped crate gently.'
}

module.exports = Robot;