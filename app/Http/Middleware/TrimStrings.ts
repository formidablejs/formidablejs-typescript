import { TrimStrings as Middleware } from '@formidablejs/framework';

export class TrimStrings extends Middleware
{
	get except(): String[]
	{
		return [
			'password',
			'password_confirmation'
		];
	}
}
