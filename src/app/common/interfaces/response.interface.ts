interface APIResponseDetail {
	status?: string;
	response?: string;
}

export interface APIResponse {
	detail?: APIResponseDetail;
}

export interface AccessTokenResponse extends APIResponse {
	access_token: string;
	refresh_token: string;
	expires_in?: number;
	token_type?: string;
}
