var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
]

var valores = [
    2102, 2299, 4299, 3170, 4201, 5277, 5302
]
const ctx = document.getElementById("myChart")

const labels = meses

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(103, 169, 243)',
        borderColor: 'rgb(21, 60, 234)',
        data: valores,
        label: "Projeção de lucro"
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    },
  };

  const myChart = new Chart(ctx, config)