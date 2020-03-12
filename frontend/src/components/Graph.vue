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
      responsive: [{
        breakpoint: 480,
          options: {
            chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
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
