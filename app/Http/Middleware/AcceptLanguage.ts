import { AcceptLanguage as Middleware } from '@formidablejs/framework'

export class AcceptLanguage extends Middleware {
	get mappings(): object {
		return {
			// 'en-US': 'en'
		}
	}
}
