function Warehouse() {
  this.dimensions = [10,10];
  this.crates = [];
}

Warehouse.prototype.receive = function(crate, xAxis, yAxis) {
  if(this.crates.includes(crate)) {
    return 'Crate already in warehouse.' 
  }
  if(this.occupied(crate.location)) {
    return 'Position occupied.'
  }
  crate.update([xAxis, yAxis])
  this.crates.push(crate)
  return this.crates
}

Warehouse.prototype.occupied = function(location) {
  this.crates.forEach(function(crate) {
    if (crate.location === location) return true
  })
}

module.exports = Warehouse;