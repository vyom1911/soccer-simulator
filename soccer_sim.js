var can = document.getElementById("cnvs");
var ctx = can.getContext("2d");
var scoreRed=0;
var scoreBlue=0; 

    var playerX = new Array(7);
    var playerY = new Array(7);
    var ball_X = 400;
    var ball_Y = 250;
    var dx=1;
    var dy=1;
    var interval=10;
    var playerinterval = 11;
    var WIDTH=800;
    var HEIGHT=500;
    var destX=0;
    var destY=0;
    var destinationX=0;
    var destinationY=0;
    var stopper = null;
    var Goal = null;
    var Goal1 = null;

    //reset values to initial values;
    function reset_values()
    {
        ball_X = 400;
        ball_Y = 250;
        dx=1;
        dy=1;
        interval=10;
        playerinterval = 11;
        WIDTH=800;
        HEIGHT=500;
        destX=0;
        destY=0;
        destinationX=0;
        destinationY=0;
        stopper = null;
        Goal = null;
        Goal1=null;
    }

    //Draw Field
    function drawField()
    {//field

            ctx.beginPath();
        ctx.arc(400,250,125,0,2*Math.PI);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(2, 2, 798, 498);
        ctx.fillStyle = 'Green';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.stroke();

        //field lines
        ctx.beginPath();
        ctx.moveTo(0,125);
        ctx.lineTo(200,125);
        ctx.lineTo(200,375);
        ctx.lineTo(0,375);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(0,187);
        ctx.lineTo(100,187);
        ctx.lineTo(100,313);
        ctx.lineTo(0,313);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(800,125);
        ctx.lineTo(600,125);
        ctx.lineTo(600,375);
        ctx.lineTo(800,375);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(800,187);
        ctx.lineTo(700,187);
        ctx.lineTo(700,313);
        ctx.lineTo(800,313);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400,0);
        ctx.lineTo(400,500);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

    }

    //redraws fields
    function redrawField()
    {
        ctx.beginPath();
        ctx.arc(400,250,125,0,2*Math.PI);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(2, 2, 798, 498);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.font = "20px Georgia";
        ctx.fillStyle="white";
        ctx.fillText("score Red: "+scoreRed, 50, 20);
        ctx.fillText("score Blue:"+ scoreBlue, 600,20 ) ;
        ctx.closePath();

        //field lines
        ctx.beginPath();
        ctx.moveTo(0,125);
        ctx.lineTo(200,125);
        ctx.lineTo(200,375);
        ctx.lineTo(0,375);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(0,187);
        ctx.lineTo(100,187);
        ctx.lineTo(100,313);
        ctx.lineTo(0,313);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(800,125);
        ctx.lineTo(600,125);
        ctx.lineTo(600,375);
        ctx.lineTo(800,375);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(800,187);
        ctx.lineTo(700,187);
        ctx.lineTo(700,313);
        ctx.lineTo(800,313);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400,0);
        ctx.lineTo(400,500);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();
}

    // Draw circle representing players
    function drawBlueCircle(x,y)
        {
            // Team blue
            ctx.beginPath();
            ctx.arc(x,y,10,0,2*Math.PI,true);
            ctx.fillStyle = 'blue';
            ctx.closePath();
            ctx.fill();
        }

    function drawRedCircle(x,y){
            ctx.beginPath();
            ctx.arc(x,y,10,0,2*Math.PI,true);
            ctx.fillStyle = 'red';
            ctx.closePath();
            ctx.fill();
    }

    //Draw Football
    function drawFootball(x,y){
            ctx.beginPath();
            ctx.arc(x,y,6,0,2*Math.PI,true);
            ctx.fillStyle = 'white';
            ctx.closePath();
            ctx.fill();
    }

    var i;

    //Initialize the Teams
    function InitializeTeam(){
        
        playerX[0]=250;
        playerX[1]=200;
        playerX[2]=150;
        playerX[3]=175;
        playerX[4]=550;
        playerX[5]=500;
        playerX[6]=475;
        playerX[7]=450;

        playerY[0]=100;
        playerY[1]=200;
        playerY[2]=300;
        playerY[3]=400;
        playerY[4]=100;
        playerY[5]=200;
        playerY[6]=300;
        playerY[7]=400;
    }

    //Set the game scenerio to initial state
    function InitializeGame(){
        drawField();
        InitializeTeam();
        drawFootball(400,250);

        //RedTeam
        for(i=0; i<4; i++ ){
        drawRedCircle(playerX[i],playerY[i]);
        }

        //BlueTeam
        for(i=4; i<8; i++ ){
        drawBlueCircle(playerX[i],playerY[i]);
        }
    }

    InitializeGame();

    //clear player position
    function clear(x,y){
            redrawField();
            ctx.beginPath();
            ctx.arc(x,y,14,0,2*Math.PI,true);
            ctx.fillStyle = 'Green';
            ctx.closePath();
            ctx.fill();
            
    }

    //clear ball
    function clearball(ball_X,ball_Y){
            redrawField();
            ctx.beginPath();
            ctx.arc(ball_X,ball_Y,10,0,2*Math.PI,true);
            ctx.fillStyle = 'Green';
            ctx.closePath();
            ctx.fill();
            
    }

    // //move Football

    function moveBall2(destX,destY)
    {
    clearball(ball_X,ball_Y);
    var tempX = ball_X+destX;
    var tempY = ball_Y+destY;
        if (tempY>HEIGHT || tempY<0)
        {tempY=250;}
    drawFootball(tempX,tempY)
    ball_X = tempX;
    ball_Y = tempY; 
    }

    function moveBall(destX,destY)
        {
        clearball(ball_X,ball_Y);
        var tempX = ball_X+destX;
        var tempY = ball_Y+destY;
        if (tempY>HEIGHT || tempY<0)
        {tempY=250;}
        drawFootball(tempX,tempY)
        ball_X = tempX;
        ball_Y = tempY;
        }

    function kickBallBlue(){
    destX = Math.floor(Math.random() * (150 - 70 + 1)) + 70;
    destY = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
    moveBall2(-destX,destY);

    }

    function kickBallRed(){
    destX = Math.floor(Math.random() * (150 - 70 + 1)) + 70;
    destY = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
    moveBall(destX,destY);
    }

    //player move
    function movePlayer(){
        
        for(i=0;i<4;i++)
            {   destinationX=ball_X;
                destinationY=ball_Y;
                clear(playerX[i],playerY[i]);
                drawRedCircle(playerX[i],playerY[i]);
                
                //movePlayer towards ball
                if(destinationX - 10 > playerX[i] && destinationY - 10< playerY[i])
                    {
                        playerX[i] += dx;
                        playerY[i] -= dy;
                    }
                    else if (destinationX - 10 > playerX[i] && destinationY - 10 > playerY[i]){
                        playerX[i] += dx;
                        playerY[i] += dy;
                    }
                    else if(destinationX - 10< playerX[i] && destinationY - 10 > playerY[i])
                    {
                        playerX[i] -= dx;
                        playerY[i] += dy;
                    }
                    else if(destinationX - 10 < playerX[i] && destinationY - 10 < playerY[i]){
                        playerX[i] -= dx;
                        playerY[i] -= dy;
                    }
                    else if(destinationX - 10 < playerX[i])
                        playerX[i] -= dx
                    else if(destinationX - 10 > playerX[i])
                        playerX[i] += dx
                    else if(destinationY - 10 < playerY[i])
                        playerY[i] -= dy;
                    else if(destinationY- 10 > playerY[i])
                        playerY[i] -= dy;


                            //check boundary condition
                                    if (playerX[i] + dx > WIDTH || playerX[i] + dx < 0)
                                    {
                                        dx = -dx;
                                        playerX[i] += dx;
                                    }

                                    if (playerY[i] + dy > HEIGHT)  // floor
                                        {
                                        dy =  -dy; // -.2;
                                        playerY[i] += dy;	
                                        }
                                    else if ( playerY[i] + dy < 0)   // celing
                                        {
                                        dy = -dy; // -.5;
                                        playerY[i] += dy; 	
                                        }

                                //check ball and kickBall
                                if((playerX[i] == destinationX-10 && playerY[i] == destinationY-10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX-10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY-10))
                            {
                                kickBallRed();
                            }
                            if(ball_X>700)
                            {
                                shootred();
                            }
            }
                 //BlueTeam
            for(i=4;i<8;i++)
            {   destinationX=ball_X;
                destinationY=ball_Y;
                clear(playerX[i],playerY[i]);
                drawBlueCircle(playerX[i],playerY[i]);
                
                //movePlayer towards ball
                if(destinationX - 10 > playerX[i] && destinationY - 10< playerY[i])
                    {
                        playerX[i] += dx;
                        playerY[i] -= dy;
                    }
                    else if (destinationX - 10 > playerX[i] && destinationY - 10 > playerY[i]){
                        playerX[i] += dx;
                        playerY[i] += dy;
                    }
                    else if(destinationX - 10< playerX[i] && destinationY - 10 > playerY[i])
                    {
                        playerX[i] -= dx;
                        playerY[i] += dy;
                    }
                    else if(destinationX - 10 < playerX[i] && destinationY - 10 < playerY[i]){
                        playerX[i] -= dx;
                        playerY[i] -= dy;
                    }
                    else if(destinationX - 10 < playerX[i])
                        playerX[i] -= dx
                    else if(destinationX - 10 > playerX[i])
                        playerX[i] += dx
                    else if(destinationY - 10 < playerY[i])
                        playerY[i] -= dy;
                    else if(destinationY- 10 > playerY[i])
                        playerY[i] -= dy;

                    

                            //check boundary condition
                                    if (playerX[i] + dx > WIDTH || playerX[i] + dx < 0)
                                    {
                                        dx = -dx;
                                        playerX[i] += dx;
                                    }

                                    if (playerY[i] + dy > HEIGHT)  // floor
                                        {
                                        dy =  -dy; // -.2;
                                        playerY[i] += dy;	
                                        }
                                    else if ( playerY[i] + dy < 0)   // celing
                                        {
                                        dy = -dy; // -.5;
                                        playerY[i] += dy; 	
                                        }

                                //check ball and kickBall
                                if((playerX[i] == destinationX-10 && playerY[i] == destinationY-10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX-10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY-10))
                            {
                                kickBallBlue();
                            }
                            if(ball_X<100)
                            {   
                                shootblue();
                            }
            }
        // //stop player from colliding
        // for(i=0;i<8;i++)
        //     {for(var j=0;j<8;j++)
        //     {   if(playerX[i] == playerX[j] && playerY[i] == playerY[j]) 
        //         {
        //             playerX[i]=playerX[i]-2;
        //             playerY[i]=playerY[i]-2;
        //         }
        //         if (playerX[i] == playerX[j] && playerY[i] == playerY[j])
        //         {
        //             playerX[i]=playerX[i]+2;
        //             playerY[i]=playerY[i]+2;
        //         } 
        //         if (playerX[i] == playerX[j] && playerY[i] == playerY[j]) 
        //         {
        //             playerX[i]=playerX[i]-2;
        //             playerY[i]=playerY[i]+2;
        //         }
        //         if (playerX[i] == playerX[j] && playerY[i] == playerY[j])
        //         {
        //             playerX[i]=playerX[i]+2;
        //             playerY[i]=playerY[i]-2;
        //         }
        //     }
        // }
}
    // shoot red team
    function shootred()
    {
        for(i=0;i<4;i++)
                {   if((playerX[i] == destinationX-10 && playerY[i] == destinationY-10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX-10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY-10))
                            {   
                                moveBallToGoalRed();
                                scoreRed= scoreRed + 1;
                                if (scoreRed<7)
                                {Game();
                                 clearInterval(stopper);   
                                }
                                else
                                {   
                                    terminationRed();
                                }
                            }
                }
    }

    // shoot blue team
    function shootblue()
    {
        for(i=4;i<8;i++)
                {   if((playerX[i] == destinationX-10 && playerY[i] == destinationY-10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX-10 && playerY[i] == destinationY+10) || (playerX[i] == destinationX+10 && playerY[i] == destinationY-10))
                            {
                                moveBallToGoalBlue();
                                scoreBlue= scoreBlue + 1;
                                if (scoreBlue<7)
                                {Game();
                                 clearInterval(stopper);   
                                }
                                else
                                {
                                    terminationBlue();
                                }
                            }
                }
    }
//animates ball to goal

function moveBallToGoalBlue()
{   
    var destiX=0;
    var destiY=250;

    clearball(ball_X,ball_Y);
    drawFootball((ball_X-destiX)/8,(ball_Y-destiY)/8);
    //clearball((ball_X-destiX)/8,(ball_Y-destiY)/8);
    drawFootball((ball_X-destiX)/7,(ball_Y-destiY)/7);
    //clearball((ball_X-destiX)/7,(ball_Y-destiY)/7);
    drawFootball((ball_X-destiX)/6,(ball_Y-destiY)/6);
    //clearball((ball_X-destiX)/6,(ball_Y-destiY)/6);
    drawFootball((ball_X-destiX)/5,(ball_Y-destiY)/5);
    //clearball((ball_X-destiX)/5,(ball_Y-destiY)/5);
    drawFootball((ball_X-destiX)/4,(ball_Y-destiY)/4);
    //clearball((ball_X-destiX)/4,(ball_Y-destiY)/4);
    drawFootball((ball_X-destiX)/3,(ball_Y-destiY)/3);
    //clearball((ball_X-destiX)/3,(ball_Y-destiY)/3);
    drawFootball((ball_X-destiX)/2,(ball_Y-destiY)/2);
    //clearball((ball_X-destiX)/2,(ball_Y-destiY)/2);
    drawFootball(0,250);
}

function moveBallToGoalRed()
{
    var destiX=0;
    var destiY=250;

    clearball(ball_X,ball_Y);
    drawFootball((ball_X-destiX)/8,(ball_Y-destiY)/8);
    //clearball((ball_X-destiX)/8,(ball_Y-destiY)/8);
    drawFootball((ball_X-destiX)/7,(ball_Y-destiY)/7);
    //clearball((ball_X-destiX)/7,(ball_Y-destiY)/7);
    drawFootball((ball_X-destiX)/6,(ball_Y-destiY)/6);
    //clearball((ball_X-destiX)/6,(ball_Y-destiY)/6);
    drawFootball((ball_X-destiX)/5,(ball_Y-destiY)/5);
    //clearball((ball_X-destiX)/5,(ball_Y-destiY)/5);
    drawFootball((ball_X-destiX)/4,(ball_Y-destiY)/4);
    //clearball((ball_X-destiX)/4,(ball_Y-destiY)/4);
    drawFootball((ball_X-destiX)/3,(ball_Y-destiY)/3);
    //clearball((ball_X-destiX)/3,(ball_Y-destiY)/3);
    drawFootball((ball_X-destiX)/2,(ball_Y-destiY)/2);
    //clearball((ball_X-destiX)/2,(ball_Y-destiY)/2);
    drawFootball(0,250);
}

function Game()
{
    reset_values();
    InitializeGame();
    stopper = setInterval(movePlayer,interval);
        
}

function terminationRed()
{               
            var report= scoreRed;
            clearInterval(stopper);
            ctx.clearRect(0,0,800,600);
            ctx.beginPath();
            ctx.rect(2, 2, 798, 498);
            ctx.fillStyle = 'Green';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.font = "50px Georgia";
            ctx.fillStyle="black";
            ctx.fillText("Game Over!!! ", 250, 200);
            ctx.fillStyle="Red";
            ctx.fillText("Winner Team Red"+report , 250, 300); 
            ctx.closePath();
}

function terminationBlue()
{           
            var report= scoreBlue;
            clearInterval(stopper);
            ctx.clearRect(0,0,800,600);
            ctx.beginPath();
            ctx.rect(2, 2, 798, 498);
            ctx.fillStyle = 'Green';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.font = "50px Georgia";
            ctx.fillStyle="black";
            ctx.fillText("Game Over!!! ", 250, 200);
            ctx.fillStyle="Blue";
            ctx.fillText("Winner Team Blue"+report , 250, 300); 
            ctx.closePath();
    
}

Game();
