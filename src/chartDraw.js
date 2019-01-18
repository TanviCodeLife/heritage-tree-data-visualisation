import Chart from 'chart.js';


export function drawChart(treeData){
    const ctx = document.getElementById('myChart').getContext('2d');

    let dataArray  = [0,0,0,0,0,0,0];
    for(let i = 0; i < treeData.length; i++){
      if (treeData[i].circumf >= 0 && treeData[i].circumf <= 5){
        dataArray[0] ++;
      }
      else if (treeData[i].circumf > 5 && treeData[i].circumf <= 10){
        dataArray[1] ++;
      }
      else if (treeData[i].circumf > 10 && treeData[i].circumf <= 15){
        dataArray[2] ++;
      }
      else if (treeData[i].circumf > 15 && treeData[i].circumf <= 20){
        dataArray[3] ++;
      }
      else if (treeData[i].circumf > 20 && treeData[i].circumf <= 25){
        dataArray[4] ++;
      }
      else if (treeData[i].circumf > 25 && treeData[i].circumf <= 30){
        dataArray[5] ++;
      }
      else{
        dataArray[6] ++;
      }
    }
    console.log(dataArray);
    const config = {
      type: 'bar',
      data: {
        labels: ["0 - 5in", "5 - 10in", "10 - 15in", "15 - 20in", "25 - 30in", "35+ in"],
        datasets: [{
          label: '# of Trees',
          data: dataArray,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        legend: {
					position: 'top',
          display: false
				},
				title: {
					display: true,
					text: 'Tree Circumference'
				},
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    }

    let myChart = new Chart(ctx, config);

  }


  export function drawDoughnutChart(dataArray){
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
		var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: dataArray,
					backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
					],
					label: 'Height'
				}],
				labels: [
					'0 - 50ft',
					'50 - 100ft',
					'100 - 150ft',
					'150+'
				]
			},
			options: {
				responsive: false,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Tree Height'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};
    let myDoughnutChart = new Chart(ctx, config);
  }

  export function doughnutData(treeData){
    let dataArray  = [0,0,0,0];
    for(let i = 0; i < treeData.length; i++){
      if (treeData[i].height >= 0 && treeData[i].height <= 50){
        dataArray[0] ++;
      }
      else if (treeData[i].height > 50 && treeData[i].height <= 100){
        dataArray[1] ++;
      }
      else if (treeData[i].height > 100 && treeData[i].height <= 150){
        dataArray[2] ++;
      }
      else{
        dataArray[3] ++;
      }
    }
    return dataArray;
  }
