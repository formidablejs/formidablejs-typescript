import { AuthService as Auth } from '@formidablejs/framework'
import { ServiceResolver } from '@formidablejs/framework'
// import { ResetPassword } from '../Mail/ResetPassword'
// import { VerifyEmail } from '../Mail/VerifyEmail'

export class AppServiceResolver extends ServiceResolver {
	boot(): AppServiceResolver {
		// Auth.verificationMailer(VerifyEmail)
		// Auth.resetPasswordMailer(ResetPassword)

		// Auth.verificationMailerEvents({
		// 	onError: (reason) => console.error(reason)
		// })

		return this
	}
}
