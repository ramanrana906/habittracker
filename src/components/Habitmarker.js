import React from 'react'
import moment from 'moment';
import IndividualDay from './IndividualDay';

const Habitmarker = (props) => {

   
   // iNDIVIDUAL eLEMENT FOR EACH dAY
   // FETCHING PREVIOUS SEVEN DAYS fOR THE WEEK vIEW

        let days = [];
        let today = moment();
        for (let i = 0; i < 7; i++){
         let day = today.subtract(i, 'days');
         days.push(day.format('dddd'));
            }


  
  return (
    <div className='habit-marker'>

    <div><h3>{props.title}</h3></div>
 
    <div className='daysofweek'>
    {days.map((item) =>{
        return(
            <div className="days " >

            <IndividualDay
              title={item}
            />
            </div>
           
        )
    })}
    </div>
 

    </div>
  )
}

export default Habitmarker