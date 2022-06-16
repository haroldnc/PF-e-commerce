import React,{ useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsersAllPAginate, getWorkers, getPosts, getAllHirings } from '../../../store/actions/index.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDB from '../ChartDB/ChartDB.jsx'

import { ContainerDashboard, Number, Name, Usuarios, CardsDatos, Tabla, Datos, ImgProv, CardsDatosColor } from './Dashboard.js'

import { CgProfile } from 'react-icons/cg'
import { GrUserWorker } from 'react-icons/gr'
import { GiTakeMyMoney,GiShakingHands } from 'react-icons/gi'
import { BsFillFilePostFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { FaFileSignature } from 'react-icons/fa'


const Dasboard = () => {

    const dispatch = useDispatch()
    

    const Registrados = useSelector(state => state.allUsersPaginate)
    const Workers = useSelector(state => state.workers)
    const Posts = useSelector(state => state.posts)
    const allHirings = useSelector(state => state.allHirings)
    console.log('result',Registrados)
    // const [ userData , serUserData ] = useState({
    //     labels: [1,2,3,4,5,6],
    //     datasets: [{
    //         label: "Datos",
    //         data: [Registrados !== undefined ? Registrados.users.length : 1,
    //                 Workers ?  Workers.length : 2,
    //                 Workers ? Workers.filter( w => w.subscribed === true).length : 3,
    //                 Posts ? Posts.Publications.length : 4,
    //                 allHirings ?   allHirings.length : 5,
    //                 allHirings ? allHirings.filter( w => w.status === true).length : 6
    //             ]
    //     },]
    // })
    console.log('registrado',Registrados)

    useEffect(() => {
        dispatch(getAllUsersAllPAginate())
        dispatch(getWorkers())
        dispatch(getPosts())
        dispatch(getAllHirings())
    },[])


    const state = {
        labels: ['January', 'February', 'March','April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      }

    return (
        <ContainerDashboard>
            <Datos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <CgProfile/>
                        </div>
                    </IconContext.Provider>
                    <Number>{Registrados === undefined ? "Cargando..." : Registrados.users.length}</Number>
                    <Name>Registrados</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <BsFillFilePostFill/>
                        </div>
                    </IconContext.Provider>
                    <Number>{ Posts.length === 0 ? "Cargando..." : Posts.Publications.length}</Number>
                    <Name>Publicaciones</Name>
                </CardsDatos>
                <CardsDatos>
                    <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GrUserWorker/>
                        </div>
                    </IconContext.Provider>
                    <Number>{Workers.length === 0 ? "Cargando..." : Workers.length}</Number>
                    <Name>Workers</Name>
                </CardsDatos>
                <CardsDatosColor>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiTakeMyMoney/>
                        </div>
                    </IconContext.Provider>
                    <Number>{Workers.length === 0 ? "Cargando..." : Workers.filter( w => w.subscribed === true).length}</Number>
                    <Name>Activos</Name>
                </CardsDatosColor>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiShakingHands/>
                        </div>
                    </IconContext.Provider>
                    <Number>{allHirings === undefined ? "Cargando..." : allHirings.length}</Number>
                    <Name>Contratos Totales</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <FaFileSignature/>
                        </div>
                    </IconContext.Provider>
                    <Number>{allHirings === undefined? "Cargando..." : allHirings.filter( w => w.status === true).length}</Number>
                    <Name>Contratos cerrados</Name>
                </CardsDatos>
            </Datos>
                <Tabla>
                    <ChartDB 
                        // chartData={userData}
                        Registrados={Registrados}
                        Workers={Workers}
                        Posts={Posts}
                        allHirings={allHirings}
                    />
                    {/* <div>
                    <Doughnut
                        data={state}
                        options={{
                            title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                    />
                    </div> */}
                {/* <ImgProv src="https://static.anychart.com/images/gallery/v8/pie-and-donut-charts-donut-chart.png" alt="" /> */}
                </Tabla>

            
        </ContainerDashboard>
    )
}

export default Dasboard