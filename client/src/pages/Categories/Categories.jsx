import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getCategorybyId } from '../../store/actions/index'
import CardSevices from '../../components/CardSevices/CardSevices';
import Filters from '../../components/Filters/Filters'
import { Container, Services, Name, Banner, ContainerBanner, ContainerFilter, Div, Name_filter, Checkbox, Label } from './StyledCategories'


const Categories = () => {

const history = useHistory()
 const dispatch = useDispatch()
 const category = useSelector(state => state.category)
 const allCategories = useSelector(state => state.allCategories)
 const {id} = useParams()
 const [ localId , setLocalId ] = useState([id])

 useEffect(() => {
   dispatch(getCategorybyId(id))
 },[dispatch])
console.log('id',localId)
 const filterCategoty = allCategories.filter( c => localId.find(id => id === c._id))
 console.log('filtrado',filterCategoty)

 const handleChanges = (e) => {
    console.log('handle', e.target.value)
    const result = localId.includes(e.target.value)
    console.log('resultado',result)

    localId.includes(e.target.value) ? 
    setLocalId(localId.filter( f => f !== e.target.value)) :
    setLocalId([...localId, e.target.value])


 }
 
  return (
    <Container>
      <ContainerBanner>
        <Banner src={category.img} />
        <Name>{category.name}</Name>
      </ContainerBanner>
      <Div>
        <ContainerFilter>
          <Name_filter>Categorias</Name_filter>
            {allCategories && allCategories.map( c => {
              if(c === localId[0]) {
                return(
                  <Checkbox key={c._id}>
                <input type="checkbox" id="Categorias" name="Categorias" value={c._id} onChange={(e) => handleChanges(e)} checked="true" />
                <Label>{c.name}</Label>
            </Checkbox>
                )
              } return (
                <Checkbox key={c._id}>
                <input type="checkbox" id="Categorias" name="Categorias" value={c._id} onChange={(e) => handleChanges(e)} />
                <Label>{c.name}</Label>
            </Checkbox>
              )
            
            
          })}
        </ContainerFilter>
        <Services>
          {filterCategoty.length > 0 ? filterCategoty.map(f => f.services.map( s => (
            <div key={s._id}>
              <CardSevices id={s._id} name={s.name} img={"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"}/>
            </div>
          ))) : "none"}
        </Services>
      </Div>
      
    </Container>
  );
};

export default Categories;
