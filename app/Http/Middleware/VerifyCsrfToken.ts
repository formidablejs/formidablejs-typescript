import { VerifyCsrfToken as Middleware } from '@formidablejs/framework';

export class VerifyCsrfToken extends Middleware
{
	get except(): String[]
	{
		return [

		];
	}
}
