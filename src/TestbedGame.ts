import "phaser";
import { TestbedScene } from "./scene/TestbedScene";

const config: GameConfig = {
  title: "Testbed",
  width: 800,
  height: 600,
  scene: [TestbedScene],
  parent: "game",
  physics: {
      default: "arcade",
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
};

export class TestbedGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new TestbedGame(config);
};