import { AcceptLanguage as Middleware } from '@formidablejs/framework';

export class AcceptLanguage extends Middleware
{
	get mappings(): Object
	{
		return {
			// 'en-US': 'en'
		};
	}
}
