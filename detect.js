var cam;
var detector;
var classifier=objectdetect.frontalface;
var faces;

function setup()
{
	createCanvas(windowWidth,windowHeight);
	var scaleFactor=1.5;
	detector=new objectdetect.detector(width,height,scaleFactor, classifier);
	cam=createCapture(VIDEO);
	cam.size(width,height);
}
function draw() {
//    image(cam, 0, 0, width, height);
	var img;
    img.copy(cam,0,0,width,height,0,0,width,height);
        img.loadPixels();
    faces=detector.detect(img.canvas);
    stroke(255);
    noFill();
	console.log(faces.length);
	ellipse(width/2,height/2,20*faces.length+50, 20*faces.length+50);
    if (faces) {
        faces.forEach(function (face) {
            var count = face[4];
            if (count > 4) { // try different thresholds
                rect(face[0], face[1], face[2], face[3]);
            }
        })
    }
}
