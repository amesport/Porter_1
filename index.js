x = 100
y = 100
maxSpeed = 10

    var ball = document.getElementById("ball");
    // console.log(ball);
    var lpaddle = document.getElementById("lpaddle");
    var lpaddleRect = lpaddle.getBoundingClientRect();
    var lpaddleRight = lpaddleRect.right
    // lpaddle.style.right = lpaddleRight + "px"
    var rpaddle =  document.getElementById("rpaddle");
    var rpaddleRect = rpaddle.getBoundingClientRect();
    var rpaddleLeft = rpaddleRect.left
    // rpaddle.style.left = rpaddleLeft + "px"
    var ballRect = ball.getBoundingClientRect();
    var ballTop = ballRect.top
    var ballBottom = ballRect.bottom
    var ballLeft = ballRect.left
    var ballRight = ballRect.right
    var field = document.getElementById("field");
    var fieldRect = field.getBoundingClientRect();
    var fieldTop = fieldRect.top
    var fieldBottom = fieldRect.bottom
    var fieldLeft = fieldRect.left
    var fieldRight = fieldRect.right

function randVector(){
    var xDir = Math.round(Math.random() * maxSpeed - maxSpeed/ 2)
    var yDir = Math.round(Math.random() * maxSpeed - maxSpeed/ 2)
    while (xDir === 0){
        xDir = Math.round(Math.random() * maxSpeed - maxSpeed/ 2)
    }
    while (yDir === 0){
        yDir = Math.round(Math.random() * maxSpeed - maxSpeed/ 2)
    }
    return {xDir, yDir}
}
const direction = randVector()
console.log(direction)

document.addEventListener("resize", reBuildFeild())
document.addEventListener("load", reBuildFeild())

function reBuildFeild (){
    field.height = window.innerHeight
    field.width = window.innerWidth
    ballLeft = "10px"
    ballTop = "10px"
    console.log("doslkf")
    moveBall();
}

function moveBall(){

    // const newBallLeft = ballLeft +1
    // ball.style.left = newBallLeft + "px"
    //console.log(ballPos);
    //console.log(ballLeft);
    // if (ballLeft < lpaddleRight){
    //     if (ballRect.top < lpaddleRect.bottom){
    //     direction.xDir = direction.xDir * -1
    //     // console.log ("any")
    //     }    
    // }
    // if (ballRight > rpaddleLeft){
    //    if (ballRect.bottom > rpaddleRect.top && ballRect.top <rpaddleRect.bottom){
    //     direction.xDir = direction.xDir * -1
    //    }
    // }
    if (ballRight < fieldRight && ballLeft > fieldLeft){
        x += direction.xDir
        ball.style.left = `${x}px`;
    }else{
        direction.xDir = direction.xDir * -1;
        x += direction.xDir;
        ball.style.left = `${x}px`;
    }
    if ( ballTop > fieldTop && ballBottom < fieldBottom){
        y += direction.yDir
        ball.style.top = `${y}px`;
    }else{
        direction.yDir*= -1
        y += direction.yDir
        ball.style.top = `${y}px`;
    }
    window.requestAnimationFrame(moveBall)
}


