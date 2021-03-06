'use strict';

define([
	"settings"
], function(Settings){

	var Block = function(t){
		this.tiles = t;
		this.pos = {};
		this.relpos = {};
		this.curr = null;
	}

	Block.prototype.update = function(newPos){
		this.exactUpdate({x:newPos.x+this.relpos.x, y:newPos.y+this.relpos.y});
	}
	Block.prototype.exactUpdate = function(newPos){
		this.pos = newPos;

		if(this.tiles[this.pos.x]!=undefined &&
			this.tiles[this.pos.x][this.pos.y]!=undefined) {

			this.curr = this.tiles[this.pos.x][this.pos.y];
		}else{
			this.curr = null;
		}
	}
	Block.prototype.draw = function(alpha){
		if(this.curr){
			this.curr.html("[]");
			if(Settings.COLOR){
				this.curr.css("color", this.color);
				if(alpha)
					this.curr.css("opacity", alpha);
				else
					this.curr.css("opacity", 1);
			}
		}
	}
	Block.prototype.rotate = function(cw){
		if(cw){
			//Clock-Wise Rotation
			var temp = this.relpos.y;
			this.relpos.y = this.relpos.x;
			this.relpos.x = -temp;
		}else{
			//Counter-Clock-Wise Rotation
			var temp = this.relpos.y;
			this.relpos.y = -this.relpos.x;
			this.relpos.x = temp;
		}
	}
	Block.prototype.predictRotation = function(cw, origin){
		var tempPos = {};
		if(cw){
			//Clock-Wise Rotation
			tempPos = {x: origin.x-this.relpos.y, y: origin.y+this.relpos.x};
		}else{
			//Counter-Clock-Wise Rotation
			tempPos = {x: origin.x+this.relpos.y, y: origin.y-this.relpos.x};
		}
		if(this.tiles[tempPos.x] != undefined &&
			this.tiles[tempPos.x][tempPos.y] != undefined){
			return (this.tiles[tempPos.x][tempPos.y].attr('solid') != "true");
		}
		return true;
	}

	return Block;
});
