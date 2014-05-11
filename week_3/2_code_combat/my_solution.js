// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 // Grab The Mushroom
 /*
 Move Up 
 Move Right 
 Move Left
 Move Up 
 Attack Monster
 */
 this.moveUp();
 this.moveRight();
 this.moveLeft();
 this.moveUp();
 this.attackNearbyEnemy();
 
 //Rescue Mission
/* 
 Move Down 
 Move Down
 Move Right 
 Move Up
 Move Up
 Move Right
 Move Right
 Move Right
 Move Down 
 Attack Monster
 */
this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 // Drink Me 
/* move right 
 Move down 
 Takes potion 
 Move up 
 Moves Right 
 Attack */
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


 // Taunt the guards
 /* Move Right 
  Bust Door
 Move right
 Say Something 
 Move left 
 say attack 
 Move right 
 Say follow me
 Move right 
 Move up 
 Move right 
 Say Something
 Move Down 
 Move Right
 Move Up 
 Move Right */ 
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
 // It's a trap
 /* Move Down
  Move Down
 Say something
 Move Up 
 Move Up
 Attack */
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
this.say("Attack!");

// Taunt
// Say something 4 times
this.say("Hey! Look at me!");
this.say("Hey! Are you deaf!");
this.say("Hey there!");
this.say("Hellooo!");
 
 // Cowardly Taunt
 /* Move to (50,16) 
   Say something
   Move to (70,10) */
this.moveXY(50,16);
this.say("Hey look over here!");
this.moveXY(70,10);

// Commanding Followers
/* Say Follow 
 Move to (50,60) 
 Say Attack 
 Move to (75,63) */
this.say("Follow!");
this.moveXY(70,30);
this.say("Attack");
this.moveXY(75,63);

//mobile artillery
/* move to(43,45) 
 attack (48,61) 
 attack (44,55) 
 move to (46,34) 
 attack (67,54) 
 attack (54,40) */
 
this.moveXY(40,43);
this.attackXY(48,61);
this.attackXY(43,53);
this.moveXY(46,34);
this.attackXY(67,54);
this.attackXY(67,54);
this.attackXY(54,40);

// Break the prison
/* if name is krogg
 return false
 if name is marcus + robert
 return true
 if name is gordon 
 return true */
if(name === "Krogg")
    return false;  
if(name =="Lucas")
return true;
if (name == "Marcus" "Robert")
return true;
if (name == "Gordon")
return true;
 
 
 
 
 
 
// Reflection:
// Write your reflection here.
