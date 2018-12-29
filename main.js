
var ctx;
var canvas;
function setUp(){
    canvas = document.getElementById("canvas");
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    ctx = canvas.getContext("2d");
    setInterval(buildClock,1000);
}
function buildClock() {
    //ctx.rect(x,y,w,h);

    addedBoxes(ctx);
    addNumbers(ctx);
}
function addedBoxes(ctx) {

    ctx.beginPath();

    ctx.rect(10,150,canvas.width/3 - 20,500);

    ctx.rect( (canvas.width/3) + 10,150,canvas.width/3-20,500);

    ctx.rect(2 * (canvas.width/3) + 10,150,canvas.width/3 - 20,500);

    ctx.fillStyle = "white";
    ctx.fill();

    ctx.fill();
}

function addNumbers(ctx) {
    ctx.font = (canvas.width/3)/2 +"px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    var now = new Date();

    var hour = now.getHours();
    hour %= 12;

    ctx.fillText(hour.toString(),canvas.width/4 - 100, 425);

    var min = now.getMinutes();
    ctx.fillText(min.toString(), canvas.width/2, 425);

    var sec = now.getSeconds();
    ctx.fillText(sec.toString(), 3 *canvas.width /4 + 100, 425);

}