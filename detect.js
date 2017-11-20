var cam;
var detector;
var classifier=objectdetect.frontalface;
var faces;

function setup()
{
	createCanvas(windowWidth,windowHeight);
	var scaleFactor=1.0;
	detector=new objectdetect.detector(width,height,scaleFactor, classifier);
	cam=createCapture(VIDEO, function(cam){
		faces=detector.detect(cam.canvas);
	});
	cam.size(width,height);
}
function draw() {
    image(cam, 0, 0, width, height);
    stroke(255);
    noFill();
    if (faces) {
        faces.forEach(function (face) {
            var count = face[4];
            if (count > 4) { // try different thresholds
                rect(face[0], face[1], face[2], face[3]);
            }
        })
    }
}
