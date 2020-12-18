var wall,car;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);

  wall=createSprite(750,200,75,200);
  wall.shapeColor=(80,80,80);
  
  Car=createSprite(20,200,20,20);
  //Car.debug=true;
  Car.shapeColor="white";

  speed=random(55,90);
  weight=random(400,1500);

  Car.velocityX= speed;
}

function draw() {
  background(0,0,255);
  
  deformation=(0.5 * weight * speed * speed)/22500;
  if (Car.x - wall.x<= Car.width/2 + wall.width/2 && wall.x - Car.x <= Car.width/2 + wall.width/2)
    {
      Car.velocityX=0;
      if(deformation<100)
      {
        Car.shapeColor="green";
      } else if (deformation >= 100 && deformation <= 180)
      {
        Car.shapeColor="yellow";
      } else if (deformation > 180)
      {
        Car.shapeColor="red";
      }
    }
  
  drawSprites();
}