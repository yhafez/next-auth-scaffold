// Path: ./tests_mocha/reset-password.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'
import { PrismaClient } from '@prisma/client'
import chaiDateTime from 'chai-datetime'

const prisma = new PrismaClient()

chai.use(chaiHttp)
chai.use(chaiDateTime)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

const user = await prisma.user.findUnique({
	where: {
		email: 'test@example.com',
	},
})

describe('POST /auth/reset-password', () => {
	it('should return 200 on successful request', async () => {
		const res = await request.post('/auth/reset-password').send({
			id: user?.id,
			password: 'password',
		})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('message')
		expect(res.body.message).to.be.a('string')
		expect(res.body.message).to.equal('Password reset')

		const updatedUser = await prisma.user.findUnique({
			where: {
				email: user?.email || '',
			},
		})

		if (!updatedUser) throw new Error('User not found')
		expect(updatedUser).to.be.an('object')

		expect(updatedUser).to.have.property('id')
		expect(updatedUser.id).to.be.a('string')
		expect(updatedUser.id).to.equal(user?.id)

		expect(updatedUser).to.have.property('email')
		expect(updatedUser.email).to.be.a('string')
		expect(updatedUser.email).to.equal(user?.email)

		expect(updatedUser).to.have.property('password')
		expect(updatedUser.password).to.be.a('string')
		expect(updatedUser.password).to.not.equal('password')

		expect(updatedUser).to.have.property('salt')
		expect(updatedUser.salt).to.be.a('string')
		expect(updatedUser.salt).to.not.equal(user?.salt)

		expect(updatedUser).to.have.property('name')
		expect(updatedUser.name).to.be.a('string')
		expect(updatedUser.name).to.equal(user?.name)

		expect(updatedUser).to.have.property('role')
		expect(updatedUser.role).to.be.a('string')
		expect(updatedUser.role).to.equal(user?.role)

		expect(updatedUser).to.have.property('isDeactivated')
		expect(updatedUser.isDeactivated).to.be.a('boolean')
		expect(updatedUser.isDeactivated).to.equal(user?.isDeactivated)

		expect(updatedUser).to.have.property('createdAt')
		expect(updatedUser.createdAt).to.be.beforeTime(new Date())

		expect(updatedUser).to.have.property('updatedAt')
		expect(updatedUser.updatedAt).to.be.beforeTime(new Date())
	})

	it('should return 400 on invalid or missing email', async () => {
		const res = await request.post('/auth/reset-password').send({
			id: '',
			password: 'newpassword',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('ID and password are required')

		const res2 = await request.post('/auth/reset-password').send({
			id: 'invalid',
			password: 'newpassword',
		})
		expect(res2).to.have.status(404)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('User does not exist')
	})

	it('should return 400 on invalid or missing password', async () => {
		const res = await request.post('/auth/reset-password').send({
			email: user?.email,
			password: '',
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('ID and password are required')
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
