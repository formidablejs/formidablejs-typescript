import { ConsoleKernel } from '@formidablejs/framework'
import { Log } from '@formidablejs/logger'
import type { ICommand } from '@formidablejs/framework'
import type { Schedule } from '@formidablejs/scheduler'

export class Kernel extends ConsoleKernel {
	get registered(): Array<ICommand> {
		return [
			//
		]
	}

	schedule(schedule: Schedule): void {
		// schedule.call(() => {
		// 	Log.info('Hello World')
		// }).everyMinute()
	}
}
