import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AboutUs() {
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
