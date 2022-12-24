import React from 'react'
import logo from '../components/Habit.jpeg';
import Habitundetailed from './habitundetailed';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {

  const list = useSelector((state) =>state.HabitReducer.habitlist)

  const navigate = useNavigate();

  const gotoAdd = () =>
  {
    navigate('/add')
  }


  return (
   
    <div className='home-container'>
    <div className='image-Home'>
    <img src={logo} alt="Logo"  />
    </div>

    <div className='habit-list'>
    <h2>Your Habits</h2>
   {
    list.map((item) =>{
     return (<Habitundetailed
     id= {item.id}
    title={item.data.title}
    why={item.data.why}
        />)
    
        })
   } 
 
    
      
    </div>

    <div className='add-habit-btn'>
    <button onClick={() => gotoAdd()} class="btn btn-secondary">Add new Habit</button>
    </div>
    </div>
    


  )
}

export default Home