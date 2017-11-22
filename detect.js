var cam;
var img;
var detector;
var classifier=objectdetect.frontalface;
var faces;

function setup()
{
	createCanvas(640,320);
	background(128);
	var scaleFactor=1.5;
	detector=new objectdetect.detector(width,height,scaleFactor, classifier);
	cam=createCapture(VIDEO);
	cam.size(width,height);
	img=new p5.Image(width,height);
	background(0);
}
function draw() {
	background(25);
	img.copy(cam,0,0,width,height,0,0,width,height);
    image(img, 0, 0, width, height);
//	background(25);
        img.loadPixels();
    faces=detector.detect(img.canvas);
    stroke("#00ff00");
    noFill();
	ellipse(width/2,height/2,20*faces.length+50, 20*faces.length+50);
    if (faces) {
        faces.forEach(function (face) {
            var count = face[4];
            if (count > 4) { // try different thresholds
                rect(face[0], face[1], face[2], face[3]);
            }
		console.log(count, face[0]);
        })
    }
}
