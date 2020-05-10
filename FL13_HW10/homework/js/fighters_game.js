let Fighter = class {
  constructor(properties) {
    let name = properties.name;
    let damage = properties.damage;
    let strength = properties.strength;
    let hp = properties.hp;
    let maxHp = properties.hp;
    let agility = properties.agility;
    let wins = 0;
    let losses = 0;

   this.addWin = function (){
     wins++;
   }

   this.addLoss = function (){
      losses++;
   }

    this.getName = function (){
      return name;
    };

    this.getDamage = function (){
      return damage;
    };

    this.getStrength = function (){
      return strength;
    };
    this.getAgility = function (){
      return agility;
    };

     this.getHealth = function(){
      return hp;
    };


    this.dealDamage = function (damage){
      if(damage > hp){
        hp = 0
      }else {
      hp -= damage;
      }
      return hp;
    }


    this.attack = function(defender){
      let hundred = 100;
      let isAtack = Math.random() >= (defender.getStrength() + defender.getAgility()) / hundred;
      let damage = this.getDamage();
      let name = this.getName();

      if(isAtack) {
        console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
        return defender.dealDamage(damage);
      } else {
        console.log(`${name} attack missed`);
        return defender.getHealth();
      }
    }

    this.heal = function(healPoints){
      hp += healPoints;
      if(hp > maxHp){
        hp = maxHp;
      }
    }


     this.logCombatHistory = function (){
     let result = `Name: ${name}, Wins: ${wins}, Losess: ${losses}`;
     console.log(result);
   }
  }

};


function battle(fighter1, fighter2){
  if(fighter1.getHealth() === 0){
   console.log(`${fighter1.getName()} is dead and can’t fight`);
  }else if(fighter2.getHealth() === 0){
   console.log(`${fighter2.getName()} is dead and can’t fight`);
  }


  let forvard = fighter1;
  let defender = fighter2;
  for(let result = true; result; [forvard, defender] = [defender, forvard]){
     result = forvard.attack(defender);
     if(result === 0){
       forvard.addWin();
       defender.addLoss();
       return forvard

     }

  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 25
 });


const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 20,
  hp: 100,
  strength: 30,
  agility: 25
});

battle(myFighter, myFighter2);
//myFighter2.logCombatHistory();
//myFighter.logCombatHistory();
//myFighter.heal(90);
//myFighter2.heal(90);
//console.log(myFighter2.getHealth());
//console.log(myFighter.getHealth());
//battle(myFighter, myFighter2);

