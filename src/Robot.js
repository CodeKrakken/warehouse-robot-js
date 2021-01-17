function Robot() {
  this.location = [0,0]
}

Robot.prototype.instruct = function(instruction) {
  switch(instruction) {
    case 'E':
      this.location[0]++
      break
    case 'W':
      this.location[0]--
      break
    case 'N':
      this.location[1]++
      break
    case 'S':
      this.location[1]--
      break
    case 'NE':
      this.location[0]++
      this.location[1]++
      break
    case 'NW':
      this.location[0]--
      this.location[1]++
      break
    default:
      return 'Invalid instruction.'      
  }
  
  return this.location
}

module.exports = Robot;