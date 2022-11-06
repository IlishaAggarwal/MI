import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Model from './pages/model';
import Payment from './pages/payment';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/model' element={<Model/>} />
		<Route path='/payment' element={<Payment/>} />

	</Routes>
	</Router>
);
}

export default App;
