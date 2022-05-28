import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories } from "../../store/actions/index"

const Filters = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.allCategories);

    useEffect(() => {
      dispatch(getAllCategories());
    }, [dispatch]);

  return (
    <div>
      <h2>Categorias</h2>

      <div>
        {
          categories && categories
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })

          .map((category) => {
            return (
              <div value={category.name} key={category.id}>
                <ul>
                  {
                    <li>
                      {category.name}
                      <ul>
                        <li>{category.services.name}</li>
                      </ul>
                    </li>
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Filters;