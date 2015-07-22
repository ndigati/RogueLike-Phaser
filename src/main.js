var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('playerIcon', 'assets/diamond.png');
}

// Player's icon that moves on the screen
var playerIcon;
// Player object that keeps track of the player's health, weapon, etc.
var player;

var cursors;
var wasd;
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');
    playerIcon = game.add.sprite(0, 0, 'playerIcon');
    player = new Player("Player1");

    game.physics.arcade.enable(playerIcon);

    cursors = game.input.keyboard.createCursorKeys();
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    }
}

function update() {
    playerIcon.body.velocity.x = 0;
    playerIcon.body.velocity.y = 0;

    if (cursors.left.isDown || wasd.left.isDown) {
        playerIcon.body.velocity.x = -300;
    } else if (cursors.right.isDown || wasd.right.isDown) {
        playerIcon.body.velocity.x = 300;
    } else if (cursors.down.isDown || wasd.down.isDown) {
        playerIcon.body.velocity.y = 300;
    } else if (cursors.up.isDown || wasd.up.isDown) {
        playerIcon.body.velocity.y = -300;
    } else {
        playerIcon.animations.stop();
    }
}