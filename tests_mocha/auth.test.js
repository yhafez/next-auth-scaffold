// Path: ./tests_mocha/auth.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

describe('GET /', () => {
	it('should return 200 and confirm server is healthy', async () => {
		const res = await request.get('/')
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.equal('API is healthy')
	})
})
