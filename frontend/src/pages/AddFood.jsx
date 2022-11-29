import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ItemForm from '../components/ItemForm'
import ItemItem from '../components/ItemItem'
import Spinner from '../components/Spinner'
import { getItems, reset } from '../features/items/itemSlice'

function AddFood() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getItems())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Add</h1>
        <p>Enter food details</p>
      </section>

      <ItemForm />

    </>
  )
}

export default AddFood
