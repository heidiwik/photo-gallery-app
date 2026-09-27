import React from 'react';
// import BasicMenu from '../Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ResponsiveAppBar from '../Menu';
import Footer from '../Footer';

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
	return (
		<Container
			sx={{
				maxWidth: '100%',
				fontFamily: '"Lato", sans-serif',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
			}}
			maxWidth={false}>
			<Box sx={{ width: '100%', marginBottom: '5em' }}>
				<ResponsiveAppBar />
			</Box>
			<Box sx={{ my: 4, color: '#545454', fontFamily: '"Lato", sans-serif', textAlign: 'center', flexGrow: 1 }}>
				<div className='page-content'>{props.children}</div>
			</Box>
			<Footer />
		</Container>
	);
};
