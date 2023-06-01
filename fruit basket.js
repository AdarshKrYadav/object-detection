object=[];
status="";
var fruit_basket="";
function preload(){
    fruit_basket=loadImage("fruit_basket.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object_detactor=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw(){
    image(fruit_basket,0,0,640,420);

}

function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    object_detactor.detect(fruit_basket,gotresult);
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
