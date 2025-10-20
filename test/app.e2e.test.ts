jest.mock('@paralleldrive/cuid2');

const formidable = require('../.formidable/build').default
const supertest = require('supertest')

describe('Application (e2e)', () => {
	let app

	beforeAll(async () => {
		const application = await formidable

		app = application.fastify()

		await app.ready()
	})

	afterAll(async () => {
		await app.close()
	})

	it('/ (GET: Hello World)', async () => {
		await supertest(app.server)
			.get('/hello')
			.set('Accept-Language', 'en')
			.expect(200)
			.expect('Hello World')
	})

	it('/ (GET: Hola Mundo)', async () => {
		await supertest(app.server)
			.get('/')
			.set('Accept-Language', 'es')
			.expect(200)
			.expect('Hola Mundo')
	})
})
