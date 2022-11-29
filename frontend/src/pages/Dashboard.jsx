import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ItemForm from '../components/ItemForm'
import ItemItem from '../components/ItemItem'
import Spinner from '../components/Spinner'
import { getItems, reset } from '../features/items/itemSlice'

function Dashboard() {
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
        <h1>Hello {user && user.name}!</h1>
        <p>Your food list</p>
      </section>

      <div className='form-group'>
          <button type='submit' className='btn btn-block'>
              +
          </button>
      </div>

      <section className='content'>
        {items.length > 0 ? (
          <div className='items'>
            {items.map((item) => (
              <ItemItem key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <h3>There are no items in your Fridge</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
