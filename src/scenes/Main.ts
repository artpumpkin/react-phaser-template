import Phaser from 'phaser';

type Body = Phaser.Physics.Arcade.Body;

export class Main extends Phaser.Scene {
  width!: number;
  height!: number;

  constructor() {
    super({ key: 'Main' });
  }

  init() {
    this.width = this.game.renderer.width;
    this.height = this.game.renderer.height;
  }

  preload() {
    this.load.image('ball', '/src/assets/images/ball.png');
  }

  create() {
    this.spawn(new Phaser.Math.Vector2(this.width / 2, this.height / 2));

    this.input.on('pointerdown', (event: Phaser.Input.Pointer) => {
      this.spawn(event.position);
    });
  }

  spawn(pos: Phaser.Math.Vector2) {
    const ball = this.add.image(pos.x, pos.y, 'ball');
    ball.setOrigin(0.5, 0.5).setScale(0.5);

    this.physics.add.existing(ball);

    (ball.body as Body).setBounce(1, 1).setCollideWorldBounds(true);

    this.physics.velocityFromRotation(
      Phaser.Math.RND.rotation(),
      Phaser.Math.RND.integerInRange(300, 500),
      (ball.body as Body).velocity,
    );
  }
}
