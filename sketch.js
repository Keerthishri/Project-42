var iss,hasDocked,dock;
var issImg,dockImg,right,left,up,bg,c,d,l;

function preload(){
  issImg = loadImage("images/iss.png");
  dockImg = loadImage("images/dock.png");
  right = loadImage("images/right.png");
  left = loadImage("images/left.png");
  up = loadImage("images/up.png");
  bg = loadImage("images/spacebg.jpg");
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  iss = createSprite(width/2,height/2);
  iss.addImage(issImg);
  
  c=createSprite(iss.x-70,iss.y+30, 10, 10);
  c.visible = false;
  
  dock = createSprite(random(c.x-200,c.x+200),iss.y+200);
  dock.addImage(dockImg);
  dock.scale = 0.3;

  d=createSprite(dock.x,dock.y,10,10);
  d.visible = false;  
noStroke();
  l=createSprite(235,270,267,3);
  l.shapeColor = "white";
  //l.debug = "true;"
}

function draw() {
  background(bg);  
  drawSprites();
  d.x = dock.x;
  d.y = dock.y-90;

  fill(9, 239, 212);
  textSize(30);
  textFont("Blackadder ITC")
  text("Use Arrow Key to Move!", 95, 250)

  fill(255, 224, 220);
  textSize(30);
  textFont("Curlz MT")
  text("Made By:- V.Keerthishri", 1300, 650)

  if(keyDown("r")){
    dock.x = iss.x;
  }

  if(d.isTouching(c)){
    hasDocked = true;
    fill(233, 39, 247);
    textSize(40);
    textAlign(CENTER);
    textFont("Harrington")
    text("Docking Successful!",dock.x,dock.y+100);
    
    //console.log("sjvhb");
  }

  if(!hasDocked){
    if(keyIsDown(LEFT_ARROW)){
      dock.x -= 3;
      dock.addImage(left);
    }
    if(keyIsDown(UP_ARROW)){
      dock.y -= 3;
      dock.addImage(up);
    }
    if(keyIsDown(RIGHT_ARROW)){
      dock.x += 3;
      dock.addImage(right);
    }
    if(keyDown(DOWN_ARROW)){
      dock.y += 3;
      dock.addImage(up);
    }
  }

  

}