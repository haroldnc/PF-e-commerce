import React, { useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getServices } from '../../store/actions/index'

import Carousel from '../../components/Carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Presentation from '../../components/Presentation/Presentation'
import Testimonials from '../../components/Testimonials/Testimonials'
import LogosHome from '../../components/LogosHome/LogosHome'
import Filters from '../../components/Filters/Filters'

const Home = () => {

  const allCategories = useSelector(state => state.allCategories);
  const services = useSelector(state => state.services)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getServices())
  },[dispatch])

  return (
    <>
      <Hero />
      <Carousel />
      <Presentation />
      <LogosHome allCategories={allCategories} />
      <Testimonials/>
      <Filters services={services}/>
    </>
  )
}

export default Home