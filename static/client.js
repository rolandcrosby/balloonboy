var letters = {
  a: { filename: "a.png", width: 92, height: 102 },
  b: { filename: "b.png", width: 70, height: 95 },
  c: { filename: "c.png", width: 80, height: 100 },
  d: { filename: "d.png", width: 78, height: 100 },
  e: { filename: "e.png", width: 59, height: 92 },
  f: { filename: "f.png", width: 59, height: 96 },
  g: { filename: "g.png", width: 88, height: 104 },
  h: { filename: "h.png", width: 84, height: 101 },
  i: { filename: "i.png", width: 30, height: 96 },
  j: { filename: "j.png", width: 69, height: 94 },
  k: { filename: "k.png", width: 89, height: 100 },
  l: { filename: "l.png", width: 64, height: 96 },
  m: { filename: "m.png", width: 83, height: 97 },
  n: { filename: "n.png", width: 81, height: 96 },
  o: { filename: "o.png", width: 84, height: 93 },
  p: { filename: "p.png", width: 72, height: 90 },
  q: { filename: "q.png", width: 92, height: 103 },
  r: { filename: "r.png", width: 79, height: 96 },
  s: { filename: "s.png", width: 69, height: 101 },
  t: { filename: "t.png", width: 86, height: 100 },
  u: { filename: "u.png", width: 76, height: 96 },
  v: { filename: "v.png", width: 91, height: 95 },
  w: { filename: "w.png", width: 88, height: 90 },
  x: { filename: "x.png", width: 90, height: 84 },
  y: { filename: "y.png", width: 85, height: 92 },
  z: { filename: "z.png", width: 80, height: 91 },
  " ": { width: 30, height: 90 }
};

function update() {
  var el = document.querySelector(".input");
  var text = el.value.toLowerCase();
  text = text.replace(/[^a-z \n]/g, "");
  if (text.length > 0) {
    el.value = text.toUpperCase();
    var lines = text.split("\n");
    var contents = "";
    var maxWidth = 0;
    for (var l = 0; l < lines.length; l++) {
      contents += '<div class="line">';
      var width = 0;
      var chars = lines[l].trim().split("");
      for (var c = 0; c < chars.length; c++) {
        var char = chars[c];
        if (char == " ") {
          contents += '<div class="letter letter--space">&nbsp;</div>';
        } else {
          contents +=
            '<div class="letter letter--' + char + '">' + char + "</div>";
        }
        console.log();
        width += letters[char].width;
      }
      if (width > maxWidth) {
        maxWidth = width;
      }
      contents += "</div>";
    }
    var container = document.querySelector(".lines");
    container.innerHTML = contents;
    var scale = 1.0;
    if (maxWidth > 580) {
      scale = 580.0 / maxWidth;
    }
    container.style.transform = "scale(" + scale + ")";
  }
}

function updateColor(key, val) {
  switch (key) {
    case "balloons":
      addRule(
        ".letter {background-color: rgba(" +
          Math.round(val.rgb[0]) +
          "," +
          Math.round(val.rgb[1]) +
          "," +
          Math.round(val.rgb[2]) +
          ",0.6) !important}"
      );
      break;
    case "wall":
      addRule(
        ".brick {background-color: " + val.toRGBString() + " !important}"
      );
      break;
  }
  console.log(key, val);
}

var sheet;
function addRule(text) {
  console.log(text);
  sheet.insertRule(text, sheet.cssRules.length);
}

window.onload = function() {
  update();
  var styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  sheet = styleEl.sheet;
};
