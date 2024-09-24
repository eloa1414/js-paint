function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    
    stroke("blue")
    fill( "#2196F3")
    
    // console.log(mouseIsPressed);
    
     if(mouseIsPressed){
        rect(mouseX, mouseY, 20, 35);
     }
    
  }