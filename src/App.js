import React from 'react'
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Account from './components/Account';
import AdminForm from './components/AdminForm';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/adminForm' element={<AdminForm/>}/>
      </Routes>
    </div>
  );
}

export default App;