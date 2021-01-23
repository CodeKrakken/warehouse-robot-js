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
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });  
  rl.question("\nCOMMAND THE ROBOT.\n\n", function(instruction) {
    let instructions = instruction.split(' ')
    instructions.forEach(function(instruction) {
      console.log(`\n${game.robot.instruct(instruction)}`)
      rl.close()
      game.run()
    })
  });
}


module.exports = Game