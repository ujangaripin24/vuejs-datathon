<template>
    <div>
        <Header />
        <div class="ml-4 mb-4">
          <h2>Data Kepala Keluarga</h2>
          <Bar :chart-data="chartData" />
          
          <Footer />
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '@/components/Footer.vue';

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    name: 'app',
    components: {
        Header,
        Footer,
        Bar,
    },  data() {
    return {
      chartData: {
        labels: [ '2018', '2020', '2021'],
        datasets: [
          {
            label: 'Data Kepala Keluarga',
            backgroundColor: '#4BB543',
            data: [775222, 794296, 775222]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.hide {
  visibility: hidden !important;
}
</style>