precision mediump float;

attribute vec2 p;

void main(){
	gl_Position = vec4(p, 0, 1);
}
