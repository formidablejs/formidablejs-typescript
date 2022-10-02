import { TrimStrings as Middleware } from '@formidablejs/framework'

export class TrimStrings extends Middleware {
	get except(): Array<string> {
		return [
			'password',
			'password_confirmation'
		]
	}
}
