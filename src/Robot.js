function Robot() {
  this.location = [0,0]
}

Robot.prototype.instruct = function(instruction) {
  switch(instruction) {
    case 'E':
      this.try_move(instruction)
      break
    case 'W':
      this.try_move(instruction)
      break
    case 'N':
      this.try_move(instruction)
      break
    case 'S':
      this.try_move(instruction)
      break
    case 'NE':
      this.try_move('N')
      this.try_move('E')
      break
    case 'NW':
      this.try_move('N')
      this.try_move('W')
      break
    case 'SE':
      this.try_move('S')
      this.try_move('E')
      break
    case 'SW':
      this.try_move('S')
      this.try_move('W')
      break
    default:
      return 'Invalid instruction.'      
  }
  return this.location
}

Robot.prototype.try_move = function(direction) {
  if(direction === 'N') { this.location[1]++ }
  if(direction === 'S') { this.location[1]-- }
  if(direction === 'E') { this.location[0]++ }
  if(direction === 'W') { this.location[0]-- }
}

module.exports = Robot;