import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
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
				{'Welcome to photo gallery'}
			</Typography>
			<Typography variant='body1' sx={{ color: '#7a7a7a', mt: 3, mb: 1, fontSize: '1.1rem' }}>
				{
					'This app is a demo project for learning purposes. It is used for security training and may contain known vulnerabilities.'
				}
			</Typography>
			<Typography variant='body1' sx={{ color: '#7a7a7a', mb: 2, fontSize: '1.1rem' }}>
				{'The app is safe to use locally, but should not be deployed to a public environment.'}
			</Typography>
			<Typography variant='body1' sx={{ color: '#7a7a7a', mb: 2, mt: 2,fontSize: '1.4rem' }}>
				{'Grab a coffee and '}
				<MuiLink
					component={RouterLink}
					to='/Photos'
					sx={{
						color: '#caa0a5',
						fontWeight: 700,
						textDecoration: 'none',
						'&:hover': {
							color: '#d8b1b7',
							textDecoration: 'underline',
						},
					}}>
					{'browse the photos'}
				</MuiLink>
				{' — enjoy the view!'}
			</Typography>
		</Box>
	);
}
