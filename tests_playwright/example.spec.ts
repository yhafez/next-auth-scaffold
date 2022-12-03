// Path: ./tests/index.spec.ts
// Playwright Test

import { test, expect } from '@playwright/test'

test('login page', async ({ page }) => {
	await page.goto('http://localhost:3000/login')

	await page.fill('input[name=email]', 'test@example.com')

	await page.fill('input[name=password]', 'password')

	await page.click("button:has-text('Login')")
	await page.waitForNavigation()

	expect(page.url()).toBe('http://localhost:3000/')
})
