import { Repository } from '@formidablejs/framework'

export class UserRepository extends Repository {
	/**
	 * The table associated with the repsitory.
	 */
	get tableName(): string {
		return 'users'
	}

	/**
	 * Context reference.
	 */
	static get context(): string {
		return 'UserRepository'
	}
}
