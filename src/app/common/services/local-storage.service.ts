import { Injectable } from '@angular/core';

import { StorageService } from '@app/common/services';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService extends StorageService {

	constructor() {
		super(localStorage);
	}

}
