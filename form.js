class Form {

    constructor() {
        this.title = createElement('h1');
        this.button = createButton('Play');
        this.next = createButton("Next");
        this.welcome = createElement("h1");
        this.para = createElement("p");
        this.input = createInput();
        this.output = createElement("h1");
        this.guid = createElement("h2");
        this.guid1 = createElement("h2");
        this.guid2 = createElement("h2");
        this.guid3 = createElement("h2");
        this.guid4 = createElement("h3");
        this.guid5 = createElement("h3");
        this.greetings_land = createElement("h3");

        // meters
        this.distance = createElement("h3"); 
        this.height = createElement("h3");
        this.country = createElement("h3");
        this.distance_covered = createElement("h3");
        this.speed = createElement("h3");

        //credies and play again
        this.logo = createElement("h1");
        this.credies = createElement("h2");
    }
    
    display() { 
        userName = this.input.value();
        

push();
        this.title.html("Flight Simulator");
        this.title.position(675,150);
        this.button.position(990,500);
        this.next.position(1700,660);
        this.input.position(675,400);


        this.next.hide();

        this.input.hide();

        this.button.mousePressed(()=>{
            this.button.hide();
            this.title.hide();
            



            gameState = 1;
        });

        this.next.mousePressed(()=>{
            gameState = gameState + 1;
        });

        if(gameState === 1){
            this.next.show();

         this.welcome.html("Flight Simulator");
         this.welcome.position(675,50);

         this.para.html("Please enter your name.");
         this.para.position(675,250);
         
         
        this.input.show();

        

        }

if(gameState === 2){
this.input.hide();
this.para.hide();
this.welcome.hide();
this.next.show();

    this.output.html("welcome " + userName);
    this.output.position(550,200);
    
}

if(gameState === 3){
    this.next.hide();
    this.output.hide();

    this.guid.html("Ready to take-off " + userName +"<br>" + "</br>" + "press up arrow button.");
    this.guid.position(400,500);


    this.distance.html("Distance from which country" + "<br>" + "<br>" + "airport passed : " + distance_of_plane_covered);
    this.distance.position(50,10);

    this.height.html("Height from ground : " + height_from_ground);
    this.height.position(400,10);

    this.country.html("Countrys you travel : " + total_distance_of_plane_covered);
    this.country.position(650,10);

    this.distance_covered.html("distance you travelled : " + knowVeloicity                  );
    this.distance_covered.position(900,10);

    this.speed.html("speed : " + speed_o_meter + "km/h");
    this.speed.position(1200,10)

}
    
if(keyDown(UP_ARROW)){
this.guid.hide();

this.guid1.html("Press right arrow button ");
this.guid1.position(675,600);
}

if(setBackground >= 1){
    this.guid1.hide();
}

if(setBackground >= 1){
    this.distance.style("color" , "black");
    this.country.style("color" , "black");
    this.distance_covered.style("color" , "black");
    this.height.style("color" , "black");
    this.speed.style("color" , "black");

}

if(setBackground >= 8){
    this.distance.style("color" , "white");
    this.country.style("color" , "white");
    this.distance_covered.style("color" , "white");
    this.height.style("color" , "white");
    this.speed.style("color" , "white");
}

if(setBackground >= 10){
    this.distance.style("color" , "black");
    this.country.style("color" , "black");
    this.distance_covered.style("color" , "black");
    this.height.style("color" , "black");
    this.speed.style("color" , "black");
}

if(setBackground >= 5){
    this.guid2.html("!!! AERLT !!!" +"<br>" + "Fog is coming please go slowly." + "</br>" + "press spacebar to go slowly");
    this.guid2.position(1000,600);
    this.guid2.style("color" , "red")

}
if(setBackground >= 7){
this.guid2.hide();

}

if(setBackground >= 10){
    this.guid5.html("!! AERLT !!" + "<br>" + " Go slowly for landling." + "</br>" + "press spacebar to go slowly");
    this.guid5.position(1000,600);

}

if(setBackground >= 9){
    this.guid4.html("connecting to nearest airpoart...");
    this.guid4.position(1600,5);
    this.guid4.style("color" , "black");

}

if(setBackground >= 11){
    this.guid4.html("Flight Simulator-51243 airport is connected");

}

if(setBackground >= 12){
    this.guid4.html("asking to clear the airport...");
    this.guid5.hide();

}

if(setBackground >= 13){
    this.guid4.html("This is Flight Simulator-51243 airport head" + "<br>" + "the airport is cleared" + "</br>" + "you can land safely.");

    this.greetings_land.html("tochdown");

    this.greetings_land.style("color" , "black");
    this.next.show();

}

if(keyDown("enter")){
    setBackground = 13;
}

if(gameState === 4){
    this.next.show();
    this.guid.hide();
    this.guid1.hide();
    this.guid2.hide();
    this.guid3.hide();
    this.guid4.hide();
    this.guid5.hide();
    this.greetings_land.hide();
    this.speed.hide();
    this.distance.hide();
    this.country.hide();
    this.distance_covered.hide();
    this.height.hide();

    this.logo.html("Flight Simulator");
    this.logo.position(640,150);
    this.logo.style("font-size" , 300)
    

    this.credies.html("This game is made by Junaid");
    this.credies.position(700,500);

this.next.hide();
}





        pop();
    }
}