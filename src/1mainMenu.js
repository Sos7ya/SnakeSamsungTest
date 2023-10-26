var startGame = {
    action: 'startGame',
    allGameSessionId : sessionID,
    gameSessionId: gameId,
    timeStamp: Date.now()
}

class MainMenu extends Phaser.Scene{
    constructor(){
        super({key:'mainMenu'})
    }

    create(){
        this.texturePack = getTexturePack();
        gameState.onMenu = true
        gameState.onGame = false
        this.menuBG = this.add.image(game.config.width/2, game.config.height/2, `mainBG_${this.texturePack}`).setOrigin(0.5)
        this.menuBG.setDisplaySize(game.config.width, game.config.height)
        this.mainbg = this.add.image(game.config.width / 2, game.config.height/2, 'menuStart').setOrigin(0.5)
        this.mainbg.setDisplaySize(game.config.width, game.config.height)

        this.controlsInfo = this.add.image(260, 70, 'controlsInfo').setOrigin(0.5)
        this.ageInfo = this.add.image(game.config.width-210, 100, 'ageInfo').setOrigin(0, 0.5)

        this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button').setScale(0.5);
        this.btnStart.setOrigin(0.5)

        this.btnClose = this.add.sprite(this.btnStart.x, this.btnStart.y + 130, 'button').setScale(0.43);
        this.btnClose.setOrigin(0.5)

        this.selector = this.add.image(this.btnStart.x, this.btnStart.y, "selector").setScale(0.44)
        this.selector.setOrigin(0.5)

        this.btnStartText = this.add.text(this.btnStart.x, this.btnStart.y, 'НАЧАТЬ ИГРУ',{
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

        // this.btnStart.setInteractive()
        // this.btnClose.setInteractive()
        // this.btnClose.on('pointerdown', this.exit, this)
        // this.btnStart.on('pointerdown', this.startGame, this)

        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this)

        // this.input.keyboard.on('keydown-BACKSPACE', ()=>{gameOver.exit();}, this)

        document.addEventListener('keydown',(e)=>{
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.onPressExit()
            }
        })

        this.clickSound = this.sound.add('click', {loop:false})

        this.loadScore()
        
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        
    }

    loadScore(){
        if(localStorage.getItem('heighScore_snake')){
            this.hieghScoreText = this.add.text(game.config.width/2, game.config.height - 100, `${JSON.parse(localStorage.getItem('heighScore_snake'))}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y-75, 'Рекорд', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
        
        }
    }

    selectorDown(){
        if(gameState.onMenu === true){
            if(this.selector.y != this.btnClose.y){
              this.selector.y = this.btnClose.y
              this.btnCloseText.setColor('white');
              this.btnStartText.setColor('#F0516B');
              this.clickSound.play()
            }
        }
    }

    selectorUp(){
        if(gameState.onMenu === true){
            if(this.selector.y != this.btnStart.y){
                this.selector.y = this.btnStart.y
                this.btnCloseText.setColor('#F0516B');
                this.btnStartText.setColor('white');
                this.clickSound.play()
            }
        }
    }

    gameToggle(){
        if(gameState.onMenu === true){
            if(this.selector.y == this.btnStart.y){
                this.startGame()
                this.clickSound.play()
            }
            else if(this.selector.y === this.btnClose.y){
                this.clickSound.play();
                this.exit();
            }
        }
    }

    startGame(){
        if(gameState.onMenu){
            gameState.onMenu = false
            try{
                startGame.gameSessionId = generateUUID();
                startGame.allGameSessionId = sessionID;
                window?.parent.postMessage(startGame, '*');
                this.scene.start('snakegame');
            }
            catch(er){
                var startGameError = {
                    action: 'startGameError',
                    allGameSessionId : sessionID,
                    gameSessionId: gameId,
                    error: er.message,
                    timeStamp: Date.now()
                }
                window?.parent.postMessage(startGameError, '*');
            }
            
        }
    }
    exit(){
        if(gameState.onMenu){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                }
        
                window?.parent.postMessage(closeGameSession, '*');
                posted = true;
            }
    }
        
    }

    onPressExit(){
        if(gameState.onMenu === true){
            this.exit()
        }
    }

    update(){

    }
}
var mainMenu = new MainMenu()