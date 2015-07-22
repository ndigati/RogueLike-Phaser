var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('player', 'assets/diamond.png');
}

var player;
var cursors;
var wasd;
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');
    player = game.add.sprite(0, 0, 'player');

    game.physics.arcade.enable(player);

    cursors = game.input.keyboard.createCursorKeys();
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    }
}

function update() {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown || wasd.left.isDown) {
        player.body.velocity.x = -300;
    } else if (cursors.right.isDown || wasd.right.isDown) {
        player.body.velocity.x = 300;
    } else if (cursors.down.isDown || wasd.down.isDown) {
        player.body.velocity.y = 300;
    } else if (cursors.up.isDown || wasd.up.isDown) {
        player.body.velocity.y = -300;
    } else {
        player.animations.stop();
    }
}