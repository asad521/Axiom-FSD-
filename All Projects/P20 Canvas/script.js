
const canvas = document.getElementById("myCanvas");
var cts = canvas.getContext('2d');
cts.fillStyle = 'red';

cts.fill()
//  to draw any rectangle
cts.beginPath();
cts.rect(20, 40, 50, 50);
cts.fillStyle = 'red';
cts.fill();
cts.closePath();

//  to draw any circle
cts.beginPath();
cts.arc(166, 200, 70, 0, Math.PI * 2, false);
cts.fillStyle = 'blue';
cts.fill();
cts.strokeStyle = 'white';
cts.stroke();
cts.closePath();
//draw paddel parameter
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2; //place center at center of canwas width
// function to draw the ball continously
var x = canvas.width / 6;
var y = canvas.height / 6;
var dx = 1; //variable x for moving
var dy = -2;//variable y for moving
ballRadius = 20;
//brick variable 
var brickRows=4;
var brickCols=2;
var brickHeight=20;
var brickWidth=80;
var brickPadding = 10; //distance between bricks
var brickOffsetTop = 30;   //distance from top canvas
var brickOffsetLeft = 30;   //distance from left canvas border
//score varible
var score=0;
var bricks=[];

//fucntion for score draw
function drawScore() {
    cts.font = "16px Arial";
    cts.fillStyle = "#0095DD";
    cts.fillText("Score: "+score, 8, 20);


}
// function for break genereation creat one columnr 
// then creat one row in that rows 
// then creat bricks in rows
// below is empty 2d-array of empty objects
 for(var c=0; c<brickCols ;c++){
    //  console.log('columns trigger') 
     bricks[c]=[];
    //  console.log('bricks in columns'+bricks)

     for(var r=0;r<brickRows;r++){
        // console.log('row trigger')
         bricks[c][r]={x:0,y:0,status:1} //x,y show sposition of ball.status show the status
        //  console.log('bricks in rows'+bricks)

     }
     // 
    //  console.log('bricks after one cycle(1columns +3 rows)'+bricks)
     
 }
 // Here we are using the above 2d arraw to draw bricsk
 // we are simply looping thorough the 2d array . and assing eacy value of 
//  matrix to x and y. becaue we store on each value of matrix an object which contains both
// x and y value.
function drawBricks() {
    for(var c=0; c< brickCols; c++) {
        for(var r=0; r<brickRows; r++) {
            if(bricks[c][r].status==1){
            var  brickX=(c*(brickWidth+brickPadding))+brickOffsetLeft; //positin of brick
            var  brickY=(r *(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX; 
            bricks[c][r].y = brickY;
            cts.beginPath();
            cts.rect(brickX, brickY, brickWidth, brickHeight);
            cts.fillStyle = "#0095DD";
            cts.fill();
            cts.closePath();
        }}
        // console.log('in progress drawing brick')
    }   
}
bricks.forEach(item=>{
    // console.log(bricks)
})

//parameter for drawing ball
function drawBall() {
    // console.log(y)
    // console.log(x)   
    cts.beginPath();
    cts.arc(x, y, ballRadius, 0, Math.PI * 2, false)
    cts.fillStyle = 'red';
    cts.fill();
    cts.strokeStyle = 'black';
    cts.stroke();
    // console.log(x)
}

//how to draw the ball .first clear everything in rect for giving heigh/width
function draw() {
    cts.clearRect(0, 0, canvas.width, canvas.height)
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawScore();

    // for ball movement
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // Below commented code is for collision to xaxis bottom
    // if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    //     dy = -dy;
    // }
    // below is added for game over at the bottom
    if (y + dy < ballRadius) { //only for top wall coliication .
        dy = -dy;
        // console.log('trigger')
    } else if (y > canvas.height - ballRadius) //if the ball position=y is less greater than canvws+radius,means it 
    // has reached to end of canvas at bottom
    // then check whether  the ball x-position=x=ball is between position of paddle x +paddlewidth .return the ball =bounce back
    {
        if (x > paddleX && x < paddleX + paddleWidth) { //if x=ball is between position of paddle x +paddlewidth .return the ball =bounce back
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }

    x += dx;
    y += dy;


    // for paddel movement.log(x)
    if (rightPressed) {
        paddleX += 2;
        // if the paddelposition+paddle width is > than canvas.width
        //then set the paddle position of last canvas width -paddle width
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if (leftPressed) {
        paddleX -= 2;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    // console.log('position of paddle=>' + paddleX)
    // console.log('position of ballx=>' + x)
}
var interval = setInterval(draw, 5);

// setInterval((draw(x,y)),10)
//drawing paddel
function drawPaddle() {
    cts.beginPath();
    cts.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    // console.log(canvas.height)

    cts.fillStyle = "red";
    cts.fill();
    cts.closePath();
}

//colistion detection 








//event handler for keyboard 
// here key down means pressed
//keydown is triggered even when any keyn is pressed=downed
//down means pressed, up means released 
document.addEventListener('keydown', keyPressed, false);
document.addEventListener('keyup', keyReleased, false);
//collicsitno deteciton

// variabel for check whether key is pressed or not
let rightPressed = false;
let leftPressed = false;
//colsition detection
function collisionDetection() {
    for(var c=0; c<brickCols; c++) {
        for(var r=0; r<brickRows; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRows*brickCols) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}
/// function to checek if left/right key is pressed
function keyPressed(e) {
    // e.preventDefault();
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        // console.log('right key is pressed')
        rightPressed = true;
        console.log(rightPressed);
    } else {
        if (e.key == 'Left' || e.key == 'ArrowLeft') {
            // console.log('Left key is pressed')
            leftPressed = true;
        }

    }
}
// /// function to checek if left/right key is released


function keyReleased(e) {
    // e.preventDefault();
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        // console.log('right key is released')
        rightPressed = false;
        console.log(rightPressed);

    } else {
        if (e.key == 'Left' || e.key == 'ArrowLeft') {
            // console.log('Left key is released')
            leftPressed = false;
        }

    }
}

