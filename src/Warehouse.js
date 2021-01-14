function Warehouse() {
  this.dimensions = [10,10];
  this.crates = [];
}

Warehouse.prototype.receive = function(crate) {
  this.crates.push(crate)
  return this.crates
}

module.exports = Warehouse;