var snow, snowImg;
var snowflake, snowflake1, snowflake2, snowflakeImg;

function preload() {
  snowImg=loadImage("snow1.jpg");
  snowflake1=loadImage("snow4.webp");
  snowflake2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(1000,600);


  
 
}

function draw() {
  background("yellow");  
  drawSprites();


  snow=createSprite(500, 300, 1000, 600);
  snow.addImage(snowImg);
  snow.scale=1.9;
  snowflake=createSprite(550,150,120,120);
  snowflake.addImage(snowflake1);
  snowflake.scale=0.3;
  //snowflake.velocityX=2;

  snowflakeImg=createSprite(350,150,120,120);
  snowflakeImg.addImage(snowflake2);
  snowflakeImg.scale=0.3;
  snowflakeImg.velocityY=3;

 
}


