// Path: ./tests_mocha/change-password.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002/api'
const request = chai.request(baseUrl)

describe('/change-password', () => {
	it('should return 200', async () => {
		const res = await request.post('/change-password').send({
			id: '1',
			password: 'password',
		})
		expect(res).to.have.status(200)
	})
})
