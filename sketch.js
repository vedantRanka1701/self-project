var cop, copIMG, caught, caughtIMG, sneak, sneakIMG, background1, bullet1

function preload(){
  copIMG = loadAnimation("cop1.png","cop2.png","cop3.png")
  sneakIMG = loadAnimation("sneak1.png","sneak2.png","sneak4.png")
  bendSneakImage = loadImage("sneak3.png")
  caughtIMG = loadImage("caught.png")
  background1 = loadImage("background.jpg")
  bullet1 = loadImage("bullet.png")
}

function setup() {
  createCanvas(800,400);
  
  background2 =  createSprite(800,85)
  background2.velocityX = -5
  background2.addImage(background1)
  background2.x = background2.width/2
  background2.scale = 1.8
  cop = createSprite(200,300,10,10)
  cop.scale = 0.5
  cop.addAnimation("running",copIMG)
  sneak = createSprite(600,300,10,10)
  sneak.scale = 1.8
  sneak.addAnimation("robberRunning",sneakIMG)
  bullet = createSprite(300,253,10,10)
  bullet.addImage(bullet1)
  bullet.scale = 0.03
  bullet.visible = false

  bend = createSprite(600,300,10,10)
  bend.addImage(bendSneakImage)
  bend.scale = 1.8
  bend.visible = false

}

function draw() {
  background("white");
  drawSprites();
  if(keyDown("space")){
    bullet.visible = true
    bullet.velocityX = 8
  }
  if(keyWentDown(DOWN_ARROW)){
    bend.visible = true
    sneak.visible = false
  }
  if(keyWentUp(DOWN_ARROW)){
    sneak.visible = true
    bend.visible= false
  }
  if(background2.x<100){
    background2.x = background2.width/2
  }
}

 // function reset(){
//bullet.x = 300
  //bullet.y = 253
//}