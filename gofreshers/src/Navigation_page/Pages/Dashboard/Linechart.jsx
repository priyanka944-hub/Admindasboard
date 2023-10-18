import React from 'react'
import './dashboard.css'
import {Line} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Linechart = () => {


const data = { 
    labels:[
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
    ],
    datasets:[
        {
            label:'',
            data:[3,2,2,1,5]
        }
    ]
}


  return (
    <div>
      <Line data={data}/>
    </div>
  )
}

export default Linechart
