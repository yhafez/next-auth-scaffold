// Path: ./tests_mocha/login.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

describe('POST /auth/login on successful login', () => {
	it('should return 200', async () => {
		const res = await request.post('/auth/login').send({
			email: 'test@example.com',
			password: 'password',
		})

		expect(res).to.have.status(200)

		expect(res.body).to.have.property('user')
		expect(res.body.user).to.be.an('object')
		expect(res.body.user).to.have.property('id')

		expect(res.body.user.id).to.be.a('string')
		expect(res.body.user).to.have.property('email')
		expect(res.body.user.email).to.be.a('string')

		expect(res.body.user).to.have.property('emailVerified')

		expect(res.body.user).to.have.property('image')

		expect(res.body.user).to.have.property('password')
		expect(res.body.user.password).to.be.a('string')

		expect(res.body.user).to.have.property('salt')
		expect(res.body.user.salt).to.be.a('string')

		expect(res.body.user).to.have.property('isDeactivated')
		expect(res.body.user.isDeactivated).to.be.a('boolean')

		expect(res.body.user).to.have.property('name')
	})

	it('should return 401 on incorrect credentials', async () => {
		const res = await request.post('/auth/login').send({
			email: 'fakeemail@test.com',
			password: 'password',
		})
		expect(res).to.have.status(401)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('User does not exist')
	})

	it('should return 400 on missing or extra credentials', async () => {
		const res = await request.post('/auth/login').send({
			email: '',
			password: '',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res2 = await request.post('/auth/login').send({
			email: 'test@example.com',
			password: '',
		})
		expect(res2).to.have.status(400)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res3 = await request.post('/auth/login').send({
			email: '',
			password: 'password',
		})
		expect(res3).to.have.status(400)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res4 = await request.post('/auth/login').send({
			email: 'test@example.com',
		})
		expect(res4).to.have.status(400)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res5 = await request.post('/auth/login').send({
			password: 'password',
		})
		expect(res5).to.have.status(400)
		expect(res5.body).to.have.property('error')
		expect(res5.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res6 = await request.post('/auth/login').send({})
		expect(res6).to.have.status(400)
		expect(res6.body).to.have.property('error')
		expect(res6.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res7 = await request.post('/auth/login').send()
		expect(res7).to.have.status(400)
		expect(res7.body).to.have.property('error')
		expect(res7.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res8 = await request.post('/auth/login')
		expect(res8).to.have.status(400)
		expect(res8.body).to.have.property('error')
		expect(res8.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')

		const res9 = await request.post('/auth/login').send({
			email: 'test@example.com',
			password: 'password',
			extra: 'extra',
		})
		expect(res9).to.have.status(400)
		expect(res9.body).to.have.property('error')
		expect(res9.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing email or password')
	})
})
