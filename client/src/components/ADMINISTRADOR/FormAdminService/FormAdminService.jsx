import React,{useState} from "react";

import { ContainerFormCategory, NameC, FormCategory, DivInput, Btn, LabelC, InputC, SelectC, SpanC } from './FormAdminService'

const FormAdminServices = () => {

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

    
    console.log('renderice')
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
    const handleEliminar = (e) => {
        setSetEliminar(e.target.value)
        console.log(selectEliminar)
    }

    const submitCrear = (e) => {
        e.preventDefault()
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
                    <SelectC> 
                        <option>Selecciona una categoría</option>

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
                    <LabelC>¿A que categoría pertenecerá?</LabelC>
                    <SelectC> 
                        <option>Selecciona una categoría</option>

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
                    <SelectC onChange={() => handleEliminar()}> 
                        <option>Selecciona un servicio</option>

                    </SelectC>
                    <Btn onClick={(e) => submitEliminar(e)}>ELIMINAR</Btn>
                </DivInput>
            </FormCategory>
        </ContainerFormCategory>
    )
}

export default FormAdminServices