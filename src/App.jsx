import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import UserList from './components/user/UserList'


function App() {

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }


  return (
    <>
      <UserList />
      <div>
        <button
          aria-label="Increment value"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>

    </>
  )
}

export default App
