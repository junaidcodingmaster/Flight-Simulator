const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player;
var border;
var playerimg;
var ground;
var distance_of_plane_covered = 0;
var height_from_ground = 0;
var setBackground = 0;
var total_distance_of_plane_covered = 0;
var knowVeloicity = 0;
var gameState = 0;
var userName;
var speed_o_meter = 0;





function preload()
{

// loading background images
  backgroundimg_flying_stage_2 = loadImage("images/fly_state_2.png");
  backgroundimg_flying_stage_1 = loadImage("images/flying_stage_1.png");
  backgroundimg_takeoff_stage = loadImage("images/takeoff_stage.png");
  backgroundimg_flying_stage_3 = loadImage("images/fly_state_3.png");
  backgroundimg_flying_stage_4 = loadImage("images/fly_state_4_sea.png");
  backgroundimg_flying_stage_5 = loadImage("images/fly_state_5_sea.png");
  backgroundimg_flying_stage_6 = loadImage("images/fly_state_6_sea.png");
  backgroundimg_flying_stage_7 = loadImage("images/fly_state_7_sea.png");
  backgroundimg_evening_stage = loadImage("images/evening_stage.png");
  Backgroundimg_night_stage = loadImage("images/night_stage.png");
  backgroundimg_morning_stage = loadImage("images/sunrise_stage.png");
  backgroundimg_midday_city_stage = loadImage("images/middy_city_stage.png");
  backgroundimg_midday_city_stage_landling_stage_1 = loadImage("images/middy_city_stage_landing_stage-1.png");
  backgroundimg_midday_city_stage_landling_stage_2 = loadImage("images/middy_city_stage_landing_stage-2.png");
  bagckgroundimg_landling_stage = loadImage("images/landing_stage.png");
  backgroundimg = loadImage("images/background-img.png")


// loading sound effects
plane_up_sound_effect = loadSound("sound-effects/airplane-moving-up-sound-effect.mp3");
plane_flying_sound_effect = loadSound("sound-effects/sonic-speed-sound-effect.mp3");
sonic_speed_sound_effect = loadSound("sound-effects/sonic-speed-sound-effect.mp3");



}
function setup() {
  createCanvas(2000,800);


    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(250,750,600,30);
    plane = new Plane(57,600,10,10);
 
    form = new Form();
    

    
  }
  
  function draw() {
    background(backgroundimg_takeoff_stage);
       Engine.update(engine);

    



      //Game settings
       if(gameState === 0){
        form.display();
        background(135,224,253); 
       }

       if(gameState === 1){
        background(135,224,253); 
        form.display();
       }

       if(gameState === 4){
        background(135,224,253); 
        form.display();
       }

       if(gameState === 2){
        background(135,224,253); 
        form.display();
       }

if(speed_o_meter >= 941){
  speed_o_meter = speed_o_meter - 1;
}


      if(gameState === 3){
        form.display();
        //controls

    if(keyDown(UP_ARROW)){
      Matter.Body.setVelocity(plane.body, {x: 5, y: -10});
      height_from_ground = height_from_ground + 1;
      plane_up_sound_effect.play();
      
    }

    if(keyDown(DOWN_ARROW)){
      Matter.Body.setVelocity(plane.body, {x: 0 , y: 10});
      height_from_ground = height_from_ground - 1;
  
    }

    if(keyDown(RIGHT_ARROW)){
      Matter.Body.setVelocity(plane.body, {x: 10 , y: 0});
      distance_of_plane_covered = distance_of_plane_covered + 1;
      knowVeloicity = knowVeloicity + 1;
      plane_flying_sound_effect.play();
      speed_o_meter = speed_o_meter +1;
      
    }

    if(keyDown(LEFT_ARROW)){
      Matter.Body.setVelocity(plane.body, {x: -10 , y: 0});
      distance_of_plane_covered = distance_of_plane_covered - 1;
      knowVeloicity = knowVeloicity - 1;
      plane_flying_sound_effect.play();
      speed_o_meter = speed_o_meter - 1;

    }

    //speed up keys

 if(keyDown("w")){
      Matter.Body.setVelocity(plane.body, {x: 6 , y: -20});
      height_from_ground = height_from_ground + 2;
      sonic_speed_sound_effect.play();

    }

    if(keyDown("s")){
      Matter.Body.setVelocity(plane.body, {x: -6 , y: 20});
      height_from_ground = height_from_ground + 2;
      sonic_speed_sound_effect.play();
      
    }

       
    if(keyDown("d")){
      Matter.Body.setVelocity(plane.body, {x: 13 , y: 0});
      distance_of_plane_covered = distance_of_plane_covered + 2;
      knowVeloicity = knowVeloicity + 2;
      sonic_speed_sound_effect.play();
      speed_o_meter = speed_o_meter + 2;

      
    }
    if(keyDown("a")){
      Matter.Body.setVelocity(plane.body, {x: -13 , y: 0});
      distance_of_plane_covered = distance_of_plane_covered - 2;
      knowVeloicity = knowVeloicity + 2;
      sonic_speed_sound_effect.play();
      speed_o_meter = speed_o_meter - 2;

    }


     if(keyDown("space")){
      Matter.Body.setVelocity(plane.body, {x: 5 , y: 0});
      distance_of_plane_covered = distance_of_plane_covered + 1;
      knowVeloicity = knowVeloicity + 1;

     }



    // background changing when travel.

    if(height_from_ground >= 1){
      background(backgroundimg_flying_stage_1);
      noFill();
    
      
    }
    
     if(distance_of_plane_covered >= 196){
      Matter.Body.setPosition(plane.body ,{
        x:41,
        y:331
       });
       distance_of_plane_covered = 0;
       setBackground = setBackground + 1;
       total_distance_of_plane_covered = total_distance_of_plane_covered + 1;
     }

if(setBackground >= 1){
  background(backgroundimg_flying_stage_2);
  ground.distroy();
}

if(setBackground >= 2){
  background(backgroundimg_flying_stage_3);

}

if(setBackground >= 3){
  background(backgroundimg_flying_stage_4);
  
}

if(setBackground >= 4){
  background(backgroundimg_flying_stage_5);
  
}

if(setBackground >= 5){
  background(backgroundimg_flying_stage_6);
  
}

if(setBackground >= 6){
  background(backgroundimg_flying_stage_7);
  
}

if(setBackground >= 7){
  background(backgroundimg_evening_stage);
  
}

 if(setBackground >= 8){
   background(Backgroundimg_night_stage);

   }

  if(setBackground >= 9){
    background(backgroundimg_morning_stage);
   
    }

  if(setBackground >= 10){
    background(backgroundimg_midday_city_stage);
     
    }

  if(setBackground >= 11){
    background(backgroundimg_midday_city_stage_landling_stage_1);
       
    }

  if(setBackground >= 12){
    background(backgroundimg_midday_city_stage_landling_stage_2);
         
    }

  if(setBackground >= 13){
    background(bagckgroundimg_landling_stage);

    landling = new Ground(950,777,1900,45);

    noFill();

    fill(118, 118, 118);
    landling.display();

    noFill();
    }




 // display area
   plane.display();
   ground.display();

      }
      

  }
