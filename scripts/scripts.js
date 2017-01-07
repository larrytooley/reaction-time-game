var start = new Date().getTime();
                
function makeShapeAppear() {

    var topOffset = Math.random() * 400,
        leftOffset = Math.random() * 400,
        red = Math.floor(Math.random() * 255) + 1,
        green = Math.floor(Math.random() * 255) + 1,
        blue = Math.floor(Math.random() * 255) + 1,
        size = Math.floor(Math.random() * 150) + 50,
        circleOrSquare =  Math.random();


    if (circleOrSquare >= 0.5) {
        document.getElementById('shape').style.borderRadius = "50%";
    } else {
        document.getElementById('shape').style.borderRadius = "0%";
    }


    document.getElementById('shape').style.top = topOffset + "px";
    document.getElementById('shape').style.left = leftOffset + "px";

    document.getElementById('shape').style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.getElementById('shape').style.width = size + "px";
    document.getElementById('shape').style.height = size + "px";

    document.getElementById('shape').style.display = 'block';

    start = new Date().getTime();
}


function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 500);
}


appearAfterDelay();

document.getElementById('shape').onclick = function () {

    document.getElementById('shape').style.display = 'none';

    var end = new Date().getTime(),
        timeTaken = (end - start) / 1000;

    document.getElementById('timeTaken').innerHTML = timeTaken + 's';

    appearAfterDelay();

};

// footer
var today = new Date();
var year = today.getFullYear();
var copyright = '&copy; ' + year + ' Larry Tooley';


document.getElementById('copyright').innerHTML = copyright;
