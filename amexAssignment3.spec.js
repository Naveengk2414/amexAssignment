import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease');
  await page.getByTestId('granular-banner-button-accept-all').click();
});