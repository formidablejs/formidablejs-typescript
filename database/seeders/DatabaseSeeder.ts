import { type Database } from '@formidablejs/framework';
import { UserFactory } from '../factories/UserFactory';

export const seed = async (DB: Database): Promise<void> => {
	await UserFactory.factory(5).create()
}
