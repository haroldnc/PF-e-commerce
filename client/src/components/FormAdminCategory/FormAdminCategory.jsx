import React,{useState} from "react";

import { ContainerFormCategory, NameC, FormCategory, DivInput, Btn, LabelC, InputC, SelectC, SpanC } from './FormAdminCategory'

const FormAdminCategory = () => {

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
                    <SelectC> 
                        <option>Selecciona una categoría</option>

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
                    <SelectC onChange={() => handleEliminar()}> 
                        <option>Selecciona una categoría</option>

                    </SelectC>
                    <Btn onClick={(e) => submitEliminar(e)}>ELIMINAR</Btn>
                </DivInput>
            </FormCategory>
        </ContainerFormCategory>
    )
}

export default FormAdminCategory