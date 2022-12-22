// Path: ./tests_mocha/verify-token.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

chai.use(chaiHttp)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

describe('POST /auth/verify-token', () => {
	it('should return 200 on successful request', async () => {
		const user = await prisma.user.findUnique({
			where: {
				email: 'test@example.com',
			},
		})

		const secret =
			user && process.env.JWT_SECRET ? process.env.JWT_SECRET + user?.password + user?.salt : ''
		if (!secret) throw new Error('JWT_SECRET is not defined')
		const token = jwt.sign({ email: user?.email }, secret, { expiresIn: '1d' })

		const res = await request.post('/auth/verify-token').send({
			token: token,
			id: user?.id,
		})
		expect(res).to.have.status(200)

		expect(res.body).to.have.property('message')
		expect(res.body.message).to.be.a('string')
		expect(res.body.message).to.equal('Token is valid')

		expect(res.body).to.have.property('payload')
		expect(res.body.payload).to.be.an('object')

		expect(res.body.payload).to.have.property('email')
		expect(res.body.payload.email).to.be.a('string')
		expect(res.body.payload.email).to.equal(user?.email)

		expect(res.body.payload).to.have.property('iat')
		expect(res.body.payload.iat).to.be.a('number')

		expect(res.body.payload).to.have.property('exp')
		expect(res.body.payload.exp).to.be.a('number')
	})

	it('should return 400 on invalid or missing token', async () => {
		const user = await prisma.user.findUnique({
			where: {
				email: 'test@example.com',
			},
		})

		const secret =
			user && process.env.JWT_SECRET ? process.env.JWT_SECRET + user?.password + user?.salt : ''
		if (!secret) throw new Error('JWT_SECRET is not defined')
		const token = jwt.sign({ email: user?.email }, secret, { expiresIn: '1d' })
		const invalidToken = jwt.sign(
			{
				id: user?.id,
			},
			'invalid' + user?.salt,
			{
				expiresIn: '1d',
			},
		)

		const res = await request.post('/auth/verify-token').send({
			token: '',
			id: user?.id,
		})
		expect(res).to.have.status(400)
		expect(res.body).to.have.property('error')
		expect(res.body.error).to.be.a('string')
		expect(res.body.error).to.equal('Missing token or id')

		const res1 = await request.post('/auth/verify-token').send({
			token: token,
			id: '',
		})
		expect(res1).to.have.status(400)
		expect(res1.body).to.have.property('error')
		expect(res1.body.error).to.be.a('string')
		expect(res1.body.error).to.equal('Missing token or id')

		const res2 = await request.post('/auth/verify-token').send({
			token: 'vdadsadsvads',
			id: user?.id,
		})
		expect(res2).to.have.status(401)
		expect(res2.body).to.have.property('error')
		expect(res2.body.error).to.be.a('string')
		expect(res2.body.error).to.equal('Invalid token')

		const res3 = await request.post('/auth/verify-token').send({
			token: invalidToken,
			id: user?.id,
		})
		expect(res3).to.have.status(401)
		expect(res3.body).to.have.property('error')
		expect(res3.body.error).to.be.a('string')
		expect(res3.body.error).to.equal('Invalid token')
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
