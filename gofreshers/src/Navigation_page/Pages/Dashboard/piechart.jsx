import {   Chart as ChartJS, ArcElement,Tooltip,Legend } from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function Piechart(){
    const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:['aqua','orange']
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };
return(
    <div style={{
     padding:'20px',
     width:'100%',
    }}>
        <Pie
          data={data}
        ></Pie>
    </div>)
}

export default Piechart