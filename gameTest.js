function setup() {

  createCanvas(1600, 800);
  background(0);
  noStroke();

  var xpos=0;
  var ypos=0;
  var xLength=width/random(4, 6);
  var yLength=height/random(4, 6);
  var sector=[];

  for(x=xLength; x<=width-xLength; x+=xLength){
    stroke(255, 50);
    line(x, 0, x, height);
  }

  for(y=yLength; y<=width-yLength; y+=yLength){
    stroke(255, 50);
    line(0, y, width, y);
  }

  // if()

  // var gridSize = 35;
  //
  // for (var x = gridSize; x <= width - gridSize; x += gridSize) {
  //   for (var y = gridSize; y <= height - gridSize; y += gridSize) {
  //     noStroke();
  //     fill(255);
  //     rect(x-1, y-1, 3, 3);
  //     stroke(255, 50);
  //     line(x, y, width/2, height/2);
  //   }
  // }

}
