import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
  await page.getByTestId('granular-banner-button-accept-all').click();
  await page.getByRole('link', { name: 'Cartes American Express®' }).click();
});