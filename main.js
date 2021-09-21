function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', statusA);
}

function statusA() {
  console.info('Model Loded (Step-1 Cleared)');
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,Result);
}

function Result(error,Report) {
  if (error){
    console.error(error);
    console.warn(error);
  }
  else {
    console.info(Report);
    document.getElementById('Object').innerHTML = Report[0].label;
    document.getElementById('Accuracy').innerHTML = Report[0].confidence.toFixed(3);
  }
}