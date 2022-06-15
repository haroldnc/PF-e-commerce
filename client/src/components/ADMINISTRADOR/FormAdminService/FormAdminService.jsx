import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllServices, postService, putServices, deleteService } from '../../../store/actions/index'
import Swal from 'sweetalert2'

import { ContainerFormCategory, NameC, FormCategory, DivInput, Btn, LabelC, InputC, SelectC, SpanC } from './FormAdminService'

const FormAdminServices = () => {


    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllServices())
    },[])
    const dispatch = useDispatch()
    const Categorias = useSelector(state => state.allCategories)
    const Services = useSelector(state => state.allservices)
        const[ estado, setEstado ] = useState({
        name:"",
        img:"",
        category: ""
    })

    const[ modificar, setModificar ] = useState({
        name: "",
        img: ""
    })

    const [ selectModificar , setSetModificar ] = useState("")

    const[ selectEliminar , setSetEliminar] = useState("")

    
    const handleChange = (e) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }

    const handleCrear = (e) =>{
        setEstado({
            ...estado,
            category: e.target.value
        })
    }

    const handleChangeSelect = (e) =>{
        setSetModificar(e.target.value)
    }

    const handleChangeModi = (e) => {
        setModificar({
            ...modificar,
            [e.target.name]: e.target.value
        })
    }
    const handleEliminar = (e) => {
        setSetEliminar(e.target.value)
        console.log(selectEliminar)
    }

    const submitCrear = (e) => {
        e.preventDefault()
        if(estado.name && estado.img && estado.category){
            // dispatch(postService(estado))
            console.log(estado)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El servicio ha sido creada correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            setEstado({
                name:"",
                img:"",
                phrase:""
            })
        }else{Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tienes algun dato erróneo!',
            footer: ''
          })
        }
    }

    const submitModificar = (e) => {
        e.preventDefault()
        if(modificar.name && modificar.img && selectModificar){
            // dispatch(putServices(modificar,selectModificar))
            console.log(selectModificar)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El servicio ha sido creada correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              setModificar({
                name:"",
                img:""
            })
        }else{Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tienes algun dato erróneo!',
            footer: ''
          })
        }
    }

    const submitEliminar = (e) =>{
        e.preventDefault()

        if(selectEliminar){
            Swal.fire({
                title: 'Estas seguro?',
                text: "Tu servicio se eliminará inmediatamente",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Eliminada correctamente!',
                    'Se ha eliminado el servicio',
                    'success'
                  )
            // dispatch(deleteService(selectEliminar))
            console.log('funca')
                }
            })
        }else{Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tienes algun dato erróneo!',
            footer: ''
          })
        }
    }



    return(
        <ContainerFormCategory>
            <div>
                <NameC>Crea un nuevo servicio</NameC>
            </div>
            <hr/>
            <FormCategory>
                <form onSubmit={(e) => submitCrear(e)}>
                    <DivInput>
                    <LabelC>Nombre del servicio</LabelC>
                        <InputC 
                        type="text"
                        name="name"
                        value={estado.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese el nombre"
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Imagen del servicio</LabelC>
                        <InputC 
                        type="text"
                        name="img"
                        value={estado.img}
                        placeholder="Ingrese la imagen"
                        onChange={(e) => handleChange(e)}
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>¿A que categoría pertenece?</LabelC>
                    <SelectC onChange={(e) => handleCrear(e)}> 
                        <option>Selecciona una categoría</option>
                        {
                            Categorias && Categorias.map( c => (
                            <option key={c._id}value={c._id}>{c.name}</option>
                            ))
                        }
                    </SelectC>
                    </DivInput>
                    <Btn type="submit">CREAR</Btn>
                </form>
            </FormCategory>
            <div>
                <NameC>Modifica un servicio existente</NameC>
            </div>
            <hr/>
            <FormCategory>
                <DivInput>
                    <LabelC>¿Que servicio se modificará?</LabelC>
                    <SelectC onChange={(e) => handleChangeSelect(e)}> 
                        <option>Selecciona una categoría</option>
                        {
                            Services && Services.map( c => (
                            <option key={c._id}value={c._id}>{c.name}</option>
                            ))
                        }
                    </SelectC>
                </DivInput>
                <form onSubmit={(e) => submitModificar(e)}>
                    <DivInput>
                    <LabelC>Nombre del servicio</LabelC>
                        <InputC 
                        type="text"
                        name="name"
                        value={modificar.name}
                        onChange={(e) => handleChangeModi(e)}
                        placeholder="Ingrese el nombre"
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Imagen del servicio</LabelC>
                        <InputC 
                        type="text"
                        name="img"
                        value={modificar.img}
                        placeholder="Ingrese la imagen"
                        onChange={(e) => handleChangeModi(e)}
                        />
                    </DivInput>
                    <Btn type="submit">MODIFICAR</Btn>
                </form>
            </FormCategory>
            <div>
                <NameC>Elimina un servicio existente</NameC>
            </div>
            <hr/>
            <FormCategory>
                <DivInput>
                    <LabelC>¿Que servicio deseas eliminar?</LabelC>
                    <SelectC onChange={(e) => handleEliminar(e)}> 
                        <option>Selecciona un servicio</option>
                        {
                            Services && Services.map( s => (
                                <option key={s._id} value={s._id}>{s.name}</option>
                            ))
                        }
                    </SelectC>
                    <Btn onClick={(e) => submitEliminar(e)}>ELIMINAR</Btn>
                </DivInput>
            </FormCategory>
        </ContainerFormCategory>
    )
}

export default FormAdminServices