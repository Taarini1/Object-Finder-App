img="";
Status=""
function preload(){




}

function setup(){
canvas=createCanvas(450,200);
canvas.position(460,450);
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Objects are being detected";
}


function modelLoaded(){

objectDetector.detect(img,gotResults);
console.log("Model Loaded");
Status=true;
}

function gotResults(error,results){
if(error){console.log(error)};
if(results){
    console.log(results);




}


}

function draw(){
    image(img,0,0,750,100);
}