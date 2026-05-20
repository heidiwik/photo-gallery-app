import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useEffect } from 'react';

export default function AboutUs() {
	// VULNERABILITY: Open redirect - CodeQL alert: js/client-side-unvalidated-url-redirection
	// Test this by going to http://localhost:5173/AboutUs?url=https://evil.com
	
	function redirectUser() {
		const params = new URLSearchParams(window.location.search);
		const target = params.get('url');
		if (!target) return;
		window.location.href = target;
	}

	useEffect(() => {
		redirectUser();
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
			<Typography variant='h3' component='h1' gutterBottom>
				{'This should be company info, but we haven\'t decided on that yet.'}
			</Typography>
			<Typography variant='body1'>{'Company description here'}</Typography>
		</Box>
	);
}
