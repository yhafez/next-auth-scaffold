// Path: ./tests_playwright/server.spec.ts
import { test, expect } from '@playwright/test'

// API tests
test('GET /api/auth', async ({ page }) => {
	const response = await page.goto('http://localhost:3000/api/auth')
	expect(response?.status()).toBe(405)
})
