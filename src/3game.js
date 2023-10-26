
var validLocationsY = [];

var validLocationsX = [];
class SnakeGame extends Phaser.Scene{
    constructor(){
        super({key: 'snakegame'})
    }
    create(){

        try{
            throw new Error('test error');
        }
        
        catch(er){
        
            let undefinedError = {
                action: 'undefinedError',
                allGameSessionId : sessionID,
                gameSessionId : startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
            window?.parent.postMessage(undefinedError, '*');
        }
        
        gameState.onGame = true
        gameState.onPause = false
        gameState.onMenu = false
        this.texturePack = mainMenu.texturePack
        this.bgGraph = this.add.graphics()

        switch(mainMenu.texturePack){
            case 0:
                this.bgGraph.fillStyle(0x4ccc64);
            break;
            case 1:
                this.bgGraph.fillStyle(0x3E81AF);
            break;
            case 2:
                this.bgGraph.fillStyle(0x8080D8);
            break;
        }

        
        this.bgGraph.fillRect(0, 0, game.config.width, game.config.height)

        
        
        this.backGround = this.add.image(game.config.width/2, game.config.height/2, `background_${this.texturePack}`).setOrigin(0.5, 0.51);
        this.backGround.setDisplaySize(game.config.width, game.config.height);
        
        this.bgmusic = this.sound.add('background-music', {loop: false, volume: 0.5});
        this.marker = 0
        this.bgmusic.play();
        
        this.scoreText = this.add.text(game.config.width/2 - 100, 55, `${gameState.score}`, { fontFamily:'Nunito', fontStyle:'bold', fontSize: '40px', fill: 'white', textAlign: 'start'  }).setOrigin(0.5)
        this.scoreIcon = this.add.image(this.scoreText.x - 90, this.scoreText.y, 'scoreIcon').setOrigin(0.5).setDisplaySize(60, 66);

        this.gameInfo = this.add.image(290, 60, 'info').setOrigin(0.5);

        this.foodArray = [];
        for(let i = 0; i < 1; i++){
            let food = new Food(snacegame, 30, 20, 'food');
            this.foodArray.push(food)
        }
        
        this.snake = snake = new Snake(snacegame, 20, 20, 'body_0');
        
        this.snake.grow();
        this.snake.grow();

        

        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)&&gameState.onGame){
                this.pause()
            }
        })
        this.loadScore();
        this.snake.bodySegments[1].setSize(30,30, true)
        // this.snake.bodySegments[1].depth = this.food.body.depth
        // this.physics.add.collider(this.snake.bodySegments[0], this.food.body, ()=>{this.snake.grow(); this.repositionFood(); this.snake.biteSound.play();gameState.score+=1}, null, this);
        
        // this.stopSound =  setInterval(()=>{this.soundOff(); this.marker >= 5 ? clearInterval(this.stopSound) && this.bgmusic.stop() : null}, 1000);
        
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.getField()
    }

    // soundOff(){
    //     if(this.bgmusic.volume > 0){
    //         this.bgmusic.volume -= 0.1
    //         this.marker++
    //     }
    // }

    loadScore(){
        if(localStorage.getItem('heighScore_snake')){
            this.hieghScoreText = this.add.text(this.scoreText.x + 260, this.scoreText.y, `${JSON.parse(localStorage.getItem('heighScore_snake'))}`, {fontFamily:'Nunito', fontStyle:'bold', fontSize: '40px', fill: 'white', textAlign: 'start' }).setOrigin(0.5);
            this.hieghScoreIcon = this.add.image(this.hieghScoreText.x - 90, this.hieghScoreText.y, 'bestIcon').setDisplaySize(72, 66).setOrigin(0.5);
        }
    }

    pause(){
        gameState.onGame = false;
        this.scene.pause(snacegame);
        this.scene.launch(scenePause);
    }

    addBonus(x, y, i){
        if(gameState.score > 0 && gameState.score%10 === 0){
            this.bonus = new Bonus(this, x, y, `bonus_${i}`, i);
            // this.physics.add.collider(this.snake.bodySegments[1], this.bonus.body, ()=>{this.bonus.bonusSound.play(); if(this.bonus.index == 0){this.snake.speedUp()}; if(this.bonus.index==1){this.snake.godMode()}; this.bonus.destroy()}, null, this);
            setTimeout(()=>{
                this.bonus.destroy()
            }, 10000)
            
        }
    }

    update(time, delta) {

        // this.marker >= 5 ? clearInterval(this.stopSound) && this.bgmusic.stop() : null
        this.scoreText.setText(`${gameState.score}`)

        // game_session.score = gameState.score
        
        if (snake.update(time)) {
            
            if(this.bonus!=undefined && snake.collideWithBonus(this.bonus)){
                this.bonus.destroy();
            }
            for(let food of this.foodArray){
                if (snake.collideWithFood(food)){
                    this.repositionFood(food);
                    gameState.score+=1;
                }
            }
            
        }
        if (!snake.alive) {
            this.snake.destroy()
            this.scene.start('gameOver')
            }
        
    }
        repositionFood(food) {
            let ocupate = []
            
            
            for (let segment of this.snake.bodySegments){
                ocupate.push({x:segment.x, y: segment.y})
            }        
            if (validLocationsX.length > 0) {
                
                var pos = {
                    x: this.getPositionX(),
                    y: this.getPositionY()
                };

                var newpos = {
                    x: this.getPositionX(),
                    y: this.getPositionY()
                };

                for(let point of ocupate){
                    if(pos.x == Math.floor(point.x/CELL) && pos.y == Math.floor(point.y/CELL)){
                        pos = {
                            x: this.getPositionX(),
                            y: this.getPositionY()
                        }
                    }
                    else if(newpos.x == Math.floor(point.x/CELL) && newpos.y == Math.floor(point.y/CELL)){
                        newpos = {
                            x: this.getPositionX(),
                            y: this.getPositionY()
                        }
                    }
                }
                food.body.setPosition(pos.x*CELL, pos.y*CELL);
                this.addBonus(newpos.x, newpos.y, Math.floor(Math.random()*2));
                return true;
            } else {
                return false;
            }
        }

        getPositionX(){
            let x = Math.floor(Phaser.Math.RND.pick(validLocationsX));
            return x;
        }

        getPositionY(){
            let y = Math.floor(Phaser.Math.RND.pick(validLocationsY));
            return y;
        }

        getField(){
            for (var y = 6; y < (game.config.height/CELL)-2; y++) {
                validLocationsY.push(Math.floor(y))
            }
            for (var x = 3; x < (game.config.width/CELL)-3; x++) {
                validLocationsX.push(Math.floor(x))
             }
        }
        

}

var snacegame = new SnakeGame();