import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postPublish, getServices } from "../../store/actions/index";
import { useHistory } from "react-router-dom";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { UploadImage } from "./styledPublishForm";

const PublishForm = () => {
  const dispatch = useDispatch();
  const histoy = useHistory();
  const categories = useSelector((state) => state.allCategories);
  const services = useSelector((state) => state.services);
  const [servicesC, setServices]= useState([]);

  const handleClick = (e) => {
    const IDcategory = e.target.value;
    const serviceFilter = services.map((s) => {
      return s.filter((f) => f.category === IDcategory)
    });
    setServices(serviceFilter);
  }

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    service: "",
    img: ""
  });

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

  const dropArea = document.querySelector(".drag-area");
  const showFile = () => {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an image file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
          // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
        // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute //adding that created img tag inside dropArea container
      }
      fileReader.readAsDataURL(file);
    }else{
      alert("This is not an Image File!");
      dropArea.classList.remove("active");
    }
  }
  let file;

  const InputImageChange = () => {
    file = this.files[0];
    dropArea.classList.add("active");
    showFile()
  }

  const ButtonClick = () => {
    dropArea.querySelector("input").click();
  }

  const DragImage = (e) => {
    e.preventDefault()
    dropArea.classList.add("active");
  }

  const DragleaveImage = () => {
    dropArea.classList.remove("active");
  }

  const DropImage = (e) => {
    e.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = e.dataTransfer.files[0];
    showFile(); //calling function
  }

  const handleSubmit = (e) => {
    if (!input.title || !input.description || !input.price || !input.category || !input.service) return alert("You must complete the form");
    
    e.preventDefault();
    dispatch(postPublish(input));
    setInput({
      title: "",
      description: "",
      price: "",
      service: "",
      img: ""
    });

    alert("Your publication was created!");
    dispatch(getServices());
    histoy("/home");
  };

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Create a new pokemon</h1>
      <div></div>
      <div>
          <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={input.title}
          />
          {/*errors.name && <p className={style.errors}>{errors.name}</p>*/}
      </div>

      <div>
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
              <option>SERVICIOS</option>
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
      </div>

      <div>
          <input
              type="text"
              placeholder="Descripcion"
              name="description"
              onChange={handleInputChange}
              value={input.description}
          />
          {/*errors.height && <p className={style.errors}>{errors.height}</p>*/}
      </div>

      <UploadImage>
        <div className='drag-area' onDragOver={(e) => DragImage(e)} onDragLeave={DragleaveImage} onDrop={(e) => DropImage(e)}>
        <AiOutlineCloudUpload className='uploadLogo'/>
          <h4>Drop image</h4>
          <span>OR</span>
          <button className='buttonImage' onClick={ButtonClick}>Browse File</button>
          <input
              type="file"
              placeholder="Image"
              name="image"
              onChange={InputImageChange}
              value={input.img}
          />
        </div>
          {/*errors.image && <p className={style.errors}>{errors.image}</p> */}
      </UploadImage>

      <div>
          <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleInputChange}
              value={input.price}
          />
          {/*errors.weight && <p className={style.errors}>{errors.weight}</p>*/}
      </div>
      <button>Create</button>
          
  
  </form>
    </div>
  );
};

export default PublishForm;