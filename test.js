window.onload = function(){
    var config = {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        
        backgroundColor: '#000',
        parent: "phaser-example",
        scene:[testScene],
        physics: {
            default: 'arcade'
        },
        scale: {
            mode: Phaser.Scale.FIT
        },
        audio: {
            noAudio: true,
            disableWebAudio: true,
        }   
    }
    let canvas = document.getElementsByTagName('canvas');
    canvas.outline = 0;
    

    game = new Phaser.Game(config);
}

class TestScene extends Phaser.Scene{
    constructor(){
        super({key: 'tetsScene'});
    }

    preload(){
        this.load.setPath('assets/');

        this.load.image('mainBG_0', 'ui/uibg_0.png');
        this.load.image('menuStart', 'ui/menuStart.png');

    }

    create(){
        this.menuBG = this.add.image(game.config.width/2, game.config.height/2, `mainBG_0`).setOrigin(0.5)
        this.menuBG.setDisplaySize(game.config.width, game.config.height)
        this.mainbg = this.add.image(game.config.width / 2, game.config.height/2, 'menuStart').setOrigin(0.5)
        this.mainbg.setDisplaySize(game.config.width, game.config.height)
    }

    update(){}
}

var testScene = new TestScene();