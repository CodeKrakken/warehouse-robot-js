function Warehouse() {
  this.dimensions = [10,10];
  this.crates = [];
}

Warehouse.prototype.receive = function(crate, xAxis, yAxis) {
  if(this.crates.includes(crate)) {
    return 'Crate already in warehouse.' 
  }
  crate.update([xAxis, yAxis])
  console.log(this.occupied(crate.location))
  if(this.occupied(crate.location)) {
    return 'Position occupied.'
  }
  this.crates.push(crate)
  return this.crates
}

Warehouse.prototype.occupied = function(location) {
  this.crates.forEach(function(crate) {
    if (crate.location[0] === location[0] && crate.location[1] === location[1]) {
      return true
    }
  })
}

module.exports = Warehouse;