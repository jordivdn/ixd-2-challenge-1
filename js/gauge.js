 var minMeter = Gauge(
  document.getElementById("minMeter"), {
    min: 1,
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: 0,
    value: 0,
     color: function(value) {
        if(value < 100) {
          return "#BB86FC";
        }else if(value < 50) {
          return "#BB86FC";
        }else if(value < 75) {
          return "#BB86FC";
        }else {
          return "#BB86FC";
        }
      }
  }
);

var thrustVisual = Gauge(
  document.getElementById("thrustVisual"), {
    max: 100,
    dialStartAngle: -90,
    dialEndAngle: -90.001,
    value: 0,
    label: function(value) {
      return Math.round(value);
    }
  }
);

    (function loop() {
  var value = Math.random() * 100;
  var valueFixed = '92';

  // setValueAnimated(value, durationInSecs);
  thrustVisual.setValueAnimated(valueFixed, 3);
  minMeter.setValueAnimated(100 - value, 2);
  window.setTimeout(loop, 5000);
})();


