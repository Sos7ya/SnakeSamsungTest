class ScenePause extends Phaser.Scene{
    constructor(){
        super({key: 'scenePause'})
    }

    create(){
        gameState.onPause = true
        gameState.onGame = false
        try{
            let gamePause = {
                action: 'gamePause',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePause, '*');
        }
        catch(er){
            let gamePauseError = {
                action: 'gamePauseError',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePauseError, '*');
        }

        this.bgpauseImage = this.add.image(game.config.width/2, game.config.height/2, `mainBG_${mainMenu.texturePack}`).setOrigin(0.5)
        this.bgpauseImage.setDisplaySize(game.config.width, game.config.height)
        this.pauseScreen = this.add.image(game.config.width / 2, game.config.height / 2, 'pause').setOrigin(0.5).setDisplaySize(game.config.width, game.config.height)
        this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button').setScale(0.5);
        this.btnStart.setOrigin(0.5)

        this.controlsInfo = this.add.image(310, 70, 'controlsInfo').setOrigin(0.5)

        this.btnClose = this.add.sprite(this.btnStart.x, this.btnStart.y + 120, 'button').setScale(0.43);
        this.btnClose.setOrigin(0.5)

        this.selector = this.add.image(game.config.width / 2, game.config.height / 2 + 100, "selector");
        this.selector.setScale(0.44)
        this.selector.setOrigin(0.5)

        this.btnStartText = this.add.text(game.config.width / 2, game.config.height / 2 + 100, 'ПРОДОЛЖИТЬ',{
            fontFamily: 'Nunito',
            fontSize: '60px',
            color: 'white',
            fontStyle: 'bold',
            align: 'center'
        });
        this.btnStartText.setOrigin(0.5)
        this.btnCloseText = this.add.text(this.btnClose.x, this.btnClose.y, 'ВЫЙТИ',{
            fontFamily: 'Nunito',
            fontSize: '45px',
            color: '#F0516B',
            fontStyle: 'bold',
            align: 'center'
        });
        this.btnCloseText.setOrigin(0.5)

        this.btnStart.setInteractive();
        this.btnClose.setInteractive();
        this.btnClose.on('pointerdown', this.exit, this);
        this.btnStart.on('pointerdown', this.resumeGame, this);
        
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)&&gameState.onPause){
                this.onPressExit()
            }
        })
        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this);
        this.scoreText = this.add.text(game.config.width/2-150, game.config.height -100, `${gameState.score}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
        this.scoreTitle = this.add.text(this.scoreText.x, this.scoreText.y-75, 'Счет', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
        this.saveScore();
        this.loadScore();
        
        
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
    }

    saveScore(){
        this.heighScore = gameState.score;
        this.oldScore = JSON.parse(localStorage.getItem('heighScore_snake'));
        this.heighScore > this.oldScore ? localStorage.setItem('heighScore_snake', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
    }

    loadScore(){
        if(localStorage.getItem('heighScore_snake')){
            this.hieghScoreText = this.add.text(game.config.width/2+150, game.config.height - 100, `${JSON.parse(localStorage.getItem('heighScore_snake'))}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y-75, 'Рекорд', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
            this.line = this.add.image(game.config.width / 2, game.config.height - 120, 'line').setOrigin(0.5);
        }
    }

    selectorDown(){
        if(gameState.onPause==true){
            if(this.selector.y != this.btnClose.y){
              this.selector.y = this.btnClose.y
              this.btnCloseText.setColor('white');
              this.btnStartText.setColor('#F0516B');
              mainMenu.clickSound.play()
            }
        }
    }

    selectorUp(){
        if(gameState.onPause==true){
            if(this.selector.y != this.btnStart.y){
                this.selector.y = this.btnStart.y
                this.btnCloseText.setColor('#F0516B');
                this.btnStartText.setColor('white');
                mainMenu.clickSound.play()
            }
        }
    }

    gameToggle(){
        if(gameState.onPause == true){
            if(this.selector.y == this.btnStart.y){
                this.resumeGame()
                mainMenu.clickSound.play()
            }
            else if(this.selector.y == this.btnClose.y){
                mainMenu.clickSound.play()
                this.exit();
            }
        }
    }

    resumeGame(){
        gameState.onPause=false
        gameState.onGame=true
        
        try{
            let gameResume = {
                action: 'gameResume',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }

            window?.parent.postMessage(gameResume, '*');
        }
        catch(er){
            let gameResumeError = {
                action: 'gameResumeError',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }

            indow?.parent.postMessage(gameResumeError, '*');
        }

        this.scene.resume(snacegame);
        this.scene.stop(scenePause);
    }

    exit(){
        if(gameState.onPause){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                    }
                    let gameOver = {
                        action: 'gameOver',
                        allGameSessionId : sessionID,
                        gameSessionId : startGame.gameSessionId,
                        score : gameState.score,
                        timeStamp : Date.now()
                    }
            
                    window?.parent.postMessage(gameOver, '*');
        
                window?.parent.postMessage(closeGameSession, '*');
                posted = true;
            }
    }
        
    }

    onPressExit(){
        if(gameState.onPause == true){
            this.exit()
        }
    }

    update(){

    }

}

var scenePause = new ScenePause()