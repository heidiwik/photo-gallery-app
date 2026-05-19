import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import _ from 'lodash';

export default function FrontPage() {
	const [results, setResults] = useState<string[]>([]);

useEffect(() => {
	const photos = [
		{ id: 1, title: "Sunset", album: "Nature", likes: 42, featured: true },
		{ id: 2, title: "City lights", album: "Urban", likes: 18, featured: false },
		{ id: 3, title: "Mountain view", album: "Nature", likes: 35, featured: true },
		{ id: 4, title: "Street art", album: "Urban", likes: 27, featured: false },
		{ id: 5, title: "Waterfall", album: "Nature", likes: 53, featured: true },
	];

	// countBy / sumBy
	const totalLikes = _.sumBy(photos, "likes");

	setResults([
		` ${totalLikes}`,
	]);
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
				{'Welcome to my photo gallery!'}
			</Typography>
			{results.map((line, i) => (
				<Typography key={i} variant='body1'>Likes ❤️ {line}</Typography>
			))}
		</Box>
	);
}
