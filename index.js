var x = 10
var direction = 5

function moveBall(){
    const ball = document.getElementById("ball");
    // console.log(ball);
    const lpaddle = document.getElementById("lpaddle");
    const lpaddlePos = lpaddle.getBoundingClientRect();
    const lpaddleRight = lpaddlePos.right
    const lpaddleBottom = lpaddlePos.bottom
    const newlpaddleRight = lpaddle +1
    lpaddle.style.right = lpaddleRight + "px"
    const rpaddle =  document.getElemntById("rpaddle");
    const rpaddlePos = rpaddle.getBoundingClientRect();
    const rpaddleLeft = rpaddlePos.left
    const rpaddleBottom = rpaddlePos.bottom
    rpaddle.syle.top = rpaddleTop + "px"
    const ballPos = ball.getBoundingClientRect();
    const ballLeft = ballPos.left
    const ballRight = ballPos.right
    const field = document.getElementById("field");
    const fieldRect = field.getBoundingClientRect();
    const fieldLeft = fieldRect.left
    const fieldRight = fieldRect.right
    const fieldTop = fieldRect.top
    const fieldBottom = fieldRect.bottom
    const newBallLeft = ballLeft +1
    ball.style.left = newBallLeft + "px"
    //console.log(ballPos);
    //console.log(ballLeft);
if (ballRight <= fieldRight && ballLeft >= fieldLeft){
    x += direction
    ball.style.left = x + "px";
}
if (ballLeft < lpaddleRight){
    direction = direction * -1
    console.log ("any")
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


    window.requestAnimationFrame(moveBall)
}moveBall();

