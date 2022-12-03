// Path: ./tests_mocha/server.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'
import { faker } from '@faker-js/faker'
import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = 'http://localhost:3001/api'
const request = chai.request(baseUrl)

// Test API routes

const user = {
	id: uuid(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	name: faker.name.firstName(),
}
const user2 = {
	id: uuid(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	name: faker.name.firstName(),
}

const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
	expiresIn: '1d',
})

const token2 = jwt.sign({ email: user2.email }, process.env.JWT_SECRET, {
	expiresIn: '1d',
})

describe('/404', () => {
	it('should return 404', async () => {
		const res = await request.get('/404')
		expect(res).to.have.status(404)
	})
})

describe('GET /', () => {
	it('should return 200 and confirm server is healthy', async () => {
		const res = await request.get('/')
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.equal('API is healthy')
	})
})

describe('POST /auth/login on successful login', () => {
	it('should return 200', async () => {
		const res = await request.post('/auth/login').send({
			email: 'test@example.com',
			password: 'password',
		})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('token')
		expect(res.body.token).to.be.a('string')
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

describe('POST /auth/signup', () => {
	it('should return 201 on successful signup', async () => {
		const res = await request.post('/auth/signup').send({
			email: user.email,
			password: user.password,
		})
		expect(res).to.have.status(201)
		expect(res.body).to.have.property('token')
		expect(res.body.token).to.be.a('string')
	})

	it('should return 400 on invalid or missing email or password', async () => {
		const res = await request.post('/auth/signup').send({
			email: 'test@example.com',
			password: 'password',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('User already exists')

		const res2 = await request.post('/auth/signup').send({
			email: '',
			password: '',
		})
		expect(res2).to.have.status(400)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Missing email or password')

		const res3 = await request.post('/auth/signup').send({
			email: 'test@example.com',
			password: '',
		})
		expect(res3).to.have.status(400)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Missing email or password')

		const res4 = await request.post('/auth/signup').send({
			email: '',
			password: 'password',
		})
		expect(res4).to.have.status(400)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res4.body.error).to.equal('Missing email or password')
	})

	it('should return 405 on invalid method', async () => {
		const res = await request.get('/auth/signup')
		expect(res).to.have.status(405)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Method not allowed')

		const res2 = await request.put('/auth/signup')
		expect(res2).to.have.status(405)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Method not allowed')

		const res3 = await request.patch('/auth/signup')
		expect(res3).to.have.status(405)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Method not allowed')

		const res4 = await request.delete('/auth/signup')
		expect(res4).to.have.status(405)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res4.body.error).to.equal('Method not allowed')
	})
})

describe('POST /auth/forgot-password', () => {
	it('should return 200 on successful request', async () => {
		const res = await request.post('/auth/forgot-password').send({
			email: user.email,
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

describe('POST /auth/reset-password', () => {
	it('should return 200 on successful request', async () => {
		const res = await request.post('/auth/reset-password').send({
			email: user.email,
			password: 'newpassword',
		})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.be.a('string')
		expect(res.body.message).to.equal('Password reset')
	})

	it('should return 400 on invalid or missing email', async () => {
		const res = await request.post('/auth/reset-password').send({
			email: '',
			password: 'newpassword',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Email and password are required')

		const res2 = await request.post('/auth/reset-password').send({
			email: 'test@fake.com',
			password: 'newpassword',
		})
		expect(res2).to.have.status(404)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('User does not exist')
	})

	it('should return 400 on invalid or missing password', async () => {
		const res = await request.post('/auth/reset-password').send({
			email: user.email,
			password: '',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Email and password are required')
	})

	it('should return 405 on invalid method', async () => {
		const res = await request.get('/auth/reset-password')
		expect(res).to.have.status(405)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Method not allowed')

		const res2 = await request.put('/auth/reset-password')
		expect(res2).to.have.status(405)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Method not allowed')

		const res3 = await request.patch('/auth/reset-password')
		expect(res3).to.have.status(405)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Method not allowed')

		const res4 = await request.delete('/auth/reset-password')
		expect(res4).to.have.status(405)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res4.body.error).to.equal('Method not allowed')
	})
})

describe('POST /auth/verify-token', () => {
	it('should return 200 on successful request', async () => {
		const res = await request.post('/auth/verify-token').send({
			token,
		})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.be.a('string')
		expect(res.body.message).to.equal('Token verified')
		expect(res.body).to.have.property('email')
		expect(res.body.email).to.be.a('string')
		expect(res.body.email).to.equal(user.email)
		expect(res.body).to.have.property('token')
		expect(res.body.token).to.be.a('string')
	})

	it('should return 400 on invalid or missing token', async () => {
		const res = await request.post('/auth/verify-token').send({
			token: '',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Token is required')

		const res2 = await request.post('/auth/verify-token').send({
			token: 'vdadsadsvads',
		})
		expect(res2).to.have.status(401)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Invalid token')

		const res3 = await request.post('/auth/verify-token').send({
			token: token2,
		})
		expect(res3).to.have.status(404)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('User does not exist')
	})

	it('should return 405 on invalid method', async () => {
		const res = await request.get('/auth/verify-token')
		expect(res).to.have.status(405)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Method not allowed')

		const res2 = await request.put('/auth/verify-token')
		expect(res2).to.have.status(405)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Method not allowed')

		const res3 = await request.patch('/auth/verify-token')
		expect(res3).to.have.status(405)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Method not allowed')

		const res4 = await request.delete('/auth/verify-token')
		expect(res4).to.have.status(405)
		expect(res4.body).to.have.property('error')
		expect(res4.body.error).to.be.a('string')
		expect(res4.body.error).to.equal('Method not allowed')
	})
})
