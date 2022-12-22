// Path: ./tests_mocha/signup.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'
import chaiDateTime from 'chai-datetime'
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

chai.use(chaiHttp)
chai.use(chaiDateTime)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

const user = {
	email: faker.internet.email(),
	password: faker.internet.password(),
	name: faker.name.firstName(),
}
const user2 = {
	email: faker.internet.email(),
	password: faker.internet.password(),
}

describe('POST /auth/signup', () => {
	it('should return 201 on successful signup', async () => {
		// User with name and email
		const res = await request.post('/auth/signup').send({
			email: user.email,
			password: user.password,
			name: user.name,
		})
		expect(res).to.have.status(201)

		expect(res.body).to.have.property('token')
		expect(res.body.token).to.be.a('string')

		expect(res.body).to.have.property('user')
		expect(res.body.user).to.be.an('object')

		const newUser = await prisma.user.findUnique({
			where: {
				email: user.email,
			},
		})

		if (!newUser) throw new Error('User not found')
		expect(newUser).to.be.an('object')

		expect(newUser).to.have.property('id')
		expect(newUser.id).to.be.a('string')
		expect(newUser.id).to.equal(res.body.user.id)

		expect(newUser).to.have.property('email')
		expect(newUser.email).to.be.a('string')
		expect(newUser.email).to.equal(user.email)
		expect(newUser.email).to.equal(res.body.user.email)

		expect(newUser).to.have.property('password')
		expect(newUser.password).to.be.a('string')
		expect(newUser.password).to.not.equal(user.password)
		expect(newUser.password).to.equal(res.body.user.password)

		expect(newUser).to.have.property('name')
		expect(newUser.name).to.be.a('string')
		expect(newUser.name).to.equal(user.name)
		expect(newUser.name).to.equal(res.body.user.name)

		expect(newUser).to.have.property('salt')
		expect(newUser.salt).to.be.a('string')

		expect(newUser).to.have.property('createdAt')
		expect(newUser.createdAt).to.be.beforeTime(new Date())

		expect(newUser).to.have.property('updatedAt')
		expect(newUser.updatedAt).to.be.beforeTime(new Date())

		expect(newUser).to.have.property('isDeactivated')
		expect(newUser.isDeactivated).to.be.a('boolean')
		expect(newUser.isDeactivated).to.equal(res.body.user.isDeactivated)
		expect(newUser.isDeactivated).to.equal(false)

		// User with email only
		const res2 = await request.post('/auth/signup').send({
			email: user2.email,
			password: user2.password,
		})
		expect(res2).to.have.status(201)

		expect(res2.body).to.have.property('token')
		expect(res2.body.token).to.be.a('string')

		expect(res2.body).to.have.property('user')
		expect(res2.body.user).to.be.an('object')

		const newUser2 = await prisma.user.findUnique({
			where: {
				email: user2.email,
			},
		})

		if (!newUser2) throw new Error('User not found')

		expect(newUser2).to.be.an('object')

		expect(newUser2).to.have.property('id')
		expect(newUser2.id).to.be.a('string')
		expect(newUser2.id).to.equal(res2.body.user.id)

		expect(newUser2).to.have.property('email')
		expect(newUser2.email).to.be.a('string')
		expect(newUser2.email).to.equal(user2.email)
		expect(newUser2.email).to.equal(res2.body.user.email)

		expect(newUser2).to.have.property('password')
		expect(newUser2.password).to.be.a('string')
		expect(newUser2.password).to.not.equal(user2.password)
		expect(newUser2.password).to.equal(res2.body.user.password)

		expect(newUser2).to.have.property('name')
		expect(newUser2.name).to.be.a('null')

		expect(newUser2).to.have.property('salt')
		expect(newUser2.salt).to.be.a('string')

		expect(newUser2).to.have.property('createdAt')
		expect(newUser2.createdAt).to.be.beforeTime(new Date())

		expect(newUser2).to.have.property('updatedAt')
		expect(newUser2.createdAt).to.be.beforeTime(new Date())

		expect(newUser2).to.have.property('isDeactivated')
		expect(newUser2.isDeactivated).to.be.a('boolean')
		expect(newUser2.isDeactivated).to.equal(res2.body.user.isDeactivated)
		expect(newUser2.isDeactivated).to.equal(false)
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
