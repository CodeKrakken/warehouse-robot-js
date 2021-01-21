function Warehouse() {
  this.dimensions = [10,10];
  this.crates = [];
}

Warehouse.prototype.receive = function(crate, xAxis, yAxis) {
  if(this.crates.includes(crate)) {
    return 'Crate already in warehouse.' 
  }
  if(this.occupied([xAxis, yAxis])) {
    return 'Position occupied.'
  }
  this.crates.push(crate)
  crate.update([xAxis, yAxis])
  return this.crates
}

Warehouse.prototype.occupied = function([xAxis, yAxis]) {
  let response
  this.crates.forEach(function(crate) {
    response = (crate.location[0] == xAxis && crate.location[1] == yAxis)
  })
  return response
}

module.exports = Warehouse;