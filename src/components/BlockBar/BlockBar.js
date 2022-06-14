import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import '../BlockBar/BlockBar.css'

const BlockBar = ({axisX, axisY}) => {
    return <div>
        <div className='barBox'>
            <Bar 
            data={{
                labels: axisX,
                datasets: [{
                    label: 'block chart',
                    data: axisY,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ]
                }],
            }}
            height={300}
            width={900}
            />
        </div>
    </div>
}

export default BlockBar