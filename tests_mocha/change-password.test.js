// Path: ./tests_mocha/change-password.test.js
import chai from 'chai'
import chaiHttp from 'chai-http'
import spies from 'chai-spies'

// chai.use(spies)
chai.use(chaiHttp)
chai.use(spies)
const expect = chai.expect
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
const request = chai.request(baseUrl)

// mock getSession
const mockGetSession = {
	getSession: ({ req }) => ({
		user: {
			id: '123',
			email: 'test@example.com',
			image: 'https://example.com/image.png',
		},
	}),
}

describe('PATCH /auth/change-password', () => {
	it('should return 200', async () => {
		// use mock getSession
		chai.spy.interface({
			getSession: mockGetSession,
		})

		const res = await request
			.patch('/auth/change-password')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.send({
				password: 'password',
				newPassword: 'newPassword',
				confirmNewPassword: 'newPassword',
				email: 'test@example.com',
			})
		expect(res).to.have.status(200)
		expect(res.body).to.have.property('user')
		expect(res.body.user).to.be.an('object')
		expect(res.body.user).to.have.property('id')
		expect(res.body.user.id).to.be.a('string')
		expect(res.body.user).to.have.property('email')
		expect(res.body.user.email).to.be.a('string')
		expect(res.body.user).to.have.property('emailVerified')
		expect(res.body.user.emailVerified).to.be.a('boolean')
		expect(res.body.user).to.have.property('name')
		expect(res.body.user.name).to.be.a('string')
		expect(res.body.user).to.have.property('image')
		expect(res.body.user.image).to.be.a('string')
		expect(res.body.user).to.have.property('createdAt')
		expect(res.body.user.createdAt).to.be.a('string')
		expect(res.body.user).to.have.property('updatedAt')
		expect(res.body.user.updatedAt).to.be.a('string')
		expect(res.body.user).to.have.property('token')
		expect(res.body.user.token).to.be.a('string')
	})
})
