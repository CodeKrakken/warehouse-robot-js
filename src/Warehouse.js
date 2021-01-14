function Warehouse() {
  this.dimensions = [10,10];
  this.crates = [];
}

Warehouse.prototype.receive = function(crate, xAxis, yAxis) {
  crate.update([xAxis, yAxis])
  this.crates.push(crate)
  return this.crates
}

module.exports = Warehouse;