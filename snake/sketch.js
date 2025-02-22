let message = "행복한새해가되시길바래요";

let snow1Y = 0;
let snow2Y = 0;
let snow3Y = 0;

let snow1;
let snow2;
let snow3;


function preload(){
  snow1 = loadImage("snow1.png");
  snow2 = loadImage("snow2.png");
  snow3 = loadImage("snow3.png");
}


let input;

function setup() {
  createCanvas(400, 600);

  input = createInput();
  input.input(typing);
  
  textFont("Black Han Sans");
  getParam();
}

function typing(){
  message = input.value();
  setParam();
}

function setParam(){
  let url = new URL(location.href);
  url.searchParams.set("message",message);
  history.pushState({},null,url);
}

function getParam(){
  let url = new URL(location.href);
  message = url.searchParams.get("message");
  if(message == null){
    message = "행복한새해가되시길바래요";
  }
}

function draw() {
  background("#66b8d0");
  stroke("#66b8d0");
  
  function snow(){
  // 눈이 계속 반복되기 위해 '모듈러' 라는 연산 사용하기  
  snow1Y = (snow1Y+0.5)%height;
  image(snow1,0,snow1Y-height,400,600);  
  image(snow1,0,snow1Y,400,600);
  
  snow2Y = (snow2Y+1)%height;
  image(snow2,0,snow2Y-height,400,600);  
  image(snow2,0,snow2Y,400,600);  
 
  snow3Y = (snow3Y+2)%height;
  image(snow3,0,snow3Y-height,400,600);  
  image(snow3,0,snow3Y,400,600);
  }

  
  textSize(40);
  textAlign(CENTER,CENTER);  
  rectMode(CENTER);
  
  //1번줄
  let tongueMove = 0;
  if(frameCount%60>30){
     tongueMove = -10;
  }
  
  fill("pink")
  rect(75+tongueMove,120,30,10);
  
  fill("#03A9F4")
  arc(125,125,100,100,radians(180),radians(270),PIE);
  
  //눈 
    fill("white")
  ellipse(108,108,20,20);
  fill("black");
  ellipse(105,108,10,10);
  
  fill("#03A9F4");  
  rect(150,100,50,50);
  rect(200,100,50,50);
  rect(250,100,50,50);
  arc(275,125,100,100,radians(-90),radians(0),PIE);

  
  rect(300,150,50,50);  
  
  
  //2번줄

  arc(125,225,100,100,radians(180),radians(270),PIE);
  rect(150,200,50,50);
  rect(200,200,50,50);
  rect(250,200,50,50);
  arc(275,175,100,100,radians(0),radians(90),PIE);
   

    rect(100,250,50,50);  
  
  //3번줄
  arc(125,275,100,100,radians(90),radians(180),PIE);
  rect(150,300,50,50);
  rect(200,300,50,50);
  rect(250,300,50,50);
  arc(275,325,100,100,radians(-90),radians(0));


  rect(300,350,50,50);  
  
  //4번줄
  arc(125,425,100,100,radians(180),radians(270),PIE);
  rect(150,400,50,50);
  rect(200,400,50,50);
  rect(250,400,50,50);
  arc(275,375,100,100,radians(0),radians(90),PIE);
  
  noStroke();
  fill("white");
  text(message[0],150,100);
  text(message[1],200,100);
  text(message[2],250,100); 
  text(message[3],150,200);
  text(message[4],200,200);
  text(message[5],250,200);
  text(message[6],150,300);
  text(message[7],200,300);
  text(message[8],250,300);
  text(message[9],150,400);
  text(message[10],200,400);
  text(message[11],250,400);
  
   snow();
    fill("white");
  textSize(110);
  text(2025,200,500);
  
}