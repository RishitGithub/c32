const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour;

function preload() {

    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(15);
    if(hour>=12){
        text("time" + hour%12 + "pm",50,200);
    }else if(hour===0){
        text("time" + hour%12 + "pm",100,200);
    }else{
        text("time" + hour%12 + "am",50,200);
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format

    var resJson = await response.json();
    console.log(resJson)
    var time = resJson.datetime
    // write code slice the datetime
    console.log(time)
     hour = time.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>= 4 && hour<=6){
      bg = "sunrise1.png"      
}else if (hour>=6 && hour<=8){
     bg = "sunrise2.png"
}else if (hour>=8 && hour<=11){
    bg = "sunrise3.png"
}else if (hour>=11 && hour<=13){
    bg = "sunrise4.png"
}else if (hour>=13 && hour<=15){
    bg = "sunrise5.png"
}else if (hour>=15 && hour<=17){
    bg = "sunrise6.png"
}else if (hour>=17 && hour<=18){
    bg = "sunset7.png"
}else if (hour>=18 && hour<=20){
    bg = "sunset8.png"
}else if (hour>=20 && hour<=22){
    bg = "sunset9.png"
}else if (hour>=22 && hour<=23){
    bg = "sunset10.png"
}else if (hour>=0 && hour<=2){
    bg = "sunset11.png"
}else if (hour>=2 && hour<=4){
    bg = "sunset12.png"
}

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
