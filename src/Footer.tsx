import { Box, Typography } from '@mui/material';

function Footer() {
	return (
		<Box
			component='footer'
			sx={{
				// break out of the max-width #root / Container so the footer spans the viewport like the AppBar
				width: '100vw',
				position: 'relative',
				left: '50%',
				transform: 'translateX(-50%)',
				mt: 'auto',
				py: 3,
				px: 2,
				borderTop: '1px solid #545454',
				bgcolor: 'grey',
				color: '#FFE8E8',
				textAlign: 'center',
			}}>
			<Typography variant='body2' sx={{ fontFamily: '"Lato", sans-serif' }}>
				{
					'This application is used for security training and may contain known vulnerabilities. Do not use this repository in production or expose it to the public internet.'
				}
			</Typography>
		</Box>
	);
}

export default Footer;
