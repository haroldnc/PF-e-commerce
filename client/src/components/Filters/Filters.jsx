import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getServices } from "../../store/actions/index"

const Filters = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getServices())
  }, [dispatch]);

  return (
    <div>
      <h2>Categorias</h2>

      <select onChange={(e) => handleClick(e)}>
        <option value="select category">SELECT CATEGORY</option>
        {
          categories && categories
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })

          .map((category) => {
            return (
              <option value={category._id} key={category._id} id={category._id}>
                {category.name}
              </option>
            );
          })
        }
      </select>

      <select>
        <option>SELECT SERVICE</option>
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
    </div>
  );
};

export default Filters;