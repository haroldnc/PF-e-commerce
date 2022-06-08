import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, postCategories } from "../../../store/actions";

import Swal from 'sweetalert2'
import { ContainerFormCategory, NameC, FormCategory, DivInput, Btn, LabelC, InputC, SelectC, SpanC } from './FormAdminCategory'

const FormAdminCategory = () => {

    const dispatch = useDispatch()
    const Categorias = useSelector(state => state.allCategories) 

    const[ estado, setEstado ] = useState({
        name:"",
        img:"",
        phrase:""
    })

    const[ modificar, setModificar ] = useState({
        name: "",
        img: "",
        phrase:""
    })

    const[ selectEliminar , setSetEliminar] = useState("")
    const[ selectModificar, setSetModificar ] = useState("")

    
    useEffect(() => {
        dispatch(getAllCategories())
    },[])

    const handleChange = (e) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeModi = (e) => {
        setModificar({
            ...modificar,
            [e.target.name]: e.target.value
        })
    }

    const handleModificar = (e) =>{
        setSetModificar(e.target.value)
    }

    const handleEliminar = (e) => {
        setSetEliminar(e.target.value)
        console.log(selectEliminar)
    }

    const submitCrear = (e) => {
        e.preventDefault()
        if(estado.name && estado.img && estado.phrase){
            // postCategories(estado)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La categoría ha sido creada correctamente',
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
    }

    const submitEliminar = (e) =>{
        e.preventDefault()
    }



    return(
        <ContainerFormCategory>
            <div>
                <NameC>Crea una nueva categoría</NameC>
            </div>
            <hr/>
            <FormCategory>
                <form onSubmit={(e) => submitCrear(e)}>
                    <DivInput>
                    <LabelC>Nombre de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="name"
                        value={estado.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese el nombre"
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Imagen de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="img"
                        value={estado.img}
                        placeholder="Ingrese la imagen"
                        onChange={(e) => handleChange(e)}
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Descripción corta de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="phrase"
                        value={estado.phrase}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese una frase"
                        />
                    </DivInput>
                    <Btn type="submit">CREAR</Btn>
                </form>
            </FormCategory>
            <div>
                <NameC>Modifica una categoría existente</NameC>
            </div>
            <hr/>
            <FormCategory>
                <DivInput>
                    <LabelC>¿Que categoría deseas modificar?</LabelC>
                    <SelectC onChange={(e) => handleModificar(e)}> 
                        <option>Selecciona una categoría</option>
                        {
                            Categorias && Categorias.map( c => (
                                <option key={c._id}value={c._id}>{c.name}</option>
                            ))
                        }
                    </SelectC>
                </DivInput>
                <form onSubmit={(e) => submitModificar(e)}>
                    <DivInput>
                    <LabelC>Nombre de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="name"
                        value={modificar.name}
                        onChange={(e) => handleChangeModi(e)}
                        placeholder="Ingrese el nombre"
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Imagen de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="img"
                        value={modificar.img}
                        placeholder="Ingrese la imagen"
                        onChange={(e) => handleChangeModi(e)}
                        />
                    </DivInput>
                    <DivInput>
                    <LabelC>Descripción corta de la categoría</LabelC>
                        <InputC 
                        type="text"
                        name="phrase"
                        value={modificar.phrase}
                        onChange={(e) => handleChangeModi(e)}
                        placeholder="Ingrese una frase"
                        />
                    </DivInput>
                    <Btn type="submit">MODIFICAR</Btn>
                </form>
            </FormCategory>
            <div>
                <NameC>Elimina una categoría existente</NameC>
            </div>
            <hr/>
            <SpanC>Si eliminas una categoría, tambien eliminarás todos los servicios asociados</SpanC>
            <FormCategory>
                <DivInput>
                    <LabelC>¿Que categoría deseas eliminar?</LabelC>
                    <SelectC onChange={(e) => handleEliminar(e)}> 
                        <option>Selecciona una categoría</option>
                        {
                            Categorias && Categorias.map( c => (
                                <option key={c._id}value={c._id}>{c.name}</option>
                            ))
                        }
                    </SelectC>
                    <Btn onClick={(e) => submitEliminar(e)}>ELIMINAR</Btn>
                </DivInput>
            </FormCategory>
        </ContainerFormCategory>
    )
}

export default FormAdminCategory