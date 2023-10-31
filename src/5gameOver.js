class GameOver extends Phaser.Scene{
    constructor(){
        super({key: 'gameOver'})
    }

    create(){
        snacegame.bgmusic.stop()
        gameState.onGame = false
        gameState.isOver = true
        try{
            let gameOver = {
                action: 'gameOver',
                allGameSessionId : sessionID,
                gameSessionId : startGame.gameSessionId,
                score : gameState.score,
                timeStamp : Date.now()
            }
            window?.parent.postMessage(gameOver, `${parentOrigin}`);
        

        this.menuBG = this.add.image(game.config.width/2, game.config.height/2, `mainBG_${mainMenu.texturePack}`).setOrigin(0.5)
        this.menuBG.setDisplaySize(game.config.width, game.config.height)

        this.controlsInfo = this.add.image(310, 70, 'controlsInfo').setOrigin(0.5)

        this.gameOverImg = this.add.image(game.config.width/2, game.config.height/2, 'menuGameOver').setOrigin(0.5)
        this.gameOverImg.setDisplaySize(game.config.width, game.config.height)

        this.score = this.add.text(game.config.width/2-150, game.config.height - 100, `${gameState.score}`, { fontFamily:'Rubik-Regular', fontStyle:'bold', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
        this.scoreTitle = this.add.text (this.score.x, this.score.y - 75, "Счёт", {
            fontFamily: 'Rubik-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            color: '#D0DBD1',
        }).setOrigin(0.5);
        this.btnRestart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button')
        this.btnRestart.setOrigin(0.5)
        this.btnRestart.setScale(0.5)
        this.btnClose = this.add.sprite(this.btnRestart.x, this.btnRestart.y + 120, 'button').setScale(0.43)
        this.btnClose.setOrigin(0.5)

        this.selector = this.add.sprite(this.btnRestart.x, this.btnRestart.y, 'selector')
        this.selector.setOrigin(0.5)
        this.selector.setScale(0.44)

        this.btnRestart.setInteractive()
        this.btnClose.setInteractive()

        this.btnRestartText = this.add.text(game.config.width / 2, game.config.height / 2 + 100, "ЗАНОВО",{
                fontFamily: 'Nunito',
                fontSize: '60px',
                fontStyle: 'bold',
                align: 'center',
                color: 'white'
        })
        this.btnRestartText.setOrigin(0.5)

        this.btnCloseText = this.add.text(this.btnClose.x, this.btnClose.y, "ВЫЙТИ",{
            fontFamily: 'Nunito',
                fontSize: '45px',
                fontStyle: 'bold',
                align: 'center',
                color: '#F0516B'
        })
        this.btnCloseText.setOrigin(0.5)

        this.btnRestart.on('pointerdown', this.startGame, this)
        this.btnClose.on('pointerdown', this.exit, this)

        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this)

        document.addEventListener('keydown',(e)=>{
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.onPressExit()
            }
        })

        // this.input.keyboard.on('keydown-BACKSPACE', ()=>{this.exit()}, this)

        this.saveScore();
        this.loadScore();

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
    }
    catch(er){
        let gameOverError = {
            action: 'gameOverError',
            allGameSessionId : sessionID,
            gameSessionId : startGame.gameSessionId,
            score : gameState.score,
            error: er.message,
            timeStamp : Date.now()
        }
        window?.parent.postMessage(gameOverError, `${parentOrigin}`);
    }
    }

    selectorDown(){
        if(gameState.isOver==true){
            if(this.selector.y != this.btnClose.y){
              this.selector.y = this.btnClose.y
              this.btnCloseText.setColor('white');
              this.btnRestartText.setColor('#F0516B');
              mainMenu.clickSound.play()
            }
        }
    }

    selectorUp(){
        if(gameState.isOver==true){
            if(this.selector.y != this.btnRestart.y){
                this.selector.y = this.btnRestart.y
                this.btnCloseText.setColor('#F0516B');
                this.btnRestartText.setColor('white');
                mainMenu.clickSound.play()
            }
        }
    }

    gameToggle(){
        if(gameState.isOver == true){
            if(this.selector.y == this.btnRestart.y){
                mainMenu.clickSound.play()
                this.startGame()
            }
            else if(this.selector.y == this.btnClose.y){
                mainMenu.clickSound.play()
                this.exit()
            }
        }
    }

    startGame(){
        try{
            gameState.isOver = false
            gameState.onPause = false
            gameState.score = 0
            mainMenu.texturePack = getTexturePack();

            startGame.gameSessionId = generateUUID();
            startGame.allGameSessionId = sessionID;
            window?.parent.postMessage(startGame, `${parentOrigin}`);

            this.scene.stop()
            this.scene.start('snakegame')
        }
        
        catch(er){
            var startGameError = {
                action: 'startGameError',
                allGameSessionId : sessionID,
                gameSessionId: gameId,
                error: er.message,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(startGameError, `${parentOrigin}`);
        }

        
    }
    exit(){
        if(gameState.isOver){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                    }
        
                window?.parent.postMessage(closeGameSession, `${parentOrigin}`);
                posted = true;
            }
        }
        
    }

    onPressExit(){
        if(gameState.onGame == false){
            this.exit()
        }
    }

    saveScore(){
        this.heighScore = gameState.score;
        this.oldScore = JSON.parse(localStorage.getItem('heighScore_snake'));
        this.heighScore > this.oldScore ? localStorage.setItem('heighScore_snake', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
    }

    loadScore(){
        if(localStorage.getItem('heighScore_snake')){
            this.heigScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100,`${JSON.parse(localStorage.getItem('heighScore_snake'))}`, {
                fontFamily: 'Rubik-Regular',
                fontSize: 64,
                fontStyle: 'bold',
                color: '#fff',
                align: 'center'
            }).setOrigin(0.5);

            this.heigScoreTitle = this.add.text(this.heigScoreText.x, this.heigScoreText.y - 75, "Рекорд", {
                fontFamily: 'Rubik-Regular',
                fontSize: 48,
                fontStyle: 'normal',
                color: '#D0DBD1',
            }).setOrigin(0.5);

            this.line = this.add.image(game.config.width / 2, game.config.height - 120, 'line').setOrigin(0.5);}
    }

    update(){

    }


}

var gameOver = new GameOver()