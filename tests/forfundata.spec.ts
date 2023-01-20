import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("ForFun");
});

test('Has Table', async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
