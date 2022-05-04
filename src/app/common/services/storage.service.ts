import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StorageService {

	private storage: Storage;

	constructor(storage: Storage) {
		this.storage = storage;
	}

	setItem(key: string, value: any): void {
		//const item: any = JSON.stringify(value);
		this.storage.setItem(key, value);
	}

	getItem(key: string): any {
		const item: any = this.storage.getItem(key);
		return JSON.parse(item);
	}
}
