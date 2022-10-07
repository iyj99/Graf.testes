var xmlhttp = new XMLHttpRequest();
var url= "http://localhost/chartjs/js/valorgf.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        // console.log(data);
        var meses = data.valorgf.map(function(elem){
            return elem.mes;
        });
        //console.log(meses)
        var valores = data.valorgf.map(function(elem){
            return elem.valor;
        });

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
    }
}
