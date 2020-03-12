<template>
  <div class="graph box">
    <div id="chart">
      <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'graph',
  data: () => ({
    chartOptions: {
      chart: {
        type: 'donut',
      },
      labels: ["Very bad", "Bad", "Normal", "Good", "Very good"],
      fill: {
        colors: ['#db1212', '#db7312', '#fff200', '#ddff00', '#22ff00']
      },
      legend: {
        markers: {
          fillColors: ['#db1212', '#db7312', '#fff200', '#ddff00', '#22ff00']
        }
      },
      responsive: [{
        breakpoint: 480,
          options: {
            chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#db1212', '#db7312', '#fff200', '#ddff00', '#22ff00']
            }
          }
        }
      }]
    },
  }),
  computed: {
    series() {
      let list = this.$store.state.events;
      let satisfationsArr = [0, 0, 0, 0, 0];
      list.map((el) => {
        satisfationsArr[el.satisfaction] += 1;
      })
      return satisfationsArr;
    }
  }
}
</script>
