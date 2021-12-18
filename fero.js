class fero {
	constructor(x, y) {
	  var options = {
		'density':30,
		'friction': 1.0,
		'restitution':0.4
	  };
	  this.body = Bodies.rectangle(x, y, 40, 60, options);
	  this.width = 40;
	  this.height = 60;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  strokeWeight(3);
	  stroke(104,31,31)
	  fill(90,18,18)
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };