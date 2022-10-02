import { ConvertEmptyStringsToNull as Middleware } from '@formidablejs/framework'

export class ConvertEmptyStringsToNull extends Middleware {
	get except(): Array<string> {
		return [
			'password',
			'password_confirmation'
		]
	}
}
