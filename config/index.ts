import { ConfigRepository } from '@formidablejs/framework'
import app from './app'
import auth from './auth'
import bugsnag from './bugsnag'
import context from './context'
import cors from './cors'
import database from './database'
import hashing from './hashing'
import logging from './logging'
import mail from './mail'
import queue from './queue'
import session from './session'

export class Config extends ConfigRepository
{
	/**
	 * All of the configuration items.
	 */
	get registered(): object
	{
		return {
			app,
			auth,
			bugsnag,
			context,
			cors,
			database,
			hashing,
			logging,
			mail,
			queue,
			session
		}
	}
}
