import { Authenticate } from '@formidablejs/framework'
import { HasEncryptionKey } from '@formidablejs/framework'
import { Kernel as HttpKernel } from '@formidablejs/framework'
import { ValidateSignature } from '@formidablejs/framework'
import { AcceptLanguage } from './Middleware/AcceptLanguage'
import { ConvertEmptyStringsToNull } from './Middleware/ConvertEmptyStringsToNull'
import { EnsureEmailIsVerified } from './Middleware/EnsureEmailIsVerified'
import { EnsureStateless } from './Middleware/EnsureStateless'
import { ErrorIfAuthenticated } from './Middleware/ErrorIfAuthenticated'
import { TrimStrings } from './Middleware/TrimStrings'
import { VerifyCsrfToken } from './Middleware/VerifyCsrfToken'
import type { IMiddleware } from '@formidablejs/framework'
import type { MiddlewareAliases } from '@formidablejs/framework'
import type { MiddlewareGroups } from '@formidablejs/framework'

export class Kernel extends HttpKernel {
	get middleware(): Array<IMiddleware | string> {
		return [
			HasEncryptionKey,
			TrimStrings,
			ConvertEmptyStringsToNull
		]
	}

	get middlewareGroups(): MiddlewareGroups {
		return {
			jwt: [
				EnsureStateless // disable this if you wish to access sessions in your api routes.
			],

			session: [
				VerifyCsrfToken
			]
		}
	}

	get middlewareAliases(): MiddlewareAliases {
		return {
			'auth': Authenticate,
			'guest': ErrorIfAuthenticated,
			'lang': AcceptLanguage,
			'signed': ValidateSignature,
			'verified': EnsureEmailIsVerified
		}
	}
}
