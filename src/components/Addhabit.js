import React, { useState } from 'react'
import logo2 from '../components/habit2.png';
import { useDispatch } from 'react-redux';
import { addHabit } from './actions';
import { useNavigate } from 'react-router-dom';


const Addhabit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  // NAVIGATING TO DETAILS
  const gotodetail =() =>{
    navigate('/detail')
  }

 
// HANDLING FORM INPUT
  const[inputData,setInputData] =useState({
    title: "",
    why: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputData(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }


  const handleSubmit = (event) => {
    
    
    dispatch(addHabit(inputData));
   
    setInputData({
      title: "",
      why: ""
    });
    event.preventDefault();
 
 
  };

  return (
        <div className='add-habit-form'>

        <div className='image-Add'>
            <img src={logo2} alt="Logo"  />
            </div>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
         <label htmlFor="exampleInputEmail1"><h3>Habit you want to create</h3></label>
        <input type="text"
         className="form-control mt-4 mb-4"
         id="exampleInputEmail1"
         aria-describedby="emailHelp" placeholder="Enter Habit"
         name="title"
         onChange={handleChange}
         value={inputData.title}

          
         />
         </div>
         <div className="form-group">
         <label htmlFor="exampleInputEmail2"><h3>why you want to do this ?</h3></label>
          <input type="text"
         className="form-control mt-4 mb-4"
         id="exampleInputEmail2"
         aria-describedby="emailHelp" 
         placeholder="why ???"
         name="why"
        onChange={handleChange}
         value={inputData.why}

         
         />
         </div>
        <button type="submit" className="btn btn-secondary mt-4"
        
        >Submit</button>
        </form>

        <button onClick={() => gotodetail()} className="btn btn-secondary">View Details</button>
        </div>
  )
}

export default Addhabit