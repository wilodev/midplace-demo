export interface OAuthResponse {
	access_token: string;
	token_type: string;
	expires_in?: number;
	refresh_token?: string;
	scope?: string;
}

export interface User {
	id: string;
	email: string;
	name: string;
}
