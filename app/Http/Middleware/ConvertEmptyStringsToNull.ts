import { ConvertEmptyStringsToNull as Middleware } from '@formidablejs/framework';

export class ConvertEmptyStringsToNull extends Middleware {
	get except(): String[] {
		return [
			'password',
			'password_confirmation'
		];
	}
}
