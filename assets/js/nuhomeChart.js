var data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
  datasets: [
    {
      label: "Card Deliveries Past 7 Days",
      fillColor: "rgba(84,184,71,1.0)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(98,209,82,1)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65]
    }
  ]
};

var ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRation = true;
Chart.defaults.global.showTooltips = true;
Chart.defaults.global.showScale = false;
Chart.defaults.global.scaleShowLabels = true;

// BAR CHART
var myBarChart = new Chart(ctx).Bar(data, {
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