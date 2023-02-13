var x = 10
var direction = 2
var y = 10
var direction = 2

function moveBall(){
    const ball = document.getElementById("ball");
    // console.log(ball);
    const lpaddle = document.getElementById("lpaddle");
    const lpaddleRect = lpaddle.getBoundingClientRect();
    const lpaddleRight = lpaddleRect.right
    lpaddle.style.right = lpaddleRight + "px"
    const rpaddle =  document.getElementById("rpaddle");
    const rpaddleRect = rpaddle.getBoundingClientRect();
    const rpaddleLeft = rpaddleRect.left
    rpaddle.style.left = rpaddleLeft + "px"
    const ballRect = ball.getBoundingClientRect();
    const ballTop = ballRect.top
    const ballBottom = ballRect.bottom
    const ballLeft = ballRect.left
    const ballRight = ballRect.right
    const field = document.getElementById("field");
    const fieldRect = field.getBoundingClientRect();
    const fieldTop = fieldRect.top
    const fieldBottom = fieldRect.bottom
    const fieldLeft = fieldRect.left
    const fieldRight = fieldRect.right
    const newBallLeft = ballLeft +1
    ball.style.left = newBallLeft + "px"
    //console.log(ballPos);
    //console.log(ballLeft);
    if (ballLeft < lpaddleRight){
        if (ballRect.top < lpaddleRect.bottom){
        direction = direction * -1
        // console.log ("any")
        }    
    }
    if (ballRight > rpaddleLeft){
       if (ballRect.bottom = rpaddleRect.top){
        direction = direction * -1
       }
    }
    if (ballRight <= fieldRight && ballLeft >= fieldLeft){
        x += direction
        ball.style.left = `${x}px`;
    }
    else  if ( ballTop <= fieldTop && ballBottom >= fieldBottom){
        y += direction
        ball.style.top = `${y}px`;
    }
    if (ballLeft <fieldLeft){
        direction = direction * -1
        x += direction;
        ball.style.left = `${x}px`;
    }
    if (ballRight > fieldRight) {
        direction = direction *-1;
        x += direction;
        ball.style.left = `${x}px`;
    }
    else if (ballTop < fieldTop){
        direction = direction / -1;
        y += direction;
        ball.style.top = `${y}px`;
    }
    if (ballBottom > fieldBottom){
        direction = direction / -1
        y += direction;
        ball.style.bottom = `${y}px`;
    }
document.addEventListener("resize",reBuildFeild)
function reBuildFeild (){
    field.style.height = window.top.style.height
}

    window.requestAnimationFrame(moveBall)
}
moveBall();

