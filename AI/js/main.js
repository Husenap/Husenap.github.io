'use strict';
console.log("main.js");

define([
	"game",
], function(Game){

	var game = new Game();

	function update(){
		game.update();
	}

	function draw(){
		ctx.save();
		ctx.fillRect(0, 0, ctx.w, ctx.h);
		game.draw();
		ctx.restore();
	}

	(function loop(){
		update();
		draw();
		requestAnimationFrame(loop);
	})();

});
