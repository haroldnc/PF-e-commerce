import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postPublish, getServices } from "../../store/actions/index";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { UploadImage, PublishFormSection, InputImage, InputsDivs, Form, Errors } from "./styledPublishForm";

const PublishForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.allCategories);
  const services = useSelector((state) => state.services);
  const userLogged = useSelector((state) => state.userSignIn);
  const userID = userLogged.userInfo.uid;

  const [servicesC, setServices]= useState([]);
  const [errors, setErrors] = useState({ name: "" });
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    service: "",
    img: "",
    user: `${userID}`
  });

// ----------------------- cloudinary -----------------------------
const upLoadImage = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "PGimages");
  setLoading(true);

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dk69jry82/image/upload",
    {
      method: "POST",
      body: data
    }
  );

  const file = await res.json();
  setImage(file.secure_url);
  console.log(file.secure_url);
  setInput({
    ...input,
    img: file.secure_url
  })
  setLoading(false);
}

// ---------------------- handles -----------------------------
  const handleClick = (e) => {
    const IDcategory = e.target.value;
    const serviceFilter = services.map((s) => {
      return s.filter((f) => f.category === IDcategory)
    });
    setServices(serviceFilter);
  }

  const handleInputChange = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });

  setErrors(validateForm({
    ...input,
    [e.target.name]: e.target.value
  }));
};

  const handleSubmit = (e) => {
    if (!input.title || !input.description || !input.price || !input.service) {  
      e.preventDefault()

      return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error',
      text: 'Complete todos los campos del formulario',
    })
  }
    e.preventDefault();
    console.log(input)
    dispatch(postPublish(input));
    setInput({
      title: "",
      description: "",
      price: "",
      service: "",
      img: "",
      user: ``
    });
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Genial',
      text: 'Tu publicacion a sido creada correctamente',
    })
    history.push('/')
  };
// ---------------------------------------------------------------------

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <PublishFormSection>
      <Form onSubmit={handleSubmit}>
      <InputsDivs>
        <h3>Titulo</h3>
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={handleInputChange}
            value={input.title}
          />
          {errors.title && <Errors>{errors.title}</Errors>}
      </InputsDivs>

      <InputsDivs>
          <h3>Categoria</h3>
          <select onChange={(e) => handleClick(e)}>
              <option>CATEGORIA</option>
              {
                categories && categories
                .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  }
                )

                .map((category) => {
                  return (
                    <option value={category._id} key={category._id} id={category._id}>
                      {category.name}
                    </option>
                  );
                })
              }
          </select>

          <select onChange={handleInputChange} value={input.service} name="service">
              <option value="servicio">SERVICIO</option>
              {
                servicesC && servicesC
                .sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                
                .map((s) => {
                  return s.map((ss) => {
                    return (
                      <option value={ss._id} id={ss.category} key={ss._id}>
                        {ss.name}
                      </option>
                    )
                  })
                })
              }
          </select>
          {errors.service && <Errors>{errors.service}</Errors>}
      </InputsDivs>

      <InputsDivs>
        <h3>Descripcion</h3>
          <textarea
            type="text"
            placeholder="Descripcion"
            name="description"
            onChange={handleInputChange}
            value={input.description}
          />
          {errors.description && <Errors>{errors.description}</Errors>}
      </InputsDivs>

      <InputImage>
        <h3>Imagen </h3>
          <UploadImage>
            <AiOutlineCloudUpload className='uploadLogo'/>
            <input
              name="img"
              type="file"
              onChange={upLoadImage}
            />
          </UploadImage> 
        {errors.img && <Errors>{errors.img}</Errors>}
      </InputImage>

      <InputsDivs>
        <h3>Precio</h3>
          <input
            type="number"
            placeholder="Precio"
            name="price"
            onChange={handleInputChange}
            value={input.price}
          />
          {errors.price && <Errors>{errors.price}</Errors>}
      </InputsDivs>
      <button>Publicar</button>
    </Form>
    </PublishFormSection>
  );
};

export function validateForm(input) {
  let errors = {};

  if (!input.title) {
    errors.title = "El titulo es requerido";
  };

  if (!input.img) {
    errors.img = "La imagen es requerida";
  };

  if (input.service === "servicio") {
    errors.service = "El servicio es requerido";
  };

  if (!input.description) {
    errors.description = "La descripcion es requerida";
  };

  if (!input.price) {
    errors.price = "El precio es requerido";
  } else if (input.price <= 0) {
    errors.price = "El precio tiene que ser minimo 1";
  };

  return errors;
};

export default PublishForm;