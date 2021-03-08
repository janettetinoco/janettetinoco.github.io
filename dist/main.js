/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeithGame)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n/* harmony import */ var _hearts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hearts */ \"./src/hearts.js\");\n/* harmony import */ var _user_windows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_windows */ \"./src/user_windows.js\");\n\n\n\n\n\nclass KeithGame {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.threats = [];\n    this.obstacle = [];\n    this.frame = 0;\n    this.eventsHandler();\n    this.restart();\n    this.x_coord = 800;\n    this.score = 0;\n  }\n\n  animate() {\n    if (this.score < 0) {\n      alert(\"GAME OVER\");\n      this.running = false;\n    }\n\n    this.level.animate(this.ctx);\n    this.player.animate(this.ctx, this.frame);\n    this.frame++; //tets\n\n    this.animateObstacles(); // this.heart.animate(this.ctx);\n    //\n\n    let that = this.obstacle;\n\n    if (this.running) {\n      //this needs to happen as you refresh the page\n      if (this.frame % 450 === 0 && this.obstacle.length < 3 || this.frame === 4) that.push(new _obstacles__WEBPACK_IMPORTED_MODULE_2__.Dog(this.dimensions));\n      if (this.frame % 700 === 0 && this.player.y < 200 || this.frame === 10) that.push(new _obstacles__WEBPACK_IMPORTED_MODULE_2__.Flyer(this.dimensions));\n      if (this.obstacle.length < 2 && this.frame % 600 === 0 && !this.obstacle.some(ele => ele instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.People)) that.push(new _obstacles__WEBPACK_IMPORTED_MODULE_2__.People(this.dimensions));\n      if (this.obstacle.length === 1 && this.frame % 50 === 0 && !this.obstacle.some(ele => ele instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Skater)) that.push(new _obstacles__WEBPACK_IMPORTED_MODULE_2__.Skater(this.dimensions));\n      if (!this.obstacle.some(ele => ele instanceof _hearts__WEBPACK_IMPORTED_MODULE_3__.default) && this.obstacle.length > 1) that.push(new _hearts__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions));\n      if (!this.obstacle.some(ele => ele instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Toaster)) that.push(new _obstacles__WEBPACK_IMPORTED_MODULE_2__.Toaster(this.dimensions));\n\n      if (this.player.x > 300) {\n        let subway = new Image();\n        subway.src = 'css/images/subway.png';\n        this.ctx.drawImage(subway, this.x_coord, 3000, 275, 275);\n        this.x_coord -= 0.2;\n      }\n\n      this.checkCollison();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  animateObstacles() {\n    for (let i = 0; i < this.obstacle.length; i++) {\n      this.obstacle[i].animate(this.ctx);\n\n      if (this.obstacle[i].x + this.obstacle[i].width < 0) {\n        this.obstacle.splice(i, 1);\n      }\n    }\n  }\n\n  restart() {\n    this.running = true; //when game is over change to false\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n    this.frame = 0;\n    this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  spaceDown() {\n    this.player.speedUp();\n  }\n\n  arrowUpJump() {\n    this.player.jump();\n  }\n\n  arrowGoBack() {\n    if (this.running) {\n      this.player.faceLeft();\n    }\n  }\n\n  checkCollison() {\n    let bounds = this.player.bounds();\n\n    for (let i = 0; i < this.obstacle.length; i++) {\n      let obs = this.obstacle[i];\n      if (obs instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Dog && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 150) this.score -= 5;\n      if (obs instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Flyer && obs.x + 10 < bounds.right && bounds.left < obs.x && obs.y + obs.height - 5 < bounds.top) this.score -= 5;\n      if (obs instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.People && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 150) this.score -= 5;\n      if (obs instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Skater && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 160) this.score -= 5;\n      if (obs instanceof _obstacles__WEBPACK_IMPORTED_MODULE_2__.Toaster && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 160) this.score -= 5;\n\n      if (obs instanceof _hearts__WEBPACK_IMPORTED_MODULE_3__.default && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 100) {\n        this.score === 0 ? this.score = 100 : this.score += 100;\n        this.obstacle.splice(i, 1);\n      }\n    }\n\n    let scoreShown;\n    this.score < 0 ? scoreShown = 0 : scoreShown = this.score;\n    _user_windows__WEBPACK_IMPORTED_MODULE_4__.scoreCont.innerHTML = scoreShown;\n  }\n\n  eventsHandler() {\n    this.spaceBarHandler = this.spaceDown.bind(this);\n    this.arrowUpHandler = this.arrowUpJump.bind(this);\n    this.arrowLeftHandler = this.arrowGoBack.bind(this);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === 'Space') {\n        this.spaceBarHandler();\n      }\n\n      if (e.code === 'ArrowUp') {\n        this.arrowUpHandler();\n      }\n\n      if (e.code === 'ArrowLeft') {\n        this.arrowLeftHandler();\n      }\n    });\n    window.addEventListener(\"keyup\", e => {\n      this.player.velocity = .4;\n    });\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/game.js?");

/***/ }),

/***/ "./src/hearts.js":
/*!***********************!*\
  !*** ./src/hearts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hearts)\n/* harmony export */ });\nclass Hearts {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height;\n    this.width = 60;\n    this.height = 50;\n    this.velocity = 2;\n  }\n\n  drawHeart(ctx) {\n    const dog = new Image();\n    dog.src = 'css/images/heart.png'; // ctx.drawImage(dog, this.x, this.y, 60, 50)\n    // ctx.drawImage(dog, this.x+60, this.y, 55, 45)\n\n    this.drawFrame(ctx, dog, this.x, this.y - 100, this.width, this.height); // this.drawFrame(ctx,dog, this.x+60, this.y, 55, 45)\n    // ctx.fillStyle = \"white\";\n    // ctx.fillRect(this.x, this.y, 30,30)\n  }\n\n  drawFrame(ctx, img, frameX, frameY, canvasX, canvasY) {\n    ctx.drawImage(img, frameX, frameY, canvasX, canvasY);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawHeart(ctx);\n  }\n\n  move() {\n    this.x -= this.velocity;\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/hearts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst canvas = document.getElementById('game-board');\nnew _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n\n//# sourceURL=webpack://Keith-Daring/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\nclass Level {\n  constructor(dimensions, context) {\n    this.dimensions = dimensions;\n    this.canvasWidth = this.dimensions.width; // this.x=0;\n    // this.drawBase(context);\n    // this.drawDots(context);\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"#ffd24d\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.drawBase(ctx);\n    this.drawDots(ctx);\n  }\n\n  drawBase(context) {\n    context.lineWidth = 3;\n    context.fillStyle = \"black\";\n    context.fillRect(0, 475, this.canvasWidth, 7);\n  }\n\n  drawDots(context) {\n    context.fillStyle = \"black\";\n\n    for (let i = 1; i < this.canvasWidth; i = i + 40) {\n      context.fillRect(i + 25, 475, 10, 9);\n      context.fillRect(i, 490, 10, 9);\n      context.fillRect(i + 28, 505, 10, 9);\n      context.fillRect(i + 13, 518, 10, 8);\n      context.fillRect(i + 28, 530, 10, 9);\n      context.fillRect(i, 545, 10, 9);\n    } // for(let i = 1; i < 900 ; i= i+40){\n    //     context.fillRect(this.x + i + 25 , 475, 10, 9)\n    //     context.fillRect(this.x + i, 490, 10, 9)\n    //     context.fillRect(this.x + i + 28, 505, 10, 9)\n    //     context.fillRect(this.x + i + 13, 518, 10, 8)\n    //     context.fillRect(this.x + i + 28, 530, 10, 9)\n    //     context.fillRect(this.x + i, 545, 10, 9)\n    // }\n    // for (let i = 1; i < 900; i = i + 40) {\n    //     context.fillRect(this.canvasWidth + this.x + i + 25, 475, 10, 9)\n    //     context.fillRect(this.canvasWidth + this.x + i, 490, 10, 9)\n    //     context.fillRect(this.canvasWidth + this.x + i + 28, 505, 10, 9)\n    //     context.fillRect(this.canvasWidth + this.x + i + 13, 518, 10, 8)\n    //     context.fillRect(this.canvasWidth + this.x + i + 28, 530, 10, 9)\n    //     context.fillRect(this.canvasWidth + this.x + i, 545, 10, 9)\n    // }\n\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx); // if (this.x === -1 * this.canvasWidth) this.x = 0;\n    // this.x -= 0.2\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/level.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dog\": () => (/* binding */ Dog),\n/* harmony export */   \"Flyer\": () => (/* binding */ Flyer),\n/* harmony export */   \"People\": () => (/* binding */ People),\n/* harmony export */   \"Skater\": () => (/* binding */ Skater),\n/* harmony export */   \"Toaster\": () => (/* binding */ Toaster)\n/* harmony export */ });\nclass Obstacles {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height;\n  }\n\n  move() {\n    this.x -= this.velocity;\n  }\n\n  checkCollison() {\n    if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x + 30) {\n      alert(\"youre hit\");\n    }\n  }\n\n}\n\nclass Dog extends Obstacles {\n  constructor(dimensions) {\n    super(dimensions);\n    this.height = 100;\n    this.width = 110;\n    this.velocity = Math.floor(Math.random() * 2) + 1;\n  }\n\n  drawDog(ctx) {\n    const dog = new Image();\n    dog.src = 'css/images/dog_left.png';\n    ctx.clearRect(dog, this.x, this.y - 150, this.width, this.height);\n    ctx.drawImage(dog, this.x, this.y - 150, this.width, this.height); // ctx.fillStyle = \"white\";\n    // ctx.fillRect(this.x, this.y, 30,30)\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawDog(ctx);\n  }\n\n}\n\nclass Flyer extends Obstacles {\n  constructor(dimensions) {\n    super(dimensions);\n    this.width = 120;\n    this.height = 110;\n    this.velocity = Math.floor(Math.random() * 3) + 1;\n  }\n\n  drawFlyer(ctx) {\n    const flyer = new Image();\n    flyer.src = 'css/images/flyer.png';\n    ctx.clearRect(flyer, this.x, this.y - 550, this.width, this.height);\n    ctx.drawImage(flyer, this.x, this.y - 550, this.width, this.height);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawFlyer(ctx);\n  }\n\n}\n\nclass People extends Obstacles {\n  constructor(dimensions) {\n    super(dimensions);\n    this.height = 150;\n    this.width = 220;\n    this.velocity = Math.random() * 3 + 1;\n  }\n\n  drawDog(ctx) {\n    const dog = new Image();\n    dog.src = 'css/images/dancers.png';\n    ctx.clearRect(dog, this.x, this.y - 210, this.width, this.height);\n    ctx.drawImage(dog, this.x, this.y - 210, this.width, this.height);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawDog(ctx);\n  }\n\n}\n\nclass Skater extends Obstacles {\n  constructor(dimensions) {\n    super(dimensions);\n    this.height = 100;\n    this.width = 130;\n    this.velocity = 4;\n  }\n\n  drawSkater(ctx) {\n    const skater = new Image();\n    skater.src = 'css/images/skater.png';\n    ctx.clearRect(skater, this.x, this.y - 160, this.width, this.height);\n    ctx.drawImage(skater, this.x, this.y - 160, this.width, this.height);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawSkater(ctx);\n  }\n\n}\n\nclass Toaster extends Obstacles {\n  constructor(dimensions) {\n    super(dimensions);\n    this.height = 100;\n    this.width = 130;\n    this.counter = 0;\n  }\n\n  drawSkater(ctx) {\n    const toaster = new Image();\n    toaster.src = 'css/images/toaster.png';\n    ctx.clearRect(toaster, this.x, this.y - 480, this.width, this.height);\n    ctx.drawImage(toaster, this.x, this.y - 480, this.width, this.height);\n  }\n\n  move() {\n    var increase = Math.PI * 2 / 100;\n    this.x -= 1;\n    this.y += Math.sin(this.counter / 2);\n    this.counter += increase;\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawSkater(ctx);\n  }\n\n}\n\n\n\n//# sourceURL=webpack://Keith-Daring/./src/obstacles.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nconst CONSTANTS = {\n  PLAYER_W: 90,\n  PLAYER_H: 145,\n  GRAVITY: 0.2\n};\nclass Player {\n  constructor(dimensions) {\n    this.velocity = 0.4;\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width / 40;\n    this.y = this.dimensions.height * .45;\n    this.i = 0;\n    this.height = 0;\n  }\n\n  drawPlayer(ctx, frame) {\n    const player = new Image();\n    const anim = ['css/images/small.png', 'css/images/medium_walk.png', 'css/images/larger.png', 'css/images/medium_walk.png'];\n    if (frame % 10 === 0) this.i = (this.i + 1) % 4;\n    player.src = anim[this.i];\n    ctx.drawImage(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H); //\n    // if (score < 200) player.src = 'css/images/small.png';\n    // if (score >= 200 && score < 400) player.src = 'css/images/medium.png';\n    // if (score >= 400) player.src = 'css/images/larger.png';\n    //\n    // if (this.direction === 'right') player.src = 'css/images/small.png';\n    // if (this.direction === 'left') player.src = 'css/images/small.png';\n    // console.log(this.x)\n    // console.log(this.y)\n    // ctx.clearRect(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H);\n    // ctx.drawImage(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H);\n    // player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))\n    // this.loadPlayer(ctx);\n    // debugger\n    // ctx.fillStyle = \"black\";\n    // ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)\n  }\n\n  animate(ctx, frame) {\n    // console.log(\"hello\")\n    this.move();\n    this.drawPlayer(ctx, frame);\n  } // loadPlayer(ctx){\n  //     const player = new Image();\n  //     player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))\n  //     player.src = 'src/images/player.png';\n  // }\n\n\n  move() {\n    this.x += this.velocity;\n    this.y -= this.height;\n\n    if (this.y - this.height < 335) {\n      this.height -= CONSTANTS.GRAVITY;\n    } else {\n      this.height = 0;\n    }\n  }\n\n  speedUp() {\n    this.velocity += 0.6;\n  }\n\n  jump() {\n    this.height = 5;\n  }\n\n  faceLeft() {\n    this.velocity = -0.1;\n  }\n\n  bounds() {\n    return {\n      left: this.x + 10,\n      right: this.x + CONSTANTS.PLAYER_W - 10,\n      top: this.y,\n      bottom: this.y + CONSTANTS.PLAYER_H\n    };\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/player.js?");

/***/ }),

/***/ "./src/user_windows.js":
/*!*****************************!*\
  !*** ./src/user_windows.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"introScreen\": () => (/* binding */ introScreen),\n/* harmony export */   \"scoreCont\": () => (/* binding */ scoreCont)\n/* harmony export */ });\nconst introScreen = document.querySelector('.game-info');\nconst scoreCont = document.querySelector('#score');\n\n//# sourceURL=webpack://Keith-Daring/./src/user_windows.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;