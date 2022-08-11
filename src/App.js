import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Add from './3rd-page(Add Word)';
import Main from './1st-page(Main)';
import Admin from './2nd-page(Admin)';
import User from './2nd-page(User)';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/I'm%20admin" element={<Admin/>}></Route>
        <Route path="/I'm%20a%20User" element={<User/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/2nd' element={<Admin/>}></Route> 
        <Route path="*" element={<Main/>}/>
      </Routes>
  );
}

export default App;
