function Enemy(name) {
    this.name = name;

    this.health = 20;
    this.damage = 1;

    this.loseHealth = function(lostHealth) {
        this.health -= lostHealth;
        return this.health;
    }

    this.isDead = function() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }

    this.dealDamage = function() {
        // return a random number between 0-100 to represent damage done.
        return Math.floor((Math.random() * 100) + 1);
    }
}