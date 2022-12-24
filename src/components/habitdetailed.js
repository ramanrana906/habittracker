import React from 'react'
import { useSelector } from 'react-redux';
import Habitmarker from './Habitmarker'

const Habitdetailed = () => {
  // FETCHING THE STATE FROM THE STORE
    const list = useSelector((state) =>state.HabitReducer.habitlist)
  return (
    <div className='habit-detailed'>
    <h1>Habits Details</h1>


    <div className='habitd'>
    {
    list.map((item) =>{
     return (<Habitmarker
    title={item.data.title}
    
        />)
    
        })
   }
   </div>
    </div>
  )
}

export default Habitdetailed