const Crate = require('./Crate')
const Warehouse = require('./Warehouse')
const Robot = require('./Robot')

function Game() {
  this.warehouse = new Warehouse()
  this.robot = new Robot(this.warehouse)
  this.crate = new Crate()
  this.crate2 = new Crate()
  this.warehouse.receive(this.crate, 0, 0)
  this.warehouse.receive(this.crate2, 5, 5)
}

Game.prototype.run = function() {
  let game = this
  var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  for(;;) {
    rl.question("\nCOMMAND THE ROBOT.\n\n", async function(instruction) {
      let instructions = instruction.split(' ')
      await instructions.forEach(function(instruction) {
        console.log(`\n${game.robot.instruct(instruction)}`)
      })
      rl.close();
    });
  }
}


module.exports = Game