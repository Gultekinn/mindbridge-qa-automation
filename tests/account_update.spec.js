import { test, expect } from '@playwright/test';

test('Account Update happy path', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('#email').fill('qa.user@mindbridge.local');
  await page.locator('#password').fill('admin12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/dashboard');

  await page.goto('http://localhost:3000/account');
  await page.getByTestId('account-region').fill('APAC');
  await page.getByTestId('account-save-btn').click();
  await expect(page.getByTestId('account-save-success')).toBeVisible();
});