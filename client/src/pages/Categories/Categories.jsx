import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getCategorybyId } from '../../store/actions/index'
import CardSevices from '../../components/CardSevices/CardSevices';
import Filters from '../../components/Filters/Filters'
import { Container, Services, Name, Banner, ContainerBanner } from './StyledCategories'


const Categories = () => {

  
const history = useHistory()
 const dispatch = useDispatch()
 const category = useSelector(state => state.category)
 const {id} = useParams()

 useEffect(() => {
   dispatch(getCategorybyId(id))
 },[dispatch])
 
  return (
    <Container>
      <ContainerBanner>
        <Banner src={category.img} />
        <Name>{category.name}</Name>
      </ContainerBanner>
      <Services>
        {Object.entries(category).length > 1  ? category.services.map( s => (
          <div key={s._id}>
            <CardSevices name={s.name} img={"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"}/>
          </div>
        )) : "none"}
      </Services>
    </Container>
  );
};

export default Categories;
