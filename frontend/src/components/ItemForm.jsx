import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createItem } from '../features/items/itemSlice'
import { useNavigate } from 'react-router-dom'

function ItemForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navigatetoDashboard = () => {
    navigate('/')
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createItem({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Food Name</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button onClick = {navigatetoDashboard} className='btn btn-block' type='submit'>
            +
          </button>
        </div>
      </form>
    </section>
  )
}

export default ItemForm
