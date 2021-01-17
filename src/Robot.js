function Robot() {
  this.location = [0,0]
}

Robot.prototype.instruct = function(instruction) {
  instruction === 'E' ?
  this.location[0]++ : this.location[0]--
  return this.location
}

module.exports = Robot;