import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Add = () => {

    const Submit = ()=>{
        if(document.getElementsByClassName('word')[0].value){
            alert("The Word is Added to Dictionary");
        }
        else{
            alert("Please Enter the Word");
        }
    }
  return (
    <div className='main'>
        <h1>Please Enter Number and It's Definition</h1>
        <input className='word' placeholder='Enter the wortd!'></input>
        <textarea className='word' placeholder='Enter the meaning of the Word!'></textarea>
        <div className='buttons'>
            <button className='submit' onClick={Submit}>Submit</button>
            <Link to='/2nd'><button className='submit'>Previous</button></Link>
        </div>
    </div>
  )
}

export default Add