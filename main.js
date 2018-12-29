
var ctx;
var canvas;
let cornerRadius = 200;
let rectWidth;
let rectHeight = 500;
let rectWidthRadius;
let rectHeightRadius;
let rectY = 75;
let yCorner = rectY+(cornerRadius/2);

function setUp(){
    canvas = document.getElementById("canvas");
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    ctx = canvas.getContext("2d");
    rectWidth = (canvas.width/3 - 20);
    rectWidthRadius = rectWidth - cornerRadius;
    rectHeightRadius = rectHeight - cornerRadius;
    setInterval(buildClock,1000);
}
function buildClock() {

    addBoxes(ctx);
    addNumbers(ctx);
}
function addBoxes(ctx) {

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineJoin = "round";
    ctx.lineWidth = cornerRadius;

    for(var i = 0; i<3; i++){
        ctx.strokeRect(((i*(canvas.width/3)) + 10 )+(cornerRadius/2), yCorner, rectWidthRadius, rectHeightRadius);
        ctx.rect(((i*(canvas.width/3)) + 10)+(cornerRadius/2), yCorner, rectWidthRadius, rectHeightRadius);
    }

    ctx.fill();
}

function addNumbers(ctx) {

    ctx.font = (canvas.width/3)/2 +"px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    var factor= rectWidthRadius/2;
    var fact = rectHeightRadius + 50;
    var now = new Date();

    var hour = now.getHours();
    hour %= 12;

    ctx.fillText(hour.toString(),(10+(cornerRadius/2)) + factor, fact);

    var min = now.getMinutes();
    ctx.fillText(min.toString(), ((canvas.width/3) + 10 )+(cornerRadius/2) + factor, fact);

    var sec = now.getSeconds();
    ctx.fillText(sec.toString(), (2 * (canvas.width/3) + 10)+(cornerRadius/2)+ factor, fact);

}