var response,responseJSON;
var datetime;
var time,time2;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var s1=0,s2,s3,s4,s5,s6,s7,s8,s9;
function preload(){
    s2=loadSound("a1.mp3");
}
function setup(){
    frameRate(2);
    createCanvas(1365,620);
}
function draw(){
    background("red");
    textSize(40);
    fill("yellow");
    text("India",10,70)
    textSize(280);
    text(a4+":"+a5+":"+a6,0,550);
    text(a3+":"+a2+":"+a1,0,300);
    time1();
}
async function time1(){
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJSON = await response.json();

    datetime = responseJSON.datetime;
    //alert(datetime);
    time=datetime.slice(11,19);
    a4=datetime.slice(11,13);
    a5=datetime.slice(14,16);
    a6=datetime.slice(17,19);
    a1=datetime.slice(0,4);
    a2=datetime.slice(5,7);
    a3=datetime.slice(8,10);
}