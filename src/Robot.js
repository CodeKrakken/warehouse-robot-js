function Robot() {
  this.location = [0,0]
}

Robot.prototype.instruct = function() {
  this.location[0]++
  return this.location
}

module.exports = Robot;