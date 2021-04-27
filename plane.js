class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/fligth.png")
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;

      push();

  rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
     image(this.image,pos.x,pos.y,0,0);

    pop();

    if(setBackground === 13){
      form.greetings_land.position(pos.x,pos.y);
    }
     
//     console.log("x : " + pos.x);
// console.log("y : " + pos.y);
    

       
    }
  };
