object=[];
status="";
var bottle="";
function preload(){
    bottle=loadImage("bottles.webp");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object_detactor=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw(){
    image(desk,0,0,640,420);

}

function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    object_detactor.detect(bottle,gotresult);
}

function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        object=result;
    }
}
