// Path: ./tests_mocha/404.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

describe('GET /404', () => {
	it('should return 404', async () => {
		const res = await request.get('/404')
		expect(res).to.have.status(404)
	})
})
