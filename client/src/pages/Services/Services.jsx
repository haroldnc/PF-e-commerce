import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Page, NameServ, Wrapper } from "./StyledServices";
import Paginate from "../../components/Paginate/Paginate";
import CardPublication from "../../components/CardPublication/CardPublication";
import {
  getPosts,
  getPostsByServiceId,
  getServiceById,
} from "../../store/actions/index";
import { useParams } from "react-router-dom";

const Services = () => {
  const AllServices = (num) => {
    let obj = [];
    for (let i = 0; i <= num; i++) {
      obj.push({
        id: i + 1,
        imagen:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164606953/original/e5e2d7acf977f44fd8d280cae281e776b15497d9.jpg",
        imgProfile:
          "data:image/jpeg;base64,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",
        nameProfile: "webgrl80",
        descTrabajo:
          "I will design, redesign professional, modern wordpress website",
        rating: 4.5,
        pay: 50,
      });
    }
    return obj;
  };

  const Publicaciones = AllServices(27);
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);
  console.log(service)
  const servicePosts = useSelector((state) => state.servicePosts);
  const [pageAnt, setPageAnt] = useState(0);
  const [pagePost, setPagePost] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getServiceById(id));
    dispatch(getPostsByServiceId(id));
  }, [dispatch, id]);

  let pageslice = servicePosts.slice(pageAnt, pagePost);

  const prevPage = () => {
    if (currentPage > 1) {
      pages(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numberPages.length) {
      pages(currentPage + 1);
    }
  };

  let numberPages = [];
  for (let i = 0; i < Math.ceil(servicePosts.length / 15); i++) {
    numberPages.push(i + 1);
  }

  const pages = (page) => {
    console.log("ejecutado");

    let cant = 15;
    if (page === 1) {
      setPageAnt(0);
      setPagePost(cant);
    } else if (page > 1) {
      setPageAnt(cant * (page - 1));
      setPagePost(cant * page);
    }
    setCurrentPage(page);
  };

  if (service) {
    return (
      <Page>
        <Wrapper>
          <NameServ>{service?.name}</NameServ>

          <Grid>
            <CardPublication pageslice={pageslice} />
          </Grid>
          <Paginate
            pages={pages}
            numberPages={numberPages}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          />
        </Wrapper>
      </Page>
    );
  }else{
    return (
      <div>
        Nada
      </div>)
  }
};

export default Services;
