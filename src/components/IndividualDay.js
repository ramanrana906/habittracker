import React, { useState } from 'react'


// SETTING THE STATUS OF EACH DAY
const IndividualDay = (props) => {
   
    const [marked,setMarked] = useState("Status")

    const handleChange =(e) =>{

        setMarked(e.target.value);
        
       
    }


  return (
    <div className="individual" >
    <div><h6>{props.title}</h6></div>
    <select  onChange={handleChange} >
                  <option value="select">Status</option>
                  <option className='truem' value="Done">Done</option>
                  <option  className='falsem'value="Not Done">Not Done</option>
                  <option value="Pending">Pending</option>
               </select>
    <p><h6>{marked}</h6></p>
    </div>
   
  )
}

export default IndividualDay