 import { Controller } from "@hotwired/stimulus"
 import { Chart, registerables } from 'https://cdn.skypack.dev/chart.js';

 Chart.register(...registerables)

// Connects to data-controller="dashboard"

 export default class extends Controller {
     static values = { revenue: Array }

     initialize() {
         const data = this.revenueValue.map((item) => item[1]/10.0)
         const labels = this.revenueValue.map((item) => item[0])

         const ctx = document.getElementById('revenueChart')

         new Chart(ctx, {
             type: 'line',
             data: {
                 labels: labels,
                 datasets: [{
                     label: 'Revenue $',
                     data: data,
                     borderWidth: 3,
                     fill: true
                 }]
             },
             options: {
                 plugins: {
                     legend: {
                         display: true
                     }
                 },
                 scales: {
                     x: {
                         grid: {
                             display: true
                         }
                     },
                     y: {
                         border: {
                             dash: [5, 5]
                         },
                         grid: {
                             color: "#d4f3ef"
                         },
                         beginAtZero: true
                     }
                 }
             }
         })

     }
 }