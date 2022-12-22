// Path: ./tests_mocha/forgot-password.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

describe('POST /auth/forgot-password', () => {
	it('should return 200 on successful request', async () => {
		const res = await request.post('/auth/forgot-password').send({
			email: 'test@example.com',
		})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.be.a('string')
		expect(res.body.message).to.equal('Email sent')
	})

	it('should return 400 on invalid or missing email', async () => {
		const res = await request.post('/auth/forgot-password').send({
			email: '',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Email is required')

		const res2 = await request.post('/auth/forgot-password').send({
			email: 'test@fake.com',
		})
		expect(res2).to.have.status(404)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('User does not exist')
	})

	it('should return 405 on invalid method', async () => {
		const res = await request.get('/auth/forgot-password')
		expect(res).to.have.status(405)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Method not allowed')

		const res2 = await request.put('/auth/forgot-password')
		expect(res2).to.have.status(405)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Method not allowed')

		const res3 = await request.patch('/auth/forgot-password')
		expect(res3).to.have.status(405)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Method not allowed')

		const res4 = await request.delete('/auth/forgot-password')
		expect(res4).to.have.status(405)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res4.body.error).to.equal('Method not allowed')
	})
})
