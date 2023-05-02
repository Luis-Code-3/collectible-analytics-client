import styles from './lineChart.module.css'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip} from 'chart.js'
import { useRef, useState, useEffect } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip
)


function LineChart({datedTransactions}) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
              grid: {
                color: 'rgba(0,0,0, 0.3)', // Red grid lines with 0.1 opacity
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.5)', // Red ticks (axis labels)
              },
              // ... other x-axis options
            },
            y: {
              grid: {
                color: 'rgba(0,0,0, 0.3)', // Blue grid lines with 0.1 opacity
              },
              ticks: {
                callback: function (value) {
                    return '$' + value.toLocaleString('en-US');
                  },
                color: 'rgba(255, 255, 255, 0.5)', // Blue ticks (axis labels)
              },
              min: 0,
              // ... other y-axis options
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y;
                  return label + ': $' + value.toLocaleString('en-US');
                },
              },
            },
          },
      };

    return (
        <Line className={styles.analBox}
        data={{
            labels: datedTransactions.slice().reverse().map(tran => tran.date_sold),
            datasets: [{
                label: "Sale Price",
                data: datedTransactions.slice().reverse().map(tran => tran.salePrice),
                backgroundColor: 'rgba(30, 219, 175)',
                borderColor: 'rgb(30, 219, 175, .8)',
                pointRadius: 5,
            }]
        }}

        options={options}

        />
    );
  }
  
  export default LineChart;