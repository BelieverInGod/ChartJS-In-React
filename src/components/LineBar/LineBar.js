import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import '../LineBar/LineBar.css'

const LineBar = ({axisX , axisY}) => {


    return <div>
        <div className='lineBox'>
            <Line 
            typeof='line'
            data={{
                labels: axisX,
                datasets: [{
                    label: 'Line',
                    data: axisY,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 100, 1)',
                       
                    ],
                }],
            }}
            height={300}
            width={900}
            />
        </div>
    </div>
}

export default LineBar