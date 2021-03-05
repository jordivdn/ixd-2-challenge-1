var ctx = document.getElementById('distanceLijndiagram');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'miles traveled (x 1M) ',
            data: [6, 18, 36, 52, 80],
            backgroundColor: [
                'rgba(255, 255, 255, 0.1)',
                'rgba(187, 134, 252, 0.5)',
                'rgba(187, 134, 252, 0.5)',
                'rgba(187, 134, 252, 0.5)',
                'rgba(187, 134, 252, 0.5)',
                'rgba(187, 134, 252, 0.5)',
            ],
            borderColor: [
                  'rgba(187, 134, 252, 0.5)',
                  'rgba(187, 134, 252, 0.5)',
                  'rgba(187, 134, 252, 0.5)',
                  'rgba(187, 134, 252, 0.5)',
                  'rgba(187, 134, 252, 0.5)',
                  'rgba(187, 134, 252, 0.5)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'rgba(255, 255, 255, 0.87)',
                fontSize: 14
            }
        }
    }
});