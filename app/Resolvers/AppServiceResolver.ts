import { AuthService as Auth } from '@formidablejs/framework'
import { ServiceResolver } from '@formidablejs/framework'
import { UserRepository } from '../Repositories/UserRepository'
// import { ResetPassword } from '../Mail/ResetPassword'
// import { VerifyEmail } from '../Mail/VerifyEmail'

export class AppServiceResolver extends ServiceResolver {
	register(): AppServiceResolver {
		this.app.context.inject(UserRepository)

		return this
	}

	boot(): AppServiceResolver {
		// Auth.verificationMailer(VerifyEmail)
		// Auth.resetPasswordMailer(ResetPassword)

		// Auth.verificationMailerEvents({
		// 	onError: (reason) => console.error(reason)
		// })

		return this
	}
}
