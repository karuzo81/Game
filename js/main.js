const config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 1200,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;

function preload() {
    this.load.image('player', 'assets/images/player.png');
}

function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);
    player.setScale(0.5);
}

function update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        player.setVelocityX(-3600);
    } else if (cursors.right.isDown) {
        player.setVelocityX(3600);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-3600);
    } else if (cursors.down.isDown) {
        player.setVelocityY(3600);
    } else {
        player.setVelocityY(0);
    }
}

