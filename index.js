var x = 10
var direction = 5

function moveBall(){
    const ball = document.getElementById("ball");
    // console.log(ball);
    const lpaddle = document.getElementById("lpaddle");
    const lpaddleRect = lpaddle.getBoundingClientRect();
    const lpaddleRight = lpaddleRect.right
    lpaddle.style.right = lpaddleRight + "px"
    const rpaddle =  document.getElementById("rpaddle");
    const rpaddleRect = rpaddle.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    const ballLeft = ballRect.left
    const ballRight = ballRect.right
    const field = document.getElementById("field");
    const fieldRect = field.getBoundingClientRect();
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
    if (ballLeft < lpaddleRight){
       if (ballRect.bottom < lpaddleRect.top){
        direction = direction * -1
       }
    }
    if (ballRight <= fieldRight && ballLeft >= fieldLeft){
        x += direction
        ball.style.left = x + "px";
    }
    if (ballLeft <fieldLeft){
        direction = direction * -1
        x += direction;
        ball.style.left = x + "px";

    }
    if (ballRight > fieldRight) {
        direction = direction *-1;
        x += direction;
        ball.style.left = x + "px"
    }
document.addEventListener("resize",reBuildFeild)
function reBuildFeild (){
    field.style.height = window.top.style.height
}

    window.requestAnimationFrame(moveBall)
}
moveBall();

