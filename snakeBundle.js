"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Preloader = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Preloader, _Phaser$Scene);
  var _super = _createSuper(Preloader);
  function Preloader() {
    _classCallCheck(this, Preloader);
    return _super.call(this, {
      key: 'preloader'
    });
  }
  _createClass(Preloader, [{
    key: "preload",
    value: function preload() {
      try {
        var _window;
        var startDownloading = {
          action: 'startDownloading',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window = window) === null || _window === void 0 || _window.parent.postMessage(startDownloading, "".concat(parentOrigin));
        this.loadText = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'Nunito-black',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white'
        });
        this.loadText2 = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'Nunito',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white'
        });
        this.loadText3 = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'RubikOne-Regular',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white'
        });
        this.loadText4 = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white'
        });
        this.loadText5 = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'Rubik-Regular',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white'
        });
        this.loadText2.alpha = 0;
        this.loadText3.alpha = 0;
        this.loadText4.alpha = 0;
        this.loadText5.alpha = 0;
        this.loadText.setOrigin(0.5);
        this.load.setPath('assets/');
        this.load.image('line', 'line.png');
        this.load.image('info', 'gameInfo.png');
        this.load.image('controlsInfo', 'controlsInfo.png');
        this.load.image('ageInfo', 'ageInfo.png');
        this.load.image('background_0', 'skins/bg_0.png');
        this.load.image('background_1', 'skins/bg_1.png');
        this.load.image('background_2', 'skins/bg_2.png');
        this.load.image('head_0', 'skins/head_0.png');
        this.load.image('head_1', 'skins/head_1.png');
        this.load.image('head_2', 'skins/head_2.png');
        this.load.image('head_lick_0', '/skins/head_lick_0.png');
        this.load.image('head_lick_1', '/skins/head_lick_1.png');
        this.load.image('head_lick_2', '/skins/head_lick_2.png');
        this.load.image('body_0', 'skins/body_0.png');
        this.load.image('body_1', 'skins/body_1.png');
        this.load.image('body_2', 'skins/body_2.png');
        this.load.image('tail_0', 'skins/tail_0.png');
        this.load.image('tail_1', 'skins/tail_1.png');
        this.load.image('tail_2', 'skins/tail_2.png');
        this.load.image('scoreIcon', 'ui/scoreIcon.png');
        this.load.image('bestIcon', 'ui/bestIcon.png');
        this.load.image('menuStart', 'ui/menuStart.png');
        this.load.image('menuGameOver', 'ui/menuGameOver.png');
        this.load.image('mainBG_0', 'ui/uibg_0.png');
        this.load.image('mainBG_1', 'ui/uibg_1.png');
        this.load.image('mainBG_2', 'ui/uibg_2.png');
        this.load.image('pause', 'ui/pause.png');
        this.load.image('button', 'button.png');
        this.load.image('selector', 'selector.png');
        this.load.image('food', 'food.png');
        this.load.image('food_small', 'food_small.png');
        this.load.image('food_big', 'food_big.png');
        this.load.image('bonus_1', 'bonus_1.png');
        this.load.image('bonus_0', 'bonus_0.png');
        this.load.image('bonus_small_0', 'bonus_small_0.png');
        this.load.image('bonus_small_1', 'bonus_small_1.png');
        this.load.image('bonus_big_0', 'bonus_big_0.png');
        this.load.image('bonus_big_1', 'bonus_big_1.png');
        this.load.image('head_helmet_0', '/skins/head_helmet_0.png');
        this.load.image('head_helmet_1', '/skins/head_helmet_1.png');
        this.load.image('head_helmet_2', '/skins/head_helmet_2.png');
        this.load.image('head_helmet_nolick_0', '/skins/head_helmet_nolick_0.png');
        this.load.image('head_helmet_nolick_1', '/skins/head_helmet_nolick_1.png');
        this.load.image('head_helmet_nolick_2', '/skins/head_helmet_nolick_2.png');
        this.load.audio('background-music', 'sounds/background_music.mp3');
        this.load.audio('bite', 'sounds/bite.mp3');
        this.load.audio('bonus', 'sounds/bonus.mp3');
        this.load.audio('click', 'sounds/click.mp3');
        this.load.audio('down', 'sounds/down.mp3');
        this.load.audio('left', 'sounds/left.mp3');
        this.load.audio('lose', 'sounds/lose.mp3');
        this.load.audio('right', 'sounds/right.mp3');
        this.load.audio('up', 'sounds/up.mp3');
      } catch (er) {
        var _window2;
        var startDownloadingError = {
          action: 'startDownloadingError',
          allGameSessionId: sessionID,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window2 = window) === null || _window2 === void 0 || _window2.parent.postMessage(startDownloadingError, "".concat(parentOrigin));
      }
    }
  }, {
    key: "create",
    value: function create() {
      try {
        var _window3;
        var finishDownload = {
          action: 'finishDownload',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window3 = window) === null || _window3 === void 0 || _window3.parent.postMessage(finishDownload, "".concat(parentOrigin));
        this.anims.create({
          key: 'food-animation',
          frames: [{
            key: 'food_small',
            duration: 500
          }, {
            key: 'food',
            duration: 500
          }, {
            key: 'food_big',
            duration: 500
          }],
          frameRate: 6,
          repeat: -1
        });

        // this.bonus = new Bonus(this, -1, -1, `bonus_${1}`, 1);
        // this.bonus.alpha = 0

        this.anims.create({
          key: 'liking_0',
          frames: [{
            key: "head_0"
          }, {
            key: "head_lick_0",
            duration: 1000
          }],
          frameRate: 6,
          repeat: -1
        });
        this.anims.create({
          key: 'liking_1',
          frames: [{
            key: "head_1"
          }, {
            key: "head_lick_1",
            duration: 1000
          }],
          frameRate: 6,
          repeat: -1
        });
        this.anims.create({
          key: 'liking_2',
          frames: [{
            key: "head_2"
          }, {
            key: "head_lick_2",
            duration: 1000
          }],
          frameRate: 6,
          repeat: -1
        });
        this.anims.create({
          key: 'onGodeAnimation_0',
          frames: [{
            key: "head_helmet_0"
          }, {
            key: "head_helmet_nolick_0",
            duration: 1000
          }],
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: 'onGodeAnimation_1',
          frames: [{
            key: "head_helmet_1"
          }, {
            key: "head_helmet_nolick_1",
            duration: 1000
          }],
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: 'onGodeAnimation_2',
          frames: [{
            key: "head_helmet_2"
          }, {
            key: "head_helmet_nolick_2",
            duration: 1000
          }],
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: 'bonus-animation_0',
          frames: [{
            key: "bonus_small_".concat(0),
            duration: 500
          }, {
            key: "bonus_".concat(0),
            duration: 500
          }, {
            key: "bonus_big_".concat(0),
            duration: 500
          }],
          frameRate: 6,
          repeat: -1
        });
        this.anims.create({
          key: 'bonus-animation_1',
          frames: [{
            key: "bonus_small_".concat(1),
            duration: 500
          }, {
            key: "bonus_".concat(1),
            duration: 500
          }, {
            key: "bonus_big_".concat(1),
            duration: 500
          }],
          frameRate: 6,
          repeat: -1
        });
      } catch (er) {
        var _window4;
        var downloadError = {
          action: 'downloadError',
          allGameSessionId: sessionID,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window4 = window) === null || _window4 === void 0 || _window4.parent.postMessage(downloadError, "".concat(parentOrigin));
      }
      this.scene.start(mainMenu);
    }
  }]);
  return Preloader;
}(Phaser.Scene);
var preloader = new Preloader();
var _startGame = {
  action: 'startGame',
  allGameSessionId: sessionID,
  gameSessionId: gameId,
  timeStamp: Date.now()
};
var MainMenu = /*#__PURE__*/function (_Phaser$Scene2) {
  _inherits(MainMenu, _Phaser$Scene2);
  var _super2 = _createSuper(MainMenu);
  function MainMenu() {
    _classCallCheck(this, MainMenu);
    return _super2.call(this, {
      key: 'mainMenu'
    });
  }
  _createClass(MainMenu, [{
    key: "create",
    value: function create() {
      var _this = this;
      this.texturePack = getTexturePack();
      gameState.onMenu = true;
      gameState.onGame = false;
      this.menuBG = this.add.image(game.config.width / 2, game.config.height / 2, "mainBG_".concat(this.texturePack)).setOrigin(0.5);
      this.menuBG.setDisplaySize(game.config.width, game.config.height);
      this.mainbg = this.add.image(game.config.width / 2, game.config.height / 2, 'menuStart').setOrigin(0.5);
      this.mainbg.setDisplaySize(game.config.width, game.config.height);
      this.controlsInfo = this.add.image(260, 70, 'controlsInfo').setOrigin(0.5);
      this.ageInfo = this.add.image(game.config.width - 210, 100, 'ageInfo').setOrigin(0, 0.5);
      this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button').setScale(0.5);
      this.btnStart.setOrigin(0.5);
      this.btnClose = this.add.sprite(this.btnStart.x, this.btnStart.y + 130, 'button').setScale(0.43);
      this.btnClose.setOrigin(0.5);
      this.selector = this.add.image(this.btnStart.x, this.btnStart.y, "selector").setScale(0.44);
      this.selector.setOrigin(0.5);
      this.btnStartText = this.add.text(this.btnStart.x, this.btnStart.y, 'НАЧАТЬ ИГРУ', {
        fontFamily: 'Nunito',
        fontSize: '60px',
        color: 'white',
        fontStyle: 'bold',
        align: 'center'
      });
      this.btnStartText.setOrigin(0.5);
      this.btnCloseText = this.add.text(this.btnClose.x, this.btnClose.y, 'ВЫЙТИ', {
        fontFamily: 'Nunito',
        fontSize: '45px',
        color: '#F0516B',
        fontStyle: 'bold',
        align: 'center'
      });
      this.btnCloseText.setOrigin(0.5);

      // this.btnStart.setInteractive()
      // this.btnClose.setInteractive()
      // this.btnClose.on('pointerdown', this.exit, this)
      // this.btnStart.on('pointerdown', this.startGame, this)

      this.input.keyboard.on('keydown-ENTER', this.gameToggle, this);

      // this.input.keyboard.on('keydown-BACKSPACE', ()=>{gameOver.exit();}, this)

      document.addEventListener('keydown', function (e) {
        if (e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) {
          _this.onPressExit();
        }
      });
      this.clickSound = this.sound.add('click', {
        loop: false
      });
      this.loadScore();
      this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
        fontFamily: 'Nunito-black',
        fontStyle: 'bold',
        fontSize: '30px',
        fill: '#fff'
      }).setOrigin(0.5);
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_snake')) {
        this.hieghScoreText = this.add.text(game.config.width / 2, game.config.height - 100, "".concat(JSON.parse(localStorage.getItem('heighScore_snake'))), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y - 75, 'Рекорд', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (gameState.onMenu === true) {
        if (this.selector.y != this.btnClose.y) {
          this.selector.y = this.btnClose.y;
          this.btnCloseText.setColor('white');
          this.btnStartText.setColor('#F0516B');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (gameState.onMenu === true) {
        if (this.selector.y != this.btnStart.y) {
          this.selector.y = this.btnStart.y;
          this.btnCloseText.setColor('#F0516B');
          this.btnStartText.setColor('white');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "gameToggle",
    value: function gameToggle() {
      if (gameState.onMenu === true) {
        if (this.selector.y == this.btnStart.y) {
          this.startGame();
          this.clickSound.play();
        } else if (this.selector.y === this.btnClose.y) {
          this.clickSound.play();
          this.exit();
        }
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      if (gameState.onMenu) {
        gameState.onMenu = false;
        try {
          var _window5;
          _startGame.gameSessionId = generateUUID();
          _startGame.allGameSessionId = sessionID;
          (_window5 = window) === null || _window5 === void 0 || _window5.parent.postMessage(_startGame, "".concat(parentOrigin));
          this.scene.start('snakegame');
        } catch (er) {
          var _window6;
          var startGameError = {
            action: 'startGameError',
            allGameSessionId: sessionID,
            gameSessionId: gameId,
            error: er.message,
            timeStamp: Date.now()
          };
          (_window6 = window) === null || _window6 === void 0 || _window6.parent.postMessage(startGameError, "".concat(parentOrigin));
        }
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (gameState.onMenu) {
        if (!posted) {
          var _window7;
          var closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
          };
          (_window7 = window) === null || _window7 === void 0 || _window7.parent.postMessage(closeGameSession, "".concat(parentOrigin));
          posted = true;
        }
      }
    }
  }, {
    key: "onPressExit",
    value: function onPressExit() {
      if (gameState.onMenu === true) {
        this.exit();
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return MainMenu;
}(Phaser.Scene);
var mainMenu = new MainMenu();
var Entity = /*#__PURE__*/function (_Phaser$GameObjects$I) {
  _inherits(Entity, _Phaser$GameObjects$I);
  var _super3 = _createSuper(Entity);
  function Entity(scene, x, y, type) {
    var _this2;
    _classCallCheck(this, Entity);
    _this2 = _super3.call(this, scene, x, y);
    _this2.scene = scene;
    _this2.scene.add.existing(_assertThisInitialized(_this2));
    _this2.setData('type', type);
    _this2.setData('isDead', false);
    return _this2;
  }
  return _createClass(Entity);
}(Phaser.GameObjects.Image);
var Food = /*#__PURE__*/function (_Entity) {
  _inherits(Food, _Entity);
  var _super4 = _createSuper(Food);
  function Food(scene, x, y) {
    var _this3;
    _classCallCheck(this, Food);
    _this3 = _super4.call(this, scene, x, y);
    _this3.body = _this3.scene.physics.add.sprite(x * CELL, y * CELL, 'food').play('food-animation');
    _this3.body.setDisplaySize(32, 32);
    _this3.body.setSize(30, 30, true);
    _this3.body.setOrigin(0.5);
    _this3.total = 0;
    return _this3;
  }
  _createClass(Food, [{
    key: "eat",
    value: function eat() {
      this.total++;
    }
  }]);
  return Food;
}(Entity);
var Bonus = /*#__PURE__*/function (_Entity2) {
  _inherits(Bonus, _Entity2);
  var _super5 = _createSuper(Bonus);
  function Bonus(scene, x, y, texture, i) {
    var _this4;
    _classCallCheck(this, Bonus);
    _this4 = _super5.call(this, scene, x, y);
    _this4.onPlate = false;
    _this4.body = _this4.scene.physics.add.sprite(x * CELL, y * CELL, texture).play("bonus-animation_".concat(i));
    _this4.body.setDisplaySize(32, 32);
    _this4.body.setOrigin(0.5);
    _this4.index = i;
    _this4.bonusSound = _this4.scene.sound.add('bonus', {
      loop: false,
      volume: 0.5
    });
    return _this4;
  }
  return _createClass(Bonus);
}(Entity);
var Snake = /*#__PURE__*/function (_Entity3) {
  _inherits(Snake, _Entity3);
  var _super6 = _createSuper(Snake);
  function Snake(scene, x, y) {
    var _this5;
    _classCallCheck(this, Snake);
    _this5 = _super6.call(this, scene, x, y);
    _this5.headPosition = new Phaser.Geom.Point(x, y);
    _this5.body = scene.add.group();
    _this5.head = _this5.scene.physics.add.sprite(x * CELL, y * CELL, "head_".concat(mainMenu.texturePack)).play("liking_".concat(mainMenu.texturePack));
    _this5.body.add(_this5.head);
    _this5.head.setOrigin(0.5);
    _this5.head.setScale(0.4);
    _this5.head.setDepth(4);
    _this5.head.rotation = 4.7;
    _this5.alive = true;
    _this5.speed = 130;
    _this5.moveTime = 0;
    _this5.tail = _this5.scene.physics.add.sprite(_this5.head.x, _this5.head.y, "tail_".concat(mainMenu.texturePack));
    _this5.body.add(_this5.tail);
    _this5.tail.setOrigin(0.5);
    _this5.tail.setDisplaySize(32, 32);
    _this5.tail.setSize(32, 32, true);
    _this5.bodyGraphics = _this5.scene.add.graphics();
    _this5.end = new Phaser.Geom.Point(x, y);
    _this5.heading = RIGHT;
    _this5.direction = RIGHT;
    _this5.bodySegments = _this5.body.getChildren();
    _this5.onGod = false;
    _this5.biteSound = _this5.scene.sound.add('bite', {
      loop: false,
      volume: 0.5
    });
    _this5.leftSound = _this5.scene.sound.add('left', {
      loop: false,
      volume: 0.5
    });
    _this5.rightSound = _this5.scene.sound.add('right', {
      loop: false,
      volume: 0.5
    });
    _this5.upSound = _this5.scene.sound.add('up', {
      loop: false,
      volume: 0.5
    });
    _this5.downSound = _this5.scene.sound.add('down', {
      loop: false,
      volume: 0.5
    });
    _this5.deadSound = _this5.scene.sound.add('lose', {
      loop: false,
      volume: 0.5
    });

    //this.turnPoints.push(turnPointL, turnPointR, turnPointU, turnPointD);
    return _this5;
  }
  _createClass(Snake, [{
    key: "updateBodyGraphics",
    value: function updateBodyGraphics() {
      var bodyWidth = 28;
      var bodyRadius = 6;
      var points = [this.bodySegments[0]];
      var horizontal = true;
      for (var i = 1; i < this.bodySegments.length - 1; i++) {
        var currentSegment = this.bodySegments[i];
        var previousSegment = this.bodySegments[i - 1];
        if (horizontal && currentSegment.y !== points[points.length - 1].y || !horizontal && currentSegment.x !== points[points.length - 1].x) {
          points.push(previousSegment);
          horizontal = !horizontal;
        }
        var distanceX = Math.abs(currentSegment.x - previousSegment.x);
        var distanceY = Math.abs(currentSegment.y - previousSegment.y);
        if (distanceX !== 0 && distanceY !== 0) {
          points.push(previousSegment);
          points.push(null);
          points.push(currentSegment);
        }
      }
      points.push(this.bodySegments[this.bodySegments.length - 2]);
      points = this.removeDuplicatesKeepFirst(points);
      if (points.length >= 2) {
        this.bodyGraphics.clear();
      }
      switch (mainMenu.texturePack) {
        case 0:
          this.bodyGraphics.fillStyle(0xff7900);
          break;
        case 1:
          this.bodyGraphics.fillStyle(0xf7506a);
          break;
        case 2:
          this.bodyGraphics.fillStyle(0xf2e820);
          break;
      }
      for (var _i = 1; _i < points.length; _i++) {
        var p1 = points[_i - 1];
        var p2 = points[_i];
        if (p1 === null || p2 === null) continue;
        var minX = Math.min(p1.x, p2.x);
        var minY = Math.min(p1.y, p2.y);
        var maxX = Math.max(p1.x, p2.x);
        var maxY = Math.max(p1.y, p2.y);
        var width = maxX - minX + bodyWidth;
        var height = maxY - minY + bodyWidth;
        if (p1.x === p2.x) {
          this.bodyGraphics.fillRoundedRect(minX - bodyWidth / 2, minY - bodyWidth / 2, bodyWidth, height, bodyRadius);
        } else if (p1.y === p2.y) {
          this.bodyGraphics.fillRoundedRect(minX - bodyWidth / 2, minY - bodyWidth / 2, width, bodyWidth, bodyRadius);
        }
      }
      this.bodyGraphics.fillPath();
    }
  }, {
    key: "removeDuplicatesKeepFirst",
    value: function removeDuplicatesKeepFirst(arr) {
      var uniqueValues = new Set();
      return arr.filter(function (value) {
        if (value === null || !uniqueValues.has(value)) {
          uniqueValues.add(value);
          return true;
        }
        return false;
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      if (gameState.onGame === true) {
        this.updateBodyGraphics();
        if (time >= this.moveTime) {
          return this.move(time);
        }
      }
    }
  }, {
    key: "faceLeft",
    value: function faceLeft() {
      if (gameState.onGame === true) {
        if (this.direction === UP || this.direction === DOWN) {
          this.heading = LEFT;
          this.leftSound.play();
          this.head.rotation = 1.57079;
        }
      }
    }
  }, {
    key: "faceRight",
    value: function faceRight() {
      if (gameState.onGame === true) {
        if (this.direction === UP || this.direction === DOWN) {
          this.heading = RIGHT;
          this.rightSound.play();
          this.head.rotation = 4.71238;
        }
      }
    }
  }, {
    key: "faceUp",
    value: function faceUp() {
      if (gameState.onGame === true) {
        if (this.direction === LEFT || this.direction === RIGHT) {
          this.heading = UP;
          this.upSound.play();
          this.head.rotation = 3.14159;
        }
      }
    }
  }, {
    key: "faceDown",
    value: function faceDown() {
      if (gameState.onGame === true) {
        if (this.direction === LEFT || this.direction === RIGHT) {
          this.heading = DOWN;
          this.downSound.play();
          this.head.rotation = 0;
        }
      }
    }
  }, {
    key: "move",
    value: function move(time) {
      if (gameState.onGame !== true) {
        return false;
      }
      if (this.onGod === false) {
        switch (this.heading) {
          case LEFT:
            this.headPosition.x = Phaser.Math.Clamp(this.headPosition.x - 1, 3, game.config.width / CELL - 3);
            break;
          case RIGHT:
            this.headPosition.x = Phaser.Math.Clamp(this.headPosition.x + 1, 3, game.config.width / CELL - 3);
            break;
          case UP:
            this.headPosition.y = Phaser.Math.Clamp(this.headPosition.y - 1, 6, Math.floor(game.config.height / CELL - 2));
            break;
          case DOWN:
            this.headPosition.y = Phaser.Math.Clamp(this.headPosition.y + 1, 6, Math.floor(game.config.height / CELL - 2));
            break;
        }
      } else {
        switch (this.heading) {
          case LEFT:
            this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 3, Math.floor(game.config.width / CELL - 2));
            break;
          case RIGHT:
            this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 3, Math.floor(game.config.width / CELL - 2));
            break;
          case UP:
            this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 6, Math.floor(game.config.height / CELL - 1));
            break;
          case DOWN:
            this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 6, Math.floor(game.config.height / CELL - 1));
            break;
        }
      }
      this.direction = this.heading;
      Phaser.Actions.ShiftPosition(this.body.children.entries, this.headPosition.x * CELL, this.headPosition.y * CELL, 1, this.end);
      var hitBody = Phaser.Actions.GetFirst(this.bodySegments, {
        x: this.head.x,
        y: this.head.y
      }, 1);
      if (hitBody && this.onGod === false) {
        this.alive = false;
        this.deadSound.play();
        return false;
      } else {
        this.moveTime = time + this.speed;
        this.alive = true;
        return true;
      }
    }
  }, {
    key: "grow",
    value: function grow() {
      var _this6 = this;
      this.bodySegments[1].setSize(30, 30, true);
      this.tail.setTexture("body_".concat(mainMenu.texturePack));
      this.tail.setDisplaySize(30, 30);
      this.tail.alpha = 0;
      this.tail = this.scene.add.sprite(this.head.x, this.head.y, "tail_".concat(mainMenu.texturePack));
      this.tail.rotation = this.bodySegments[this.bodySegments.length - 1].rotation;
      this.tail.alpha = 0;
      this.body.add(this.tail);
      this.tail.setOrigin(0.5);
      this.tail.setDisplaySize(40, 40);
      this.bodySegments.forEach(function (element) {
        element.setDisplaySize(30, 30);
        element.setSize(30, 30, true);
        element.alpha = 0;
        _this6.head.alpha = 1;
        _this6.head.setScale(0.4);
      });
      // this.head.setTexture(`head_${mainMenu.texturePack}`)
    }
  }, {
    key: "godMode",
    value: function godMode() {
      var _this7 = this;
      this.onGod = true;
      this.head.stop("liking_".concat(mainMenu.texturePack));
      this.head.play("onGodeAnimation_".concat(mainMenu.texturePack));
      setTimeout(function () {
        _this7.onGod = false;
        _this7.head.stop("onGodeAnimation_".concat(mainMenu.texturePack));
        _this7.head.play("liking_".concat(mainMenu.texturePack));
      }, 15000);
    }
  }, {
    key: "speedUp",
    value: function speedUp() {
      var _this8 = this;
      this.speed -= 50;
      setTimeout(function () {
        _this8.speed += 50;
      }, 15000);
    }
  }, {
    key: "collideWithBonus",
    value: function collideWithBonus(bonus) {
      if (this.scene.bonus.body != undefined && this.head.x === bonus.body.x && this.head.y === bonus.body.y) {
        bonus.index !== 1 ? this.speedUp() : this.godMode();
        bonus.bonusSound.play();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "collideWithFood",
    value: function collideWithFood(food) {
      if (this.head.x === food.body.x && this.head.y === food.body.y) {
        this.grow();
        food.eat();
        this.biteSound.play();
        if (this.speed < 150 && food.total % 5 === 0) {
          this.speed += 5;
        }
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "updateGrid",
    value: function updateGrid(grid) {
      this.body.getChildren().forEach(function (segment) {
        grid[segment.x / CELL][segment.y / CELL] = false;
      });
      return grid;
    }
  }]);
  return Snake;
}(Entity);
var validLocationsY = [];
var validLocationsX = [];
var SnakeGame = /*#__PURE__*/function (_Phaser$Scene3) {
  _inherits(SnakeGame, _Phaser$Scene3);
  var _super7 = _createSuper(SnakeGame);
  function SnakeGame() {
    _classCallCheck(this, SnakeGame);
    return _super7.call(this, {
      key: 'snakegame'
    });
  }
  _createClass(SnakeGame, [{
    key: "create",
    value: function create() {
      var _this9 = this;
      try {
        gameState.onGame = true;
        gameState.onPause = false;
        gameState.onMenu = false;
        this.texturePack = mainMenu.texturePack;
        this.bgGraph = this.add.graphics();
        switch (mainMenu.texturePack) {
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
        this.bgGraph.fillRect(0, 0, game.config.width, game.config.height);
        this.backGround = this.add.image(game.config.width / 2, game.config.height / 2, "background_".concat(this.texturePack)).setOrigin(0.5, 0.51);
        this.backGround.setDisplaySize(game.config.width, game.config.height);
        this.bgmusic = this.sound.add('background-music', {
          loop: false,
          volume: 0.5
        });
        this.marker = 0;
        this.bgmusic.play();
        this.scoreText = this.add.text(game.config.width / 2 - 100, 55, "".concat(gameState.score), {
          fontFamily: 'Nunito',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white',
          textAlign: 'start'
        }).setOrigin(0.5);
        this.scoreIcon = this.add.image(this.scoreText.x - 90, this.scoreText.y, 'scoreIcon').setOrigin(0.5).setDisplaySize(60, 66);
        this.gameInfo = this.add.image(290, 60, 'info').setOrigin(0.5);
        this.foodArray = [];
        for (var i = 0; i < 1; i++) {
          var _food = new Food(snacegame, 30, 20, 'food');
          this.foodArray.push(_food);
        }
        this.snake = snake = new Snake(snacegame, 20, 20, 'body_0');
        this.snake.grow();
        this.snake.grow();
        document.addEventListener('keydown', function (e) {
          if ((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onGame) {
            _this9.pause();
          }
        });
        this.loadScore();
        this.snake.bodySegments[1].setSize(30, 30, true);
        // this.snake.bodySegments[1].depth = this.food.body.depth
        // this.physics.add.collider(this.snake.bodySegments[0], this.food.body, ()=>{this.snake.grow(); this.repositionFood(); this.snake.biteSound.play();gameState.score+=1}, null, this);

        // this.stopSound =  setInterval(()=>{this.soundOff(); this.marker >= 5 ? clearInterval(this.stopSound) && this.bgmusic.stop() : null}, 1000);

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
          fontFamily: 'Nunito-black',
          fontStyle: 'bold',
          fontSize: '30px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.getField();
      } catch (er) {
        var _window8;
        var undefinedError = {
          action: 'undefinedError',
          allGameSessionId: sessionID,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window8 = window) === null || _window8 === void 0 || _window8.parent.postMessage(undefinedError, "".concat(parentOrigin));
      }
    }

    // soundOff(){
    //     if(this.bgmusic.volume > 0){
    //         this.bgmusic.volume -= 0.1
    //         this.marker++
    //     }
    // }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_snake')) {
        this.hieghScoreText = this.add.text(this.scoreText.x + 260, this.scoreText.y, "".concat(JSON.parse(localStorage.getItem('heighScore_snake'))), {
          fontFamily: 'Nunito',
          fontStyle: 'bold',
          fontSize: '40px',
          fill: 'white',
          textAlign: 'start'
        }).setOrigin(0.5);
        this.hieghScoreIcon = this.add.image(this.hieghScoreText.x - 90, this.hieghScoreText.y, 'bestIcon').setDisplaySize(72, 66).setOrigin(0.5);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      gameState.onGame = false;
      this.scene.pause(snacegame);
      this.scene.launch(scenePause);
    }
  }, {
    key: "addBonus",
    value: function addBonus(x, y, i) {
      var _this10 = this;
      if (gameState.score > 0 && gameState.score % 10 === 0) {
        this.bonus = new Bonus(this, x, y, "bonus_".concat(i), i);
        // this.physics.add.collider(this.snake.bodySegments[1], this.bonus.body, ()=>{this.bonus.bonusSound.play(); if(this.bonus.index == 0){this.snake.speedUp()}; if(this.bonus.index==1){this.snake.godMode()}; this.bonus.destroy()}, null, this);
        setTimeout(function () {
          _this10.bonus.destroy();
        }, 10000);
      }
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      // this.marker >= 5 ? clearInterval(this.stopSound) && this.bgmusic.stop() : null
      this.scoreText.setText("".concat(gameState.score));

      // game_session.score = gameState.score

      if (snake.update(time)) {
        if (this.bonus !== undefined && snake.collideWithBonus(this.bonus)) {
          this.bonus.destroy();
        }
        var _iterator = _createForOfIteratorHelper(this.foodArray),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _food2 = _step.value;
            if (snake.collideWithFood(_food2)) {
              this.repositionFood(_food2);
              gameState.score += 1;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!snake.alive) {
        this.snake.destroy();
        this.scene.start('gameOver');
      }
    }
  }, {
    key: "repositionFood",
    value: function repositionFood(food) {
      var ocupate = [];
      var _iterator2 = _createForOfIteratorHelper(this.snake.bodySegments),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var segment = _step2.value;
          ocupate.push({
            x: segment.x,
            y: segment.y
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
        var _iterator3 = _createForOfIteratorHelper(ocupate),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var point = _step3.value;
            if (pos.x == Math.floor(point.x / CELL) && pos.y == Math.floor(point.y / CELL)) {
              pos = {
                x: this.getPositionX(),
                y: this.getPositionY()
              };
            } else if (newpos.x == Math.floor(point.x / CELL) && newpos.y == Math.floor(point.y / CELL)) {
              newpos = {
                x: this.getPositionX(),
                y: this.getPositionY()
              };
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        food.body.setPosition(pos.x * CELL, pos.y * CELL);
        if (gameState.score > 0 && gameState.score % 10 === 0) {
          this.addBonus(newpos.x, newpos.y, Math.floor(Math.random() * 2));
        }
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getPositionX",
    value: function getPositionX() {
      var x = Math.floor(Phaser.Math.RND.pick(validLocationsX));
      return x;
    }
  }, {
    key: "getPositionY",
    value: function getPositionY() {
      var y = Math.floor(Phaser.Math.RND.pick(validLocationsY));
      return y;
    }
  }, {
    key: "getField",
    value: function getField() {
      for (var y = 6; y < game.config.height / CELL - 2; y++) {
        validLocationsY.push(Math.floor(y));
      }
      for (var x = 3; x < game.config.width / CELL - 3; x++) {
        validLocationsX.push(Math.floor(x));
      }
    }
  }]);
  return SnakeGame;
}(Phaser.Scene);
var snacegame = new SnakeGame();
var ScenePause = /*#__PURE__*/function (_Phaser$Scene4) {
  _inherits(ScenePause, _Phaser$Scene4);
  var _super8 = _createSuper(ScenePause);
  function ScenePause() {
    _classCallCheck(this, ScenePause);
    return _super8.call(this, {
      key: 'scenePause'
    });
  }
  _createClass(ScenePause, [{
    key: "create",
    value: function create() {
      var _this11 = this;
      gameState.onPause = true;
      gameState.onGame = false;
      try {
        var _window9;
        var gamePause = {
          action: 'gamePause',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          timeStamp: Date.now()
        };
        (_window9 = window) === null || _window9 === void 0 || _window9.parent.postMessage(gamePause, "".concat(parentOrigin));
        this.bgpauseImage = this.add.image(game.config.width / 2, game.config.height / 2, "mainBG_".concat(mainMenu.texturePack)).setOrigin(0.5);
        this.bgpauseImage.setDisplaySize(game.config.width, game.config.height);
        this.pauseScreen = this.add.image(game.config.width / 2, game.config.height / 2, 'pause').setOrigin(0.5).setDisplaySize(game.config.width, game.config.height);
        this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button').setScale(0.5);
        this.btnStart.setOrigin(0.5);
        this.controlsInfo = this.add.image(310, 70, 'controlsInfo').setOrigin(0.5);
        this.btnClose = this.add.sprite(this.btnStart.x, this.btnStart.y + 120, 'button').setScale(0.43);
        this.btnClose.setOrigin(0.5);
        this.selector = this.add.image(game.config.width / 2, game.config.height / 2 + 100, "selector");
        this.selector.setScale(0.44);
        this.selector.setOrigin(0.5);
        this.btnStartText = this.add.text(game.config.width / 2, game.config.height / 2 + 100, 'ПРОДОЛЖИТЬ', {
          fontFamily: 'Nunito',
          fontSize: '60px',
          color: 'white',
          fontStyle: 'bold',
          align: 'center'
        });
        this.btnStartText.setOrigin(0.5);
        this.btnCloseText = this.add.text(this.btnClose.x, this.btnClose.y, 'ВЫЙТИ', {
          fontFamily: 'Nunito',
          fontSize: '45px',
          color: '#F0516B',
          fontStyle: 'bold',
          align: 'center'
        });
        this.btnCloseText.setOrigin(0.5);
        this.btnStart.setInteractive();
        this.btnClose.setInteractive();
        this.btnClose.on('pointerdown', this.exit, this);
        this.btnStart.on('pointerdown', this.resumeGame, this);
        document.addEventListener('keydown', function (e) {
          if ((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onPause) {
            _this11.onPressExit();
          }
        });
        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this);
        this.scoreText = this.add.text(game.config.width / 2 - 150, game.config.height - 100, "".concat(gameState.score), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.scoreTitle = this.add.text(this.scoreText.x, this.scoreText.y - 75, 'Счет', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
        this.saveScore();
        this.loadScore();
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
          fontFamily: 'Nunito-black',
          fontStyle: 'bold',
          fontSize: '30px',
          fill: '#fff'
        }).setOrigin(0.5);
      } catch (er) {
        var _window10;
        var gamePauseError = {
          action: 'gamePauseError',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window10 = window) === null || _window10 === void 0 || _window10.parent.postMessage(gamePauseError, "".concat(parentOrigin));
      }
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      this.heighScore = gameState.score;
      this.oldScore = JSON.parse(localStorage.getItem('heighScore_snake'));
      this.heighScore > this.oldScore ? localStorage.setItem('heighScore_snake', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_snake')) {
        this.hieghScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100, "".concat(JSON.parse(localStorage.getItem('heighScore_snake'))), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y - 75, 'Рекорд', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
        this.line = this.add.image(game.config.width / 2, game.config.height - 120, 'line').setOrigin(0.5);
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (gameState.onPause == true) {
        if (this.selector.y != this.btnClose.y) {
          this.selector.y = this.btnClose.y;
          this.btnCloseText.setColor('white');
          this.btnStartText.setColor('#F0516B');
          mainMenu.clickSound.play();
        }
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (gameState.onPause == true) {
        if (this.selector.y != this.btnStart.y) {
          this.selector.y = this.btnStart.y;
          this.btnCloseText.setColor('#F0516B');
          this.btnStartText.setColor('white');
          mainMenu.clickSound.play();
        }
      }
    }
  }, {
    key: "gameToggle",
    value: function gameToggle() {
      if (gameState.onPause == true) {
        if (this.selector.y == this.btnStart.y) {
          this.resumeGame();
          mainMenu.clickSound.play();
        } else if (this.selector.y == this.btnClose.y) {
          mainMenu.clickSound.play();
          this.exit();
        }
      }
    }
  }, {
    key: "resumeGame",
    value: function resumeGame() {
      gameState.onPause = false;
      gameState.onGame = true;
      try {
        var _window11;
        var gameResume = {
          action: 'gameResume',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          timeStamp: Date.now()
        };
        (_window11 = window) === null || _window11 === void 0 || _window11.parent.postMessage(gameResume, "".concat(parentOrigin));
        this.scene.resume(snacegame);
        this.scene.stop(scenePause);
      } catch (er) {
        var _window12;
        var gameResumeError = {
          action: 'gameResumeError',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window12 = window) === null || _window12 === void 0 || _window12.parent.postMessage(gameResumeError, "".concat(parentOrigin));
        this.scene.resume(snacegame);
        this.scene.stop(scenePause);
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (gameState.onPause) {
        if (!posted) {
          var _window13, _window14;
          var closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
          };
          var _gameOver = {
            action: 'gameOver',
            allGameSessionId: sessionID,
            gameSessionId: _startGame.gameSessionId,
            score: gameState.score,
            timeStamp: Date.now()
          };
          (_window13 = window) === null || _window13 === void 0 || _window13.parent.postMessage(_gameOver, "".concat(parentOrigin));
          (_window14 = window) === null || _window14 === void 0 || _window14.parent.postMessage(closeGameSession, "".concat(parentOrigin));
          posted = true;
        }
      }
    }
  }, {
    key: "onPressExit",
    value: function onPressExit() {
      if (gameState.onPause == true) {
        this.exit();
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return ScenePause;
}(Phaser.Scene);
var scenePause = new ScenePause();
var GameOver = /*#__PURE__*/function (_Phaser$Scene5) {
  _inherits(GameOver, _Phaser$Scene5);
  var _super9 = _createSuper(GameOver);
  function GameOver() {
    _classCallCheck(this, GameOver);
    return _super9.call(this, {
      key: 'gameOver'
    });
  }
  _createClass(GameOver, [{
    key: "create",
    value: function create() {
      var _this12 = this;
      snacegame.bgmusic.stop();
      gameState.onGame = false;
      gameState.isOver = true;
      try {
        var _window15;
        var _gameOver2 = {
          action: 'gameOver',
          allGameSessionId: sessionID,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          timeStamp: Date.now()
        };
        (_window15 = window) === null || _window15 === void 0 || _window15.parent.postMessage(_gameOver2, "".concat(parentOrigin));
        this.menuBG = this.add.image(game.config.width / 2, game.config.height / 2, "mainBG_".concat(mainMenu.texturePack)).setOrigin(0.5);
        this.menuBG.setDisplaySize(game.config.width, game.config.height);
        this.controlsInfo = this.add.image(310, 70, 'controlsInfo').setOrigin(0.5);
        this.gameOverImg = this.add.image(game.config.width / 2, game.config.height / 2, 'menuGameOver').setOrigin(0.5);
        this.gameOverImg.setDisplaySize(game.config.width, game.config.height);
        this.score = this.add.text(game.config.width / 2 - 150, game.config.height - 100, "".concat(gameState.score), {
          fontFamily: 'Rubik-Regular',
          fontStyle: 'bold',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.scoreTitle = this.add.text(this.score.x, this.score.y - 75, "Счёт", {
          fontFamily: 'Rubik-Regular',
          fontSize: 48,
          fontStyle: 'normal',
          color: '#D0DBD1'
        }).setOrigin(0.5);
        this.btnRestart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 100, 'button');
        this.btnRestart.setOrigin(0.5);
        this.btnRestart.setScale(0.5);
        this.btnClose = this.add.sprite(this.btnRestart.x, this.btnRestart.y + 120, 'button').setScale(0.43);
        this.btnClose.setOrigin(0.5);
        this.selector = this.add.sprite(this.btnRestart.x, this.btnRestart.y, 'selector');
        this.selector.setOrigin(0.5);
        this.selector.setScale(0.44);
        this.btnRestart.setInteractive();
        this.btnClose.setInteractive();
        this.btnRestartText = this.add.text(game.config.width / 2, game.config.height / 2 + 100, "ЗАНОВО", {
          fontFamily: 'Nunito',
          fontSize: '60px',
          fontStyle: 'bold',
          align: 'center',
          color: 'white'
        });
        this.btnRestartText.setOrigin(0.5);
        this.btnCloseText = this.add.text(this.btnClose.x, this.btnClose.y, "ВЫЙТИ", {
          fontFamily: 'Nunito',
          fontSize: '45px',
          fontStyle: 'bold',
          align: 'center',
          color: '#F0516B'
        });
        this.btnCloseText.setOrigin(0.5);
        this.btnRestart.on('pointerdown', this.startGame, this);
        this.btnClose.on('pointerdown', this.exit, this);
        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this);
        document.addEventListener('keydown', function (e) {
          if (e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) {
            _this12.onPressExit();
          }
        });

        // this.input.keyboard.on('keydown-BACKSPACE', ()=>{this.exit()}, this)

        this.saveScore();
        this.loadScore();
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
          fontFamily: 'Nunito',
          fontStyle: 'bold',
          fontSize: '30px',
          fill: '#fff'
        }).setOrigin(0.5);
      } catch (er) {
        var _window16;
        var gameOverError = {
          action: 'gameOverError',
          allGameSessionId: sessionID,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window16 = window) === null || _window16 === void 0 || _window16.parent.postMessage(gameOverError, "".concat(parentOrigin));
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (gameState.isOver == true) {
        if (this.selector.y != this.btnClose.y) {
          this.selector.y = this.btnClose.y;
          this.btnCloseText.setColor('white');
          this.btnRestartText.setColor('#F0516B');
          mainMenu.clickSound.play();
        }
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (gameState.isOver == true) {
        if (this.selector.y != this.btnRestart.y) {
          this.selector.y = this.btnRestart.y;
          this.btnCloseText.setColor('#F0516B');
          this.btnRestartText.setColor('white');
          mainMenu.clickSound.play();
        }
      }
    }
  }, {
    key: "gameToggle",
    value: function gameToggle() {
      if (gameState.isOver == true) {
        if (this.selector.y == this.btnRestart.y) {
          mainMenu.clickSound.play();
          this.startGame();
        } else if (this.selector.y == this.btnClose.y) {
          mainMenu.clickSound.play();
          this.exit();
        }
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      try {
        var _window17;
        gameState.isOver = false;
        gameState.onPause = false;
        gameState.score = 0;
        mainMenu.texturePack = getTexturePack();
        _startGame.gameSessionId = generateUUID();
        _startGame.allGameSessionId = sessionID;
        (_window17 = window) === null || _window17 === void 0 || _window17.parent.postMessage(_startGame, "".concat(parentOrigin));
        this.scene.stop();
        this.scene.start('snakegame');
      } catch (er) {
        var _window18;
        var startGameError = {
          action: 'startGameError',
          allGameSessionId: sessionID,
          gameSessionId: gameId,
          error: er.message,
          timeStamp: Date.now()
        };
        (_window18 = window) === null || _window18 === void 0 || _window18.parent.postMessage(startGameError, "".concat(parentOrigin));
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (gameState.isOver) {
        if (!posted) {
          var _window19;
          var closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
          };
          (_window19 = window) === null || _window19 === void 0 || _window19.parent.postMessage(closeGameSession, "".concat(parentOrigin));
          posted = true;
        }
      }
    }
  }, {
    key: "onPressExit",
    value: function onPressExit() {
      if (gameState.onGame == false) {
        this.exit();
      }
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      this.heighScore = gameState.score;
      this.oldScore = JSON.parse(localStorage.getItem('heighScore_snake'));
      this.heighScore > this.oldScore ? localStorage.setItem('heighScore_snake', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_snake')) {
        this.heigScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100, "".concat(JSON.parse(localStorage.getItem('heighScore_snake'))), {
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
          color: '#D0DBD1'
        }).setOrigin(0.5);
        this.line = this.add.image(game.config.width / 2, game.config.height - 120, 'line').setOrigin(0.5);
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return GameOver;
}(Phaser.Scene);
var gameOver = new GameOver();
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
function getTexturePack() {
  return Math.floor(Math.random() * 3);
}
var gameState = {
  onMenu: false,
  onPause: false,
  isOver: false,
  onGame: false,
  score: 0
};
sessionID = generateUUID();
try {
  var startGameSession = {
    action: 'startGameSession',
    allGameSessionId: sessionID,
    timeStamp: Date.now()
  };
  window.onload = function () {
    var _window20;
    var config = {
      type: Phaser.CANVAS,
      width: 1920,
      height: 1080,
      backgroundColor: '#000',
      parent: "phaser-example",
      scene: [preloader, mainMenu, snacegame, scenePause, gameOver],
      physics: {
        "default": 'arcade'
      },
      scale: {
        mode: Phaser.Scale.FIT
      },
      audio: {
        disableWebAudio: true
      }
    };
    var canvas = document.getElementsByTagName('canvas');
    canvas.outline = 0;
    if (document.referrer) {
      parentOrigin = document.referrer;
      console.log(parentOrigin);
    } else {
      parentOrigin = '*';
    }
    game = new Phaser.Game(config);
    (_window20 = window) === null || _window20 === void 0 || _window20.parent.postMessage(startGameSession, "".concat(parentOrigin));
  };
} catch (er) {
  var _window21;
  var startGameSessionError = {
    action: 'startGameSessionError',
    allGameSessionId: sessionID,
    error: er.message,
    timeStamp: Date.now()
  };
  (_window21 = window) === null || _window21 === void 0 ? void 0 : _window21.parent.postMessage(startGameSessionError, "".concat(parentOrigin));
}