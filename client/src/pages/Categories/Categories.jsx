import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getCategorybyId } from '../../store/actions/index'
import CardSevices from '../../components/CardSevices/CardSevices';
import { Container, Services, Name, Banner, ContainerBanner } from './StyledCategories'


const Categories = () => {

  
const history = useHistory()
 const dispatch = useDispatch()
 const category = useSelector(state => state.category)
 const {id} = useParams()
console.log('state',category)
 console.log(id)

 useEffect(() => {
   dispatch(getCategorybyId(id))
 },[dispatch])

 
  return (
<<<<<<< HEAD
    <div>
      <Filters/>
      <Services/>
    </div>
  )
}

export default Categories
=======
    <Container>
      <ContainerBanner>
        <Banner src={"https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRldmVsb3BlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"} />
        <Name>{category.name}</Name>
      </ContainerBanner>
      <Services>
        {Object.entries(category).length > 1  ? category.services.map( (s,index) => (
          <div key={index}>
            <CardSevices  id={s._id} name={s.name} img={"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"}/>
          </div>
        )): "none"}
      </Services>
    </Container>
  );
};

export default Categories;
>>>>>>> b7cd8fc435ea948feab4b6cfcaab3116d9a14f77
