let numbs = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let h1 = 0;
let h2 = 0;
let min1 = 0;
let min2 = 0;
let s1 = 0;
let s2 = 0;

function setup() {
  createCanvas(850, 400);
}

function draw() {  
  background(0);
  clockDisplay(0x7E);
}

function getColor (numb) {
  let a = 255 * (numb & 1);
  let r = 255;
  let g = 0;
  let b = 0;
  return color(r, g, b, a);
}

function clockDisplay (val) {
  //fill(0)
  var sec = second(); // 0 - 56
  var min = minute(); // 0 - 59
  var h = hour();

  h1 = int(h / 10);
  h2 = h % 10;

  min1 = int(min / 10);
  min2 = min % 10;

  s1 = int(sec / 10);
  s2 = sec % 10;
  //s2 = sec % 10;

  stroke(0)
  first(numbs[h1], 25, 158)
  first(numbs[h2], 150, 158)
  
  fill(color(255, 0, 0))
  ellipse(260, 80, 20, 20)
  ellipse(260, 130, 20, 20)
  
  stroke(0)
  first(numbs[min1], 300, 158)
  first(numbs[min2], 425, 158)

  fill(color(255, 0, 0))
  ellipse(530, 80, 20, 20)
  ellipse(530, 130, 20, 20)
  
  stroke(0)
  first(numbs[s1], 570, 158)
  first(numbs[s2], 690, 158)  
}

function first (val, x, y) {
  fill(getColor(val >> 6));
  rect(x, y-148, 68, 18)
  // B
  fill(getColor(val >> 5));
  rect(x+70, y-140, 18, 68)

  // C
  fill(getColor(val >> 4));
  rect(x+70, y-58, 18, 68)

  // D
  fill(getColor(val >> 3));
  rect(x, y, 68, 18)

  // E
  fill(getColor(val >> 2));
  rect(x-20, y-58, 18, 68)

  // F
  fill(getColor(val >> 1));
  rect(x-20, y-140, 18, 68)
  // G
  fill(getColor(val >> 0));
  rect(x, y-76, 68, 18)
}