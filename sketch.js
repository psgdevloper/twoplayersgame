var hypnoticball,database,position;


function setup(){
    database = firebase.database()
    console.log(database)
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticballposition = database.ref('ball/position')
    hypnoticballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val()
    console.log(position.x);
  hypnoticball.x = position.x;
  hypnoticball.y = position.y;
}
function showError(){
    console.log("Error in writing to the database");
  }
