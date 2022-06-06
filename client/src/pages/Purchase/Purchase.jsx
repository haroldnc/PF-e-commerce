import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../store/actions'
import { Container } from './StyledPurchase'

const Purchase = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postDetail)

  useEffect(() => {
    dispatch(getPostById(id))
  }, [dispatch, id])
  return (
    <Container>
      {
        post && (<div>
          <p>{post.title}</p>
        </div>)
      }
    </Container>
  )
}

export default Purchase