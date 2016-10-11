var numberOfBalls = 100;
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numberOfBalls; i++) {
    balls[i] = new Ball(0,random(height), random(20,40), color(random(255),random(255),random(255)),random(8),random(15),random(10));
  }

  //ball = new Ball(100,100,30,color(100,100,255),5);

}

function draw() {
  background(255, 255, 0);
  noStroke();

  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    balls[i].detectEdges();
    balls[i].collide(balls);
  }
}



function Ball(x, y, d, c, speed,xdirection,ydirection) {
  this.x = x;
  this.y = y;
  this.d = d;
  this.c = c;
  this.speed = speed;
  this.xdirection=xdirection;
  this.ydirection=ydirection;

  this.display = function() {
    fill(this.c);
    ellipse(this.x, this.y, this.d, this.d);
  }
  this.move = function() {
    this.x = this.x + this.speed;
  }
  this.detectEdges=function(){
    if(this.x>width || this.x<0){
      this.speed=this.speed*-1;
    }
        if(this.y>height || this.y<0){
      this.speed=this.speed*-1;
  }
}
this.collide =function(other){
  var collide = dist(this.x,this.y,other.x,other.y);
  if(collide<(this.d/2)+(other.d/2)){
  this.speed=this.speed*-1;
}else{
  return false;
}
}
}

//  for(var i=0; i<array.length; i++){
//    text("array index is:["+i+"]is: " +array[i],100,(i*65)+100);

//function mousePressed(){
//  array.push(round(random(-200,200)));

//function keyPressed(){
//  array.splice(array.length-1,1);