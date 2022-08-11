import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/3rd-page(Add Word)';
import Main from './Components/1st-page(Main)';
import User from './Components/2nd-page(User)';
import Admin from './Components/2nd-page(Admin)';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/I'm%20admin" element={<Admin/>}></Route>
        <Route path="/I'm%20a%20User" element={<User/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/2nd' element={<Admin/>}></Route>
      </Routes>
  );
}

export default App;
