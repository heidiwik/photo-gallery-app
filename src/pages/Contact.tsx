import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Contact() {
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
				{'Contact us for more information'}
			</Typography>
			<Typography variant='body1'>{'We would love to hear from you!'}</Typography>
		</Box>
	);
}
