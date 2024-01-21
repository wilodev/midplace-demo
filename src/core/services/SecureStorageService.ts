import * as SecureStore from 'expo-secure-store';

import { StorageError } from '../types/StorageError';

class SecureStorageService {
	private static instance: SecureStorageService;

	// Constructor function is private because of singleton pattern
	private constructor() {}

	/**
	 *
	 * @returns {SecureStorageService} The singleton instance of SecureStorageService
	 */
	public static getInstance(): SecureStorageService {
		if (!SecureStorageService.instance) {
			SecureStorageService.instance = new SecureStorageService();
		}
		return SecureStorageService.instance;
	}

	/**
	 *  Function to save value to storage service
	 * @param key string The key to save the value
	 * @param value string The value to store in the instance
	 */
	public async setItem(key: string, value: string): Promise<void> {
		try {
			await SecureStore.setItemAsync(key, value);
		} catch (error) {
			throw new StorageError(
				`Error setting item with key '${key}'.`,
				error as Error
			);
		}
	}

	/**
	 *  Function to retrieve value from storage service
	 * @param key string The key to retrieve the value
	 * @returns {string} The value stored in the instance
	 */
	public async getItem(key: string): Promise<string | null> {
		try {
			return await SecureStore.getItemAsync(key);
		} catch (error) {
			throw new StorageError(
				`Error retrieving item with key '${key}'.`,
				error as Error
			);
		}
	}

	/**
	 * Function to save the object to the storage service
	 * @param key The key to save to the storage service
	 * @param value The value object to save to the storage service
	 */
	public async setObject(key: string, value: object): Promise<void> {
		try {
			const jsonValue = JSON.stringify(value);
			await SecureStore.setItemAsync(key, jsonValue);
		} catch (error) {
			throw new StorageError(
				`Error setting item with key '${key}'.`,
				error as Error
			);
		}
	}

	/**
	 *  Function to retrieve value from storage service
	 * @param key string The key to retrieve the value
	 * @returns {object} The value stored in the instance
	 */
	public async getObject(key: string): Promise<object | null> {
		try {
			const jsonValue = await SecureStore.getItemAsync(key);
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (error) {
			throw new StorageError(
				`Error retrieving item with key '${key}'.`,
				error as Error
			);
		}
	}

	/**
	 *  Function to remove key - value from storage service
	 * @param key string The key to remove the value
	 */
	public async removeItem(key: string): Promise<void> {
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (error) {
			throw new StorageError(
				`Error removing item with key '${key}'.`,
				error as Error
			);
		}
	}
}

export { SecureStorageService };
