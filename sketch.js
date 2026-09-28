let testDial = new Dial(true, 200, 50)
testDial.radius = 25
testDial.segments = 8


let testSlider = new Slider("circle", false, 100, 300)
testSlider.smooth = false
testSlider.segments = 6
testSlider.Slength = 200

let testButton = new Button("box", 100, 150)
testButton.width = 200
testButton.height = 50
testButton.fill = [0,30,30]
testButton.stroke = [0,230,180]
testButton.strokeWeight = 2
testButton.text = "INITIALIZE"
testButton.textSize = 20

testButton.render = function(){
  fill(this.fill)
  stroke(this.stroke)
  strokeWeight(this.strokeWeight)
  rect(this.x, this.y, this.width, this.height)
  
  textAlign(CENTER,CENTER)
  noStroke()
  fill(255)
  textSize(this.textSize)
  text(this.text,this.x, this.y, this.width, this.height)
}

testButton.onHoverBegin = function(){
  cursor(HAND)
}

testButton.onPressBegin = function(){
  this.pFill = this.fill
  testButton.fill = [80,130,130]
}

testButton.onPressEnd = function(){
  this.fill = this.pFill
}

testButton.onHoverEnd = function(){
  cursor()
}

function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background(0,10,10);
  
  noStroke()
  fill(255)
  
  textSize(10)
  textAlign(LEFT,TOP)
  text("button Pressed: " + testButton.pressed, 500,10)
  text("button Hovered: " + testButton.hover, 500,20)
  text("slider value: " + round(testSlider.value), 500,40)
  text("dial value: " + round(testDial.value), 500,50)
  
  
  
}