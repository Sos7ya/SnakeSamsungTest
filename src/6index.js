var game;
var snake;
var food;
var bonus;
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;
var CELL = 32;
var game_version = 'v 0.4.8s';
var posted = false;
var sessionID;
var gameId = generateUUID();

var parentOrigin;

function getTexturePack(){
    return Math.floor(Math.random()*3);
}

var gameState ={
    onMenu:false,
    onPause: false,
    isOver: false,
    onGame: false,
    score: 0
}


sessionID = generateUUID()
    try{
        var startGameSession = {
          action: 'startGameSession',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        }

        window.onload = function(){
            var config = {
                type: Phaser.CANVAS,
                width: 1920,
                height: 1080,
                
                backgroundColor: '#000',
                parent: "phaser-example",
                scene:[preloader, mainMenu, snacegame, scenePause, gameOver],
                physics: {
                    default: 'arcade'
                },
                scale: {
                    mode: Phaser.Scale.FIT
                },
                audio: {
                    disableWebAudio: true,
                }   
            }
        
            let canvas = document.getElementsByTagName('canvas');
            canvas.outline = 0;
            if(document.referrer){
                parentOrigin = new URL(document.referrer).origin
            }
            else{
                parentOrigin = '*';
            }
        
            game = new Phaser.Game(config);
            window?.parent.postMessage(startGameSession, `${parentOrigin}`);
        }
      }
      
      catch(er){
        var startGameSessionError = {
          action: 'startGameSessionError',
          allGameSessionId: sessionID,
          error: er.message,
          timeStamp: Date.now()
        }
        window?.parent.postMessage(startGameSessionError, `${parentOrigin}`);
    }