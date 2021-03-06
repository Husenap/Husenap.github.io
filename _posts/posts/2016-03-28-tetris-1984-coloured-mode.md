---
layout: post
thumb: "/static/img/projects/tetris1984/thumbcolor.png"
title: "Tetris 1984 Coloured Mode"
tag: "post"
topics:
- JavaScript
- ASCII Game
- Old School
date: 2016-03-28 12:56:00 +0200
description: Clone of the Tetris 1984 version, now with colour!
permalink: /projects/:year/:month/:day/:title/
---

## Why?

About a year ago, a friend of mine asked if I could add [ghost pieces](http://tetris.wikia.com/wiki/Ghost_piece) to my Tetris 1984 verison.
I said no because I couldn't be arsed to do it.
But since I already have a working function for [hard drops](http://tetris.wikia.com/wiki/Hard_Drop), I decided that I would add support for both ghost and coloured pieces.

## What's new

### Coloured pieces

Since I'm using text to draw the game, adding colour was really easy. I just used jQuery to change the css colour of the text.

{% highlight javascript linenos %}
this.curr.html("[]");					// Draw the block
if(Settings.COLOR){						// If settings allow colours
	this.curr.css("color", this.color);	// Set the colour through jQuery
}
{% endhighlight %}

### Ghost Pieces

Adding support for the ghost piece was done with this simple function.

{% highlight javascript linenos %}
Piece.prototype.predictGhost = function(){
	while(true){
		this.collision();		// Check if the piece has collided
		if(this.locked)break;	// If it has collided then this.locked will be true
		this.pos.y++;			// Keep moving the piece down
		this.updateBlocks();	// Update the positions of the blocks
	}
	_.forEach(this.blocks, function(b){
		b.draw(0.5);			// Draw all the blocks with half the opacity
	});
}
{% endhighlight %}


## Links

[Play Tetris 1984 With Colour]({{ "/static/demos/tetris1984/?color=true&ghost=true" | prepend: site.baseurl }}){:.button .lift-3 .rippleParent}
[Source Code](https://github.com/Husenap/Husenap.github.io/tree/master/static/demos/tetris1984){:.button .lift-3 .rippleParent}
[Read about the project](http://husenap.github.io/projects/2016/03/27/tetris-1984/){:.button .lift-3 .rippleParent}

