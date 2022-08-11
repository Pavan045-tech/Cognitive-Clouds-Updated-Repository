import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css';

const Admin = () => {
  return (
    <div className='main'>
        <h1>This is Admin Page</h1>
        <div className='buttons'>
        <Link to={'/add'}><button className='button'>Add a Word here!</button></Link>
        <Link to={"/I'm%20a%20User"}><button className='button'>search here!</button></Link>
        </div>
    </div>
  );
}

export default Admin