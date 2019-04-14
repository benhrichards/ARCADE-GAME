    // Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step*5;
    this.resetPos = -this.step;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // if enemy is not passed boundary 
    if(this.x < this.boundary) {
        //move forward
        //increment x by speed * dt
        this.x += this.speed * dt;
    }
    else {
        // reset pos to start
        this.x = this.resetPos; 
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Hero class

class Hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
    }


    //Render
        //Draw player sprite on current x and y coord position 
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            }

    gameWin(){

    }

    /* !!Handle Keyboard input!!
    * Update hero's x and y property according to input 
    * @param {string} input - Direction to travel
    */
    handleInput(input) {
        switch(input) {
            case 'left':
                if(this.x > 0)
                    this.x -= this.step;
                    break;
            case 'up':
                if (this.y > this.jump)
                    this.y -= this.jump;
                    break;
            case 'right':
                if(this.x < this.step*4)
                    this.x += this.step;
                    break;
            case 'down':
                if (this.y < this.jump*4)
                this.y += this.jump;
                break;
        }

    }

    update() {

            // Check collision here 
            for(let enemy of allEnemies) {
                if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
                    this.reset();
                }
            }

            //check win here
            if(this.y === 55) {
                this.victory = true;

            }
    }

    reset() {
        this.y = this.startY;
        this.x = this.startX;
    }
    };


// initialise the Hero object to create a player 
const player = new Hero ();
const enemy1 = new Enemy (-101, 0, 200);
const enemy2 = new Enemy(-101, 83, 300);
const enemy3 = new Enemy(-101, 166, 350);

const allEnemies = [];
allEnemies.push(enemy1,enemy2, enemy3);
console.log(allEnemies);










    // Constructor

        //properties
            //x pos
            //y pos
            // Sprite image 

        //methods

            //update postiion
                // Check collision here 
                    // did player x and y collide with enemy? 
                //check win here?
                    // did player x and y reach final tile? 


            //Handle Keyboard input
                //update player's x and y property according to input 

            //reset hero 
                // set x and y to starting x and y 

//new Hero object 

//init allEnemies array 
//for each enemy create and push a new Enemy object into above array 


