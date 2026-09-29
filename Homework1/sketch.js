const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;

// 左上
let yellowBox;

// 上中
let pinkTriangle;
let purpleBall;

// 右上
let blueHexagon;

// 左边
let orangeBox;
let blueBall;
let greenTriangle;

// 中间
let cyanBall;
let purpleBar;
let blueTriangle;

// 右边
let yellowBar;
let greenBall;
let pinkHexagon;
let orangeHexagon;

//透明墙
let ground;
let topWall;
let leftWall;
let rightWall;

//固定轴
let yellowBoxConstraint;
let pinkTriangleConstraint;
let blueHexagonConstraint;
let greenTriangleConstraint;
let purpleBarConstraint;
let blueTriangleConstraint;
let yellowBarConstraint;
let pinkHexagonConstraint;
let orangeHexagonConstraint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  // Matter.js 物理引擎
  engine = Engine.create();

  //关闭重力
  engine.gravity.x = 0;
  engine.gravity.y = 0;

  // 1. 左上黄色正方形

  yellowBox = Bodies.rectangle(
    width / 2 - 300,
    height / 2 - 310,
    180,
    180,
    {
      isStatic: true,
      frictionAir: 0,
    }
  );

  //黄色正方体的轴
  yellowBoxConstraint = Constraint.create({
    pointA: {
      x: width / 2 - 300,
      y: height / 2 - 310,
    },
    bodyB: yellowBox,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  // 转45度
  Body.setAngle(yellowBox, radians(45));

  //给旋转速度
  Body.setAngularVelocity(yellowBox, 0.03);

  // 2. 上方粉色三角形

  pinkTriangle = Bodies.fromVertices(
    width / 2 - 20,
    height / 2 - 250,
    [
      { x: 0, y: 0 },
      { x: 300, y: 0 },
      { x: 0, y: 250 },
    ],
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //转90度
  Body.setAngle(pinkTriangle, radians(-90));

  //粉色三角形的中心轴
  pinkTriangleConstraint = Constraint.create({
    pointA: {
      x: pinkTriangle.position.x,
      y: pinkTriangle.position.y,
    },
    bodyB: pinkTriangle,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //绕中心向左转
  Body.setAngularVelocity(pinkTriangle, -0.03);

  // 3. 上方紫色小球

  purpleBall = Bodies.circle(
    width / 2 + 60,
    height / 2 - 400,
    65,
    {
      isStatic: false,
      restitution: 0.9,
      frictionAir: 0,
    }
  );

  //给速度
  Body.setVelocity(purpleBall, { x: -2, y: 2 });

  // 4. 右上蓝色六边形

  blueHexagon = Bodies.polygon(
    width / 2 + 320,
    height / 2 - 300,
    6,
    125,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //蓝色六边形的中心轴
  blueHexagonConstraint = Constraint.create({
    pointA: {
      x: blueHexagon.position.x,
      y: blueHexagon.position.y,
    },
    bodyB: blueHexagon,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //向左转
  Body.setAngularVelocity(blueHexagon, -0.05);

  // 5. 左边橙色长方形

  orangeBox = Bodies.rectangle(
    width / 2 - 330,
    height / 2 - 30,
    140,
    220,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //速度
  Body.setVelocity(orangeBox, { x: 1, y: 0 });


  // 6. 左下蓝色球

  blueBall = Bodies.circle(
    width / 2 - 330,
    height / 2 + 150,
    70,
    {
      isStatic: false,
      restitution: 0.9,
      frictionAir: 0,
    }
  );

  //给速度
  Body.setVelocity(blueBall, { x: 2, y: -2 });

  // 7. 左下绿色倒三角

  greenTriangle = Bodies.polygon(
    width / 2 - 330,
    height / 2 + 330,
    3,
    150,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  // 旋转
  Body.setAngle(greenTriangle, radians(150));

  //绿色三角形的中心轴
  greenTriangleConstraint = Constraint.create({
    pointA: {
      x: greenTriangle.position.x,
      y: greenTriangle.position.y,
    },
    bodyB: greenTriangle,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //绕中心转
  Body.setAngularVelocity(greenTriangle, 0.02);

  // 8. 中间青色大球

  cyanBall = Bodies.circle(
    width / 2,
    height / 2 - 30,
    95,
    {
      isStatic: false,
      restitution: 0.9,
      frictionAir: 0,
    }
  );

  //给速度
  Body.setVelocity(cyanBall, { x: 2, y: -1 });

  // 9. 中间紫色横杆

  purpleBar = Bodies.rectangle(
    width / 2,
    height / 2 + 100,
    270,
    65,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //紫色横杆的中心轴
  purpleBarConstraint = Constraint.create({
    pointA: {
      x: purpleBar.position.x,
      y: purpleBar.position.y,
    },
    bodyB: purpleBar,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //给旋转速度
  Body.setAngularVelocity(purpleBar, 0.03);

  // 10. 中下蓝色三角形

  blueTriangle = Bodies.polygon(
    width / 2,
    height / 2 + 325,
    3,
    190,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  Body.setAngle(blueTriangle, radians(-30));

  //蓝色三角形的中心轴
  blueTriangleConstraint = Constraint.create({
    pointA: {
      x: blueTriangle.position.x,
      y: blueTriangle.position.y,
    },
    bodyB: blueTriangle,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //绕中心向左转
  Body.setAngularVelocity(blueTriangle, -0.025);

  // 11. 右边黄色斜杆

  yellowBar = Bodies.rectangle(
    width / 2 + 320,
    height / 2 - 40,
    250,
    35,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  Body.setAngle(yellowBar, radians(-45));

  //黄色斜杆的中心轴
  yellowBarConstraint = Constraint.create({
    pointA: {
      x: yellowBar.position.x,
      y: yellowBar.position.y,
    },
    bodyB: yellowBar,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //绕中心向左转
  Body.setAngularVelocity(yellowBar, -0.03);

  // 12. 右边绿色球

  greenBall = Bodies.circle(
    width / 2 + 390,
    height / 2 + 20,
    65,
    {
      isStatic: false,
      restitution: 0.9,
      frictionAir: 0,
    }
  );

  //给速度
  Body.setVelocity(greenBall, { x: -2, y: 1 });

  // 13. 右边粉色多边形

  pinkHexagon = Bodies.polygon(
    width / 2 + 250,
    height / 2 + 200,
    6,
    80,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //粉色多边形的中心轴
  pinkHexagonConstraint = Constraint.create({
    pointA: {
      x: pinkHexagon.position.x,
      y: pinkHexagon.position.y,
    },
    bodyB: pinkHexagon,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //绕中心向左转
  Body.setAngularVelocity(pinkHexagon, 0.03);

  // 14. 右下橙色多边形

  orangeHexagon = Bodies.polygon(
    width / 2 + 380,
    height / 2 + 300,
    5,
    100,
    {
      isStatic: false,
      frictionAir: 0,
    }
  );

  //橙色多边形的中心轴
  orangeHexagonConstraint = Constraint.create({
    pointA: {
      x: orangeHexagon.position.x,
      y: orangeHexagon.position.y,
    },
    bodyB: orangeHexagon,
    pointB: {
      x: 0,
      y: 0,
    },
    length: 0,
    stiffness: 1,
  });

  //也绕中心向左转
  Body.setAngularVelocity(orangeHexagon, -0.025);

  // 四面透明墙

  // 下墙
  ground = Bodies.rectangle(
    width / 2,
    height + 20,
    width,
    40,
    {
      isStatic: true,
    }
  );

  // 上墙
  topWall = Bodies.rectangle(
    width / 2,
    -20,
    width,
    40,
    {
      isStatic: true,
    }
  );

  // 左墙
  leftWall = Bodies.rectangle(
    -20,
    height / 2,
    40,
    height,
    {
      isStatic: true,
    }
  );

  // 右墙
  rightWall = Bodies.rectangle(
    width + 20,
    height / 2,
    40,
    height,
    {
      isStatic: true,
    }
  );

  // 全部加入 Matter 世界

  Composite.add(engine.world, [
    yellowBox,

    pinkTriangle,
    purpleBall,

    blueHexagon,

    orangeBox,
    blueBall,
    greenTriangle,

    cyanBall,
    purpleBar,
    blueTriangle,

    yellowBar,
    greenBall,
    pinkHexagon,
    orangeHexagon,

    ground,
    topWall,
    leftWall,
    rightWall,

    yellowBoxConstraint,
    pinkTriangleConstraint,
    blueHexagonConstraint,
    greenTriangleConstraint,
    purpleBarConstraint,
    blueTriangleConstraint,
    yellowBarConstraint,
    pinkHexagonConstraint,
    orangeHexagonConstraint,
  ]);
}

function draw() {
  // 黄色背景
  background("#EAEA17");

  Engine.update(engine);

  // 黄色正方形

  push();
  fill("#FFBE17");
  translate(
    yellowBox.position.x,
    yellowBox.position.y
  );
  rotate(yellowBox.angle);
  rect(0, 0, 180, 180);
  pop();

  // 粉色三角形

  fill("#EF3D73");

  beginShape();

  for (let v of pinkTriangle.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

  // 紫色球

  fill("#A9419B");

  circle(
    purpleBall.position.x,
    purpleBall.position.y,
    130
  );

  // 蓝色六边形

  fill("#405AF2");

  beginShape();

  for (let v of blueHexagon.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

  // 左边橙色长方形

  push();
  fill("#F45D2C");

  translate(
    orangeBox.position.x,
    orangeBox.position.y
  );

  rotate(orangeBox.angle);

  rect(0, 0, 140, 220);

  pop();

  // 左下蓝色球

  fill("#405AF2");

  circle(
    blueBall.position.x,
    blueBall.position.y,
    140
  );

  // 左下绿色三角形

  fill("#13B68A");

  beginShape();

  for (let v of greenTriangle.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

  // 中间青色大球


  fill("#55BDE4");

  circle(
    cyanBall.position.x,
    cyanBall.position.y,
    190
  );

  // 中间紫色横杆

  push();

  fill("#A9419B");

  translate(
    purpleBar.position.x,
    purpleBar.position.y
  );

  rotate(purpleBar.angle);

  rect(0, 0, 270, 65);

  pop();

  // 中下蓝色三角形

  fill("#405AF2");

  beginShape();

  for (let v of blueTriangle.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

  // 右边黄色斜杆

  push();

  fill("#FFBE17");

  translate(
    yellowBar.position.x,
    yellowBar.position.y
  );

  rotate(yellowBar.angle);

  rect(0, 0, 250, 35);

  pop();

  // 右边绿色球

  fill("#13B68A");

  circle(
    greenBall.position.x,
    greenBall.position.y,
    130
  );

  // 右边粉色多边形

  fill("#EF3D73");

  beginShape();

  for (let v of pinkHexagon.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

  // 右下橙色多边形

  fill("#F45D2C");

  beginShape();

  for (let v of orangeHexagon.vertices) {
    vertex(v.x, v.y);
  }

  endShape(CLOSE);

}