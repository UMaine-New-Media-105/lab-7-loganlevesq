let arrayOfColors = ["magenta", "cyan", "yellow", "purple"]
let offset;
function setup() {
  createCanvas(400, 400);
  offset = 25
  noLoop()
}

function draw() {
  background(220);
  for(let numOfRows=0; numOfRows < 20; numOfRows++){
    for(let numOfCols=0; numOfCols < 20; numOfCols++) {
      drawSprite (numOfRows * offset,numOfCols *offset,random(arrayOfColors))
      
      
    }
      
    
    
  }
}
function drawSprite (x,y,color) {
 push()
  fill(color)
  ellipse(x,y,30)
  pop()
}
