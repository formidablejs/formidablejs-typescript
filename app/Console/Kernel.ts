import { ConsoleKernel } from '@formidablejs/framework'
import { Log } from '@formidablejs/logger'
import type { Schedule } from '@formidablejs/scheduler'

export class Kernel extends ConsoleKernel {
	get registered(): Array<object> {
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
