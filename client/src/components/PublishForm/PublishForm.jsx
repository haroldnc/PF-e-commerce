import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postPublish, getServices } from "../../store/actions/index";
import { useHistory } from "react-router-dom";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { UploadImage, PublishFormSection, InputImage, InputsDivs, Form } from "./styledPublishForm";

const PublishForm = () => {
  const dispatch = useDispatch();
  const histoy = useHistory();
  const categories = useSelector((state) => state.allCategories);
  const services = useSelector((state) => state.services);
  const [servicesC, setServices]= useState([]);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    service: "",
    img: ""
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

    /*
    setErrors(validateForm({
        ...input,
        [e.target.name]: e.target.value
    }));
    */
};

  const handleSubmit = (e) => {
  
    e.preventDefault();
    console.log(input)
    dispatch(postPublish(input));
    setInput({
      title: "",
      description: "",
      price: "",
      service: "",
      img: ""
    });

    alert("Your publication was created!");
  };
// ---------------------------------------------------------------------

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <PublishFormSection>
      <h1>Crea tu Publicacion!</h1>
      <Form onSubmit={handleSubmit}>
      <InputsDivs>
        <h3>Titulo</h3>
          <input
            type="text"
            placeholder="Name"
            name="title"
            onChange={handleInputChange}
            value={input.title}
          />
          {/*errors.name && <p className={style.errors}>{errors.name}</p>*/}
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
              <option>SERVICIO</option>
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
                      <option value={ss.name} id={ss.category} key={ss._id}>
                        {ss.name}
                      </option>
                    )
                  })
                })
              }
          </select>
          {/*errors.type1 && <p className={style.errors}>{errors.type1}</p>*/}
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
          {/*errors.height && <p className={style.errors}>{errors.height}</p>*/}
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
        {/*errors.image && <p className={style.errors}>{errors.image}</p> */}
      </InputImage>

      <InputsDivs>
        <h3>Precio</h3>
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            value={input.price}
          />
          {/*errors.weight && <p className={style.errors}>{errors.weight}</p>*/}
      </InputsDivs>
      <button>Publicar</button>
    </Form>
    </PublishFormSection>
  );
};

export default PublishForm;