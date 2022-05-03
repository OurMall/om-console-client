import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StorageService {

	private storage: Storage = localStorage;

	constructor(storage?: Storage) {  }

	setItem(key: string, value: any): void {
		const item: any = JSON.stringify(value);
		this.storage.setItem(key, item);
	}

	getItem(key: string): any {
		const item: any = this.storage.getItem(key);
		return JSON.parse(item);
	}
}
