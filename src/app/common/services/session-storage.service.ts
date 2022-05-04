import { Injectable } from '@angular/core';

import { StorageService } from '@app/common/services';

@Injectable({
	providedIn: 'root',
})
export class SessionStorageService extends StorageService {

	constructor() {
		super(sessionStorage);
	}
}
