function setup() {
  createCanvas (400, 400);
  background (0);
}

function draw() {
  for (var a = 20; a <= 380; a = a + 20){
    var loc = a;
    ellipseMode (RADIUS);
    fill (255);
    ellipse (loc, loc, 10, 10);
  }
}
