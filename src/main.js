var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('playerIcon', 'assets/diamond.png');
    game.load.image('enemyIcon', 'assets/star.png');
}

// Player's icon that moves on the screen
var playerIcon;
var enemyIcon;
// Player object that keeps track of the player's health, weapon, etc.
var player;
var enemy;

var cursors;
var wasd;
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');
    playerIcon = game.add.sprite(400, 300, 'playerIcon');
    enemyIcon = game.add.sprite(100, 200, 'enemyIcon');
    player = new Player("Player1");
    enemy = new Enemy("Enemy1");

    game.physics.arcade.enable(playerIcon);
    game.physics.arcade.enable(enemyIcon);

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

    if (playerIcon.inWorld == false) {
        restartGame();
    }

    game.physics.arcade.overlap(playerIcon, enemyIcon, restartGame, null, this);
}

function restartGame() {
    create();
}