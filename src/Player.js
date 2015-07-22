function Player(name) {
    this.name = name;
    this.icon = icon;
    this.x = x;
    this.y = y;

    this.health = 100;
    this.weapon = "";
    this.damage = 1;

    game.add.sprite(x, y, icon);

    this.loseHealth = function (lostHealth) {
        this.health -= lostHealth;
        return this.health;
    }

    this.pickUpWeapon = function (weaponName, weaponDamage) {
        if (weaponDamage >= this.damage) {
            this.weapon = weaponName;
            this.damage = 1 + weaponDamage;
            return "Picked up a " + weaponName;
        } else {
            return "This weapon is worse than your current weapon!";
        }
    }

    this.isDead = function() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}