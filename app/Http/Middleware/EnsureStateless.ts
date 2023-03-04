import { EnsureStateless as Middleware } from '@formidablejs/framework'

export class EnsureStateless extends Middleware {
	get strict(): boolean {
		return false
	}
}
