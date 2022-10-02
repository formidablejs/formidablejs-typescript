import { Kernel } from '@formidablejs/framework'
import { ConsoleKernel } from '@formidablejs/framework'
import { app } from './main'

const main = async () => {
	(await app.initiate(app.make(Kernel), true))
		.craftsman(app.make(ConsoleKernel))
		.run()
}

main()
