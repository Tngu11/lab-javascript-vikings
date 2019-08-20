// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage() {
    this.health -= damage;
  if (this.health > 0) {
    return this.name + "has received" + receiveDamage() + "points of damage"
  }
    else return this.name + "has died in act of combat"
  }
}

//  const Viking = new Viking ("Harald", 300, 150);

// new Viking.receiveDamage(50)
// new Viking.receiveDamage(75)

// Saxon
class Saxon {}

// War
class War {}
