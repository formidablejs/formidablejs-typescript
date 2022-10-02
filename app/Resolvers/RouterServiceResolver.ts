import { AuthService as Auth } from '@formidablejs/framework'
import { Route } from '@formidablejs/framework'
import { ServiceResolver } from '@formidablejs/framework'

export class RouterServiceResolver extends ServiceResolver {
	boot(): RouterServiceResolver {
		Route.group({ middleware: 'jwt' }, () => {
			Auth.routes()

			require('../../routes/api')
		})

		return this
	}
}
