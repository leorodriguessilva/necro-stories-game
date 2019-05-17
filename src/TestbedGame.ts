import "phaser";
import { TestbedScene } from "./scene/TestbedScene";

const config: GameConfig = {
  title: "Testbed",
  width: 800,
  height: 600,
  scene: [ TestbedScene ],
  parent: "game",
  physics: {
      default: "arcade",
      arcade: {
          gravity: { y: 300 },
          debug: true,
      },
  },
};

export class TestbedGame extends Phaser.Game {
  constructor(gameConfig: GameConfig) {
    super(gameConfig);
  }
}

window.onload = () => {
  const game = new TestbedGame(config);
};
