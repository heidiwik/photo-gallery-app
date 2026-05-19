import type { IList } from '../interfaces/IList';
import type { IListItem } from '../interfaces/IListItem';
import type { ISite } from '../interfaces/ISite';
import { SpLocation } from '../enums/SpLocation';
import UrlUtils from '../utils/UrlUtils';
import { getClientCredentialsToken } from '../msalConfig';

export default class GraphService {
	private static async get(url: string): Promise<any> {
		const token = await getClientCredentialsToken();
		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	}

	// private static async post(url: string, body: string): Promise<any> {
	// 	const token = await getClientCredentialsToken();
	// 	const response = await fetch(url, {
	// 		method: 'POST',
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 		},
	// 		body: body,
	// 	});

	// 	if (!response.ok) {
	// 		throw new Error(`HTTP error! status: ${response.status}`);
	// 	}

	// 	return response.status === 204 || response.status === 202 ? response : await response.json();
	// }


	public static async getSite(webUrl: string | null): Promise<ISite> {
		if (webUrl === null) {
			return await this.get('https://graph.microsoft.com/v1.0/sites/root');
		}
		webUrl = UrlUtils.getUrl(webUrl, SpLocation.Site);
		const ref: string = webUrl.replace('https://', '').replace('.sharepoint.com', '.sharepoint.com:');
		return this.get(`https://graph.microsoft.com/v1.0/sites/${ref}`);
	}

	public static async getList(webUrl: string, siteId: string | null = null): Promise<IList> {
		if (siteId === null) {
			siteId = (await this.getSite(webUrl)).id;
		}
		const lists: IList[] = (await this.get(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists`)).value;
		return lists.filter((list) => UrlUtils.equals(list.webUrl, webUrl))[0];
	}

	public static async getListItems(webUrl: string, listId: string): Promise<IListItem[] | null> {
		console.log(`Getting list items for list ID: ${listId} at web URL: ${webUrl}`);

		const site: ISite = await this.getSite(webUrl);
		console.log(`Fetched site ID: ${site.id}`);

		const list: IList = await this.getList(webUrl, site.id);
		console.log(`Fetched list with ID: ${list.id} and web URL: ${list.webUrl}`);
		try {
			return (
				await this.get(`https://graph.microsoft.com/v1.0/sites/${site.id}/lists/${listId}/items?$expand=fields`)
			).value;
		} catch {
			return null;
		}
	}
}
