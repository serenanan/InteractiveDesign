const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Body = Matter.Body;

// 엔진 객체 생성
let engine;

//地板
let ground;
let rightWall;

//固定物体
let brownBar1;
let brownBar3;
let brownBar2;
let redBar;
let redBox;
let cyanBar;
let cyanBar2;

//球
let redBall;
let orangeBall;
let blueBall;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  // Matter setting
  engine = Engine.create();


  // 1. Brown Bar 1 左中

  brownBar1 = Bodies.rectangle(
    width / 2 - 215,
    height / 2 - 35,
    430,
    35,
    {
      isStatic: true,
    }
  );

  Body.setAngle(brownBar1, radians(45));


  // 1.5. Brown Bar 3 左上

  brownBar3 = Bodies.rectangle(
    width / 2 - 150,
    height / 2 - 270,
    480,
    35,
    {
      isStatic: true,
    }
  );

  Body.setAngle(brownBar3, radians(45));


  // 2. Brown Bar 2 左下

  brownBar2 = Bodies.rectangle(
    width / 2 - 170,
    height / 2 + 300,
    430,
    35,
    {
      isStatic: true,
    }
  );

  Body.setAngle(brownBar2, radians(-45));


  // 3. Red Bar 酒红色细长斜杆

  redBar = Bodies.rectangle(
    width / 2 + 55,
    height / 2 - 165,
    600,
    28,
    {
      isStatic: false,
      friction: 0.8,
    }
  );

  Body.setAngle(redBar, radians(-45));


  // 4. Red Big Box 中间的大酒红方块

  redBox = Bodies.rectangle(
    width / 2,
    height / 2 + 20,
    160,
    240,
    {
      isStatic: false,
      friction: 0.8,
    }
  );

  Body.setAngle(redBox, radians(45));


  // 5. Cyan Bar下面的青色杆

  cyanBar = Bodies.rectangle(
    width / 2 + 60,
    height / 2 + 270,
    280,
    50,
    {
      isStatic: false,
    }
  );

  Body.setAngle(cyanBar, radians(45));


  // 5.5. Cyan Bar2下面的青色杆2

  cyanBar2 = Bodies.rectangle(
    width / 2 - 20,
    height / 2 + 270,
    280,
    50,
    {
      isStatic: true,
    }
  );

  Body.setAngle(cyanBar2, radians(45));


  // 6. Red Ball左上酒红圆

  redBall = Bodies.circle(
    width / 2 - 95,
    height / 2 - 110,
    55,
    {
      isStatic: false,
      friction: 0.8,
      frictionAir: 0.02,
density: 0.005,
    }
  );


  // 7. Orange Ball 上方橙色圆

orangeBall = Bodies.circle(
  width / 2 + 5,
  height / 2 - 215,
  55,
  {
    isStatic: false,
    friction: 0.8,
  }
);

//给橙色球一个向右的速度
Body.setVelocity(orangeBall, {
  x: -14,
  y: 0,
});


  // 8. Blue Ball右下蓝色圆

  blueBall = Bodies.circle(
    width / 2 + 60,
    height / 2 + 150,
    55,
    {
      isStatic: false,
      friction: 0.8,
    }
  );


  //地板

  ground = Bodies.rectangle(
    width / 2,
    height + 10,
    width + 200,
    40,
    {
      isStatic: true,
    }
  );


  //右墙

  rightWall = Bodies.rectangle(
    width / 2 + 380,
    height / 2 + 330,
    40,
    220,
    {
      isStatic: true,
    }
  );

  Body.setAngle(rightWall, radians(30));


  // 全部加入物理世界

  Composite.add(engine.world, [
    brownBar1,
    brownBar3,
    brownBar2,
    redBar,
    redBox,
    cyanBar,
    cyanBar2,
    redBall,
    orangeBall,
    blueBall,
    ground,
    rightWall,
  ]);
}



function draw() {
  background("#F3E1CC");

  //用matter引擎加载每一帧的物理世界

  Engine.update(engine);


  // Brown Bar 1

  push();
  fill("#6B4A2F");
  translate(brownBar1.position.x, brownBar1.position.y);
  rotate(brownBar1.angle);
  rect(0, 0, 430, 35);
  pop();


  // Brown Bar 3

  push();
  fill("#6B4A2F");
  translate(brownBar3.position.x, brownBar3.position.y);
  rotate(brownBar3.angle);
  rect(0, 0, 480, 35);
  pop();


  // Brown Bar 2

  push();
  fill("#6B4A2F");
  translate(brownBar2.position.x, brownBar2.position.y);
  rotate(brownBar2.angle);
  rect(0, 0, 430, 35);
  pop();


  // Red Bar

  push();
  fill("#7A0B00");
  translate(redBar.position.x, redBar.position.y);
  rotate(redBar.angle);
  rect(0, 0, 600, 28);
  pop();


  // Red Big Box

  push();
  fill("#7A0B00");
  translate(redBox.position.x, redBox.position.y);
  rotate(redBox.angle);
  rect(0, 0, 160, 240);
  pop();


  // Cyan Bar

  push();
  fill("#5CE1E6");
  translate(cyanBar.position.x, cyanBar.position.y);
  rotate(cyanBar.angle);
  rect(0, 0, 280, 50);
  pop();


  // Cyan Bar2

  push();
  fill("#5CE1E6");
  translate(cyanBar2.position.x, cyanBar2.position.y);
  rotate(cyanBar2.angle);
  rect(0, 0, 280, 50);
  pop();


  // Red Ball

  fill("#7A0B00");
  circle(
    redBall.position.x,
    redBall.position.y,
    110
  );


  // Orange Ball

  fill("#FF8A00");
  circle(
    orangeBall.position.x,
    orangeBall.position.y,
    110
  );


  // Blue Ball

  fill("#285BF5");
  circle(
    blueBall.position.x,
    blueBall.position.y,
    110
  );


  //右墙
  //现在不画出来
  //Matter里面存在，但是画面里看不到
}