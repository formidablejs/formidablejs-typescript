import { Request } from '@formidablejs/framework';
import { Route } from '@formidablejs/framework';

Route.get('/', (request: Request) => {
	return request.translate('index.hello', 'Hello World');
}).name('hello').middleware(['lang']);
