var barData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Card Deliveries Past 7 Days",
      fillColor: "rgba(84,184,71,1.0)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(98,209,82,1)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

var lineData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Calls Past 7 Days",
      fillColor: "rgba(220,220,220,0.4)",
      strokeColor: "rgba(55,118,187,1)",
      pointColor: "rgba(55,118,187,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(55,118,187,1)",
      data: [4, 5, 9, 6, 4, 5, 1]
    }
  ]
};



var ctx = document.getElementById("myBarChart").getContext("2d");
var ctx2 = document.getElementById("myLineChart").getContext("2d");

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRation = true;
Chart.defaults.global.showTooltips = true;
Chart.defaults.global.showScale = false;
Chart.defaults.global.scaleShowLabels = true;
Chart.defaults.global.scaleStartValue = 0;
Chart.defaults.global.tooltipFontFamily = 'Open Sans';



// BAR CHART
var myBarChart = new Chart(ctx).Bar(barData, {
  scaleBeginAtZero : true,
  scaleShowGridLines : true,
  scaleGridLineColor : "rgba(0,0,0,.05)",
  scaleGridLineWidth : 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: false,
  barShowStroke : false,
  barStrokeWidth : 2,
  barValueSpacing : 5,
  barDatasetSpacing : 1
});

// LINE CHART
var myLineChart = new Chart(ctx2).Line(lineData, {
  bezierCurve : true,
  scaleBeginAtZero: true,
  pointDotRadius : 5,
  pointDotStrokeWidth : 2,
  pointHitDetectionRadius : 10
});











