import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import type { IListItem } from '../interfaces/IListItem';
import GraphService from '../services/GraphService';
import UrlUtils from '../utils/UrlUtils';
import sharepointIcon from '../assets/sharepoint-icon.png';

export default function News() {
	const webUrl: string = import.meta.env.SHAREPOINT_SITE_URL || '';
	const listId: string = import.meta.env.SHAREPOINT_LIST_ID || '';

	useEffect(() => {
		// console.log('Fetching SharePoint list items...');

		const fetchItems = async () => {
			const items: IListItem[] = (await GraphService.getListItems(webUrl, listId)) || [];

			const listItems: any = items.map((item) => {
				const fileName: string = item.fields['FileLeafRef'];
				return {
					src: `${UrlUtils.getUrl(webUrl, 2)}`,
					alt: fileName,
					name: fileName,
				};
			});
			console.log('Fetched SharePoint list items:', listItems);
		};

		fetchItems();
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
			<img src={sharepointIcon} alt='SharePoint' style={{ width: 160, height: 160, marginBottom: 16 }} />
			<Typography variant='h3' component='h1' gutterBottom>
				SharePoint - News
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 3,
					mt: 2,
					maxWidth: '1200px',
					justifyContent: 'center',
				}}>
				In development... check back later
			</Box>
		</Box>
	);
}
