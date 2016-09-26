function setup() {
  createCanvas (400, 400);
  background (0);
}

function draw() {
  for (var a = 30; a <= 370; a = a + 10){
    var x = a;
    var y = a;
    line (30, y, x, 30);
    line (x, 370, 370, y);
    stroke (255);
  }
}
