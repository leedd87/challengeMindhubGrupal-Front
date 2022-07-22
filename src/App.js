import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Account from './components/Account';
import AdminForm from './components/AdminForm';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Details from './pages/Details'
import shoesActions from './redux/actions/shoesActions';

function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(shoesActions.getShoes())
		// eslint-disable-next-line
	}, [])
	
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/account' element={<Account />} />
				<Route path='/adminForm' element={<AdminForm />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/' element={<Home />} />
				<Route path='/details/:id' element={<Details />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
