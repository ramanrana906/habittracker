import React from 'react'
import { deleteHabit } from './actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

// CRATING LIST OF HABITS FOR HOME pAGE
const Habitundetailed = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const gotodetail =() =>{
  navigate('/detail')
}


  return (
    <div className='habitUndetailed'>
    <div className="card w-100">
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.why}</p>
    <button onClick={() => gotodetail()} className="btn btn-secondary">View Details</button>
    <button  onClick={()=> dispatch(deleteHabit(props.id))} className="btn btn-secondary">Delete</button>
    </div>
    </div>
    </div>
  )
}

export default Habitundetailed