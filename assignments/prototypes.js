/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/


Constructor(GameObject({
constructor(stats), 
      createdAt:{},
      name:""

  

  distroy() {
    return `${this.name}`
    `was removed from the GameObject.`
  }

}


        // === GameObject ===
        // * createdAt
        // * name
        // * dimensions (These represent the character's size in the video game)
        // * destroy() // prototype method that returns: `${this.name} was removed from the game.`
        // */


            // === CharacterStats ===
            // * healthPoints
            // * takeDamage() // prototype method -> returns the string '<object name> took damage.'
            // * should inherit destroy() from GameObject's prototype

 new class CharacterStats extends GameObject {
   constructor (stats) {
    super(stats)
    this.healthPoints = stats.healthpoints

  }
  takeDamage() {
    return `${this.name} took damage.`
  }

}















            /*
              === Humanoid (Having an appearance or character resembling that of a human.) ===
              * team
              * weapons
              * language
              * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
              * should inherit destroy() from GameObject through CharacterStats
              * should inherit takeDamage() from CharacterStats
            */