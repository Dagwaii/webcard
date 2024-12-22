//전역변수 Global
let faceType = 1;
let faceX = 200;
let faceY = 150;
let faceScale = 0.5;

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

function setup() {
  createCanvas(400, 600);
  getParam();
}


function draw() {
  background("#C4C4C4");

  // mouseX, mouseY
  noStroke();
  fill(235);
  ellipse(200,430,230,230);
  fill(245);
  ellipse(200,280,200,200);
  face(faceX, faceY, faceType);
   snow();
  
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
}


function mouseClicked() {
  let d = dist(faceX, faceY, mouseX, mouseY);
  if (d < 135*faceScale) {
    faceType = faceType + 1;
    if (faceType > 3) {
      faceType = 1;
    }
    setParam();
  }
}

function setParam(){
  let url = new URL(location.href);
  url.searchParams.set("faceType",faceType);
  history.pushState({},null,url);
}

function getParam(){
  let url = new URL(location.href);
  faceType = url.searchParams.get("faceType");
  if(faceType == null){
    faceType = 1;
  }
}


function face(x, y, type) {
  let d = dist(x, y, mouseX, mouseY);

  push();
  translate(x, y);
  scale(faceScale);

  strokeWeight(0);
  // 조건문 - 소괄호의 조건에 따라 중괄호가 실행된다
  // 소괄호의 조건이 참이면 실행된다
  // 참 trurgb(205,205,205)(rgb(224,224,224)
  // 거짓 false
  // 비교연산자 > < == >= <=

  if (d < 135*faceScale) {
    fill("rgb(208,208,208)");
  } else {
    fill("white");
  }

  ellipse(0, 0, 270, 270);

  //눈
  stroke(0);
  strokeWeight(18);
  point(-60, -10);
  point(60, -10);
  // ellipse(-60,0,100,100);
  // ellipse(60,0,100,100);
  // ellipse(-60,0,50,50);
  // ellipse(60,0,50,50);

  //눈썹
  strokeWeight(13);
  arc(-60, -30, 30, 30, radians(230), radians(250));
  arc(60, -30, 30, 30, radians(280), radians(300));

  // 코 1번
  if (type == 1) {
    noFill();
    strokeWeight(8);
    arc(0, 20, 50, 20, radians(-35), radians(35));
// 입 1번  
  ellipse(0,70,80,20);
  }

  // 코 2번
  if (type == 2) {
        fill("red");

    strokeWeight(0);
    ellipse(10, 20, 60, 30);
    
  //입 3 빵긋
  noFill();
        strokeWeight(8);
  rectMode(CENTER);
  rect(0,70,40,50,0,0,20,20);
  }

  //코 3번 당근코 아크로
  if (type == 3) {
    strokeWeight(8);
    fill("orange");
    arc(90, 30, 180, 180, radians(175), radians(200));
    //입 2 썩소
  // 0 ~ 360
  // 0 ~ TWO_PI 호도법
  // radians(각도)
  strokeWeight(8);
  noFill();
  arc(0, 0, 160, 160, radians(80), radians(130));
  arc(-50, 60, 30, 30, radians(180), radians(200));
  
  }

  // 코 4번 당근코

  //       push();
  //   translate(0,30);
  //   triangle(
  //     100,0,
  //     0,-20,
  //     0,20
  //   );
  // pop();


  pop();

  //line(x,y,mouseX,mouseY);
  //text(d,mouseX,mouseY);
}

