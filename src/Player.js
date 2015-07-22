function Player(name) {
    this.name = name;

    this.health = 100;
    this.weapon = "";
    this.damage = 1;

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