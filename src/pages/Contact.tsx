import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useEffect } from 'react';

export default function Contact() {
	// VULNERABILITY: DOM-based XSS - CodeQL alert: js/xss-through-dom
	function displayUserGreeting() {
		const params = new URLSearchParams(window.location.search);
		const username = params.get('name');
		if (!username) return;
		document.getElementById('greeting')!.innerHTML = '<h2>Welcome, ' + username + '!</h2>';
		console.log("Hello, world!");
	}

	useEffect(() => {
		displayUserGreeting();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '60vh',
				p: 4,
			}}>
			<div id="greeting"></div>
			<Typography variant='h3' component='h1' gutterBottom>
				{'Contact us for more information'}
			</Typography>
			<Typography variant='body1'>{'We would love to hear from you!'}</Typography>
		</Box>
	);
}
