import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories, getServices } from "../../store/actions/index"

const Filters = ({ services }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.allCategories);

    const [servicesC, setServices]= useState([]);
    const [categoryId, setCategoryId]= useState('');
    /*
    const services = categories.map((s) => s.services);
    const serviceCategory = services.map((s) => {
      return s.map((ss) => {
        return ss.category
      })
    })

    const serviceName = services.map((s) => {
      return s.map((ss) => {
        return ss.name
      })
    })
    const obj = Object.assign({}, serviceName);

    const array = categories;

    const arrayC = array.map((a) => {
      if (a._id === serviceCategory) {
        a.services = obj
      }

      return a;
    })
    */
    const handleClick = (e) => {
      const IDcategory = e.target.value;
      setCategoryId(IDcategory);

      const serviceFilter = services.map((s) => {
        return s.filter((f) => f.category === categoryId)
      });
      setServices(serviceFilter);
    }

    useEffect(() => {
      dispatch(getServices());
      dispatch(getAllCategories());
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
                <option value={ss.id} id={ss.category}>
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