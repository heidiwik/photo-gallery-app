// WARNING: Using client secret in a browser app is insecure and for demo/learning only.
// In production, use a backend service with @azure/msal-node for client credential flows.

const tenantId = import.meta.env.VITE_TENANT_ID || 'common';
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

interface TokenResponse {
	access_token: string;
	expires_in: number;
	token_type: string;
}

let cachedToken: string | null = null;
let tokenExpiry: number = 0;

/**
 * Acquires an access token using the OAuth2 client credentials flow.
 * This calls the Azure AD token endpoint directly with client_id and client_secret.
 */
export async function getClientCredentialsToken(
	scope: string = 'https://graph.microsoft.com/.default',
): Promise<string> {
	// Return cached token if still valid (with 5 min buffer)
	if (cachedToken && Date.now() < tokenExpiry - 300000) {
		return cachedToken;
	}

	const body = new URLSearchParams({
		grant_type: 'client_credentials',
		client_id: clientId,
		client_secret: clientSecret,
		scope: scope,
	});

	const response = await fetch(tokenEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: body.toString(),
	});

	if (!response.ok) {
		const error = await response.text();
		throw new Error(`Token acquisition failed: ${response.status} ${error}`);
	}

	const data: TokenResponse = await response.json();
	cachedToken = data.access_token;
	tokenExpiry = Date.now() + data.expires_in * 1000;

	return cachedToken;
}
