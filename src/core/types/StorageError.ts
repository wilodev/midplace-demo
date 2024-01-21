export class StorageError extends Error {
	constructor(
		message: string,
		public originalError?: Error
	) {
		super(message);
		this.name = 'StorageError';
		// Conserva la pila de llamadas si está disponible
		if (originalError?.stack) {
			this.stack = originalError.stack;
		}
	}
}
