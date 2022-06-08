import React,{ useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsersAllPAginate, getWorkers, getPosts } from '../../../store/actions/index.js'
import { Doughnut } from 'react-chartjs-2'

import { ContainerDashboard, Number, Name, Usuarios, CardsDatos, Tabla, Datos, ImgProv } from './Dashboard.js'

import { CgProfile } from 'react-icons/cg'
import { GrUserWorker } from 'react-icons/gr'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsFillFilePostFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'


const Dasboard = () => {

    const dispatch = useDispatch()

    const Registrados = useSelector(state => state.allUsersPaginate)
    const Workers = useSelector(state => state.workers)
    const Posts = useSelector(state => state.posts)
    console.log('registrado',Registrados)

    useEffect(() => {
        dispatch(getAllUsersAllPAginate())
        dispatch(getWorkers())
        dispatch(getPosts())
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
                            <GrUserWorker/>
                        </div>
                    </IconContext.Provider>
                    <Number>{Workers.length === 0 ? "Cargando..." : Workers.length}</Number>
                    <Name>Workers</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <BsFillFilePostFill/>
                        </div>
                    </IconContext.Provider>
                    <Number>{ Posts.length === 0 ? "Cargando..." : Posts.length}</Number>
                    <Name>Publicaciones</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiTakeMyMoney/>
                        </div>
                    </IconContext.Provider>
                    <Number>0</Number>
                    <Name>Activos</Name>
                </CardsDatos>
            </Datos>
            <Tabla>
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
            <ImgProv src="https://static.anychart.com/images/gallery/v8/pie-and-donut-charts-donut-chart.png" alt="" />
            </Tabla>

        </ContainerDashboard>
    )
}

export default Dasboard