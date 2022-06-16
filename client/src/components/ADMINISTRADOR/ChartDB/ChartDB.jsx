import React, {useState} from "react";
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const ChartDB = ({chartData, Registrados, Workers, Posts, allHirings}) =>{
    console.log('registrados',Registrados )

    // const[ estado1, setEstado1 ] =useState(Registrados === undefined ? 1 : Registrados.users.length)
    // const[ estado2, setEstado2 ] =useState(Workers ?  Workers.length : 2)
    // const[ estado3, setEstado3 ] =useState(Workers ? Workers.filter( w => w.subscribed === true).length : 3)
    // const[ estado4, setEstado4 ] =useState(Posts ? Posts.Publications.length : 4)
    // const[ estado5, setEstado5 ] =useState(allHirings ?   allHirings.length : 5)
    // const[ estado6, setEstado6 ] =useState(allHirings ? allHirings.filter( w => w.status === true).length : 6)


     const [ userData , serUserData ] = useState({
        labels: ["Registrados","Publicaciones","Workers","Activos","Contratos","Contratos cerrados"],
        datasets: [{
            label: "Datos",
            backgroundColor: [
                '#05668d',
                '#212121',
                '#00a896',
                '#00A6B4',
                '#79dabc'
              ],
            data: [32,66,12,8,20,1]
        },]
    })

    return( 
        <div>
            <Bar data={userData}/>
        </div>
    )
}

export default ChartDB