function Robot() {
  this.location = [0,0]
}

Robot.prototype.instruct = function(instruction) {
  switch(instruction) {
    case 'E':
      this.try_move([instruction])
      break
    case 'W':
      this.try_move([instruction])
      break
    case 'N':
      this.try_move([instruction])
      break
    case 'S':
      this.try_move([instruction])
      break
    case 'NE':
      this.try_move(['N','E'])
      break
    case 'NW':
      this.try_move(['N','W'])
      break
    case 'SE':
      this.try_move(['S','E'])
      break
    case 'SW':
      this.try_move(['S','W'])
      break
    default:
      return 'Invalid instruction.'      
  }
  return this.location
}

Robot.prototype.try_move = function(directions) {
  let location = this.location 
  directions.forEach(function(direction) {
    if(direction === 'N') { location[1]++ }
    if(direction === 'S') { location[1]-- }
    if(direction === 'E') { location[0]++ }
    if(direction === 'W') { location[0]-- }
  })
}

module.exports = Robot;