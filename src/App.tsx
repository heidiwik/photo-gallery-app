// import { useState } from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import { PageLayout } from './pages/PageLayout';
import News from './pages/SharePointNews';
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

const Pages = (): React.JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<FrontPage />} />
			<Route path='/Frontpage' element={<FrontPage />} />
			<Route path='/News' element={<News />} />
			<Route path='/Photos' element={<Photos />} />
			<Route path='/Contact' element={<Contact />} />
			<Route path='/AboutUs' element={<AboutUs />} />
		</Routes>
	);
};

function App() {
	return (
		<Router>
			<PageLayout>
				<Pages />
			</PageLayout>
		</Router>
	);
}

export default App;
