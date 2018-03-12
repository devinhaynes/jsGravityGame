var myObject;
var tar;
var force=grid();

function setup(){
  createCanvas(1600,800);
  background(51);
  noStroke();

  myObject = new myObject();
  tar = new target();
}

function draw(){
  background(51);

  var xLength=width/4;
  var yLength=height/4;

  for(x=xLength; x<=width-xLength; x+=xLength){
    stroke(255, 50);
    line(x, 0, x, height);
  }

  for(y=yLength; y<=width-yLength; y+=yLength){
    stroke(255, 50);
    line(0, y, width, y);
  }

  myObject.show();
  myObject.update();
  myObject.gravity(force);
  tar.show();
}

function myObject(){
  this.x=0;
  this.y=0;
  this.sizex=10;
  this.sizey=10;
  this.xspeed=0;
  this.yspeed=0;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, this.sizex, this.sizey);
  }

  this.dir = function(x, y){
    this.xspeed=x;
    this.yspeed=y;
  }

  this.update = function(){
    this.x=this.x + this.xspeed;
    this.y=this.y + this.yspeed;

    this.x=constrain(this.x, this.sizex, width-this.sizex);
    this.y=constrain(this.y, this.sizey, height-this.sizey);
  }

  this.gravity = function(x){
    this.xspeed = this.xspeed + random(-x, x);
    this.yspeed = this.yspeed + random(-x, x);
  }

  // this.endGame = function(){
  //   this.x=0;
  //   this.y=0;
  //   this.xspeed=0;
  //   this.yspeed=0;
  // }
}

function grid(){
  this.sector=0;
  this.sectorList=[];

  for(i=1; i <= 10; i++){
    this.sectorList.push(i);
  }

  return 1;

}

function target(){
  this.x=0;
  this.y=0;
  this.sizex=20;
  this.sizey=20;

  this.show = function(){
    fill(180);
    ellipse(width/2, height/2, this.sizex, this.sizey);
    this.x=constrain(width-this.sizex);
    this.y=constrain(height-this.sizey);
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    myObject.dir(0, -2);
  } else if(keyCode === DOWN_ARROW){
    myObject.dir(0, 2);
  } else if(keyCode === RIGHT_ARROW){
    myObject.dir(2, 0);
  } else if(keyCode === LEFT_ARROW){
    myObject.dir(-2, 0);
  } else if (keyCode === 32){
    myObject.dir(0, 0);
  }
}
