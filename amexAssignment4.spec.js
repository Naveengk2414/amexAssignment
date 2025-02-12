import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail');
  await page.getByTestId('granular-banner-button-accept-all').click();
  await page.getByLabel('Prénom').fill('ramesh');
  await page.getByLabel('Prénom').press('Tab');
  await page.getByLabel('Nom', { exact: true }).fill('gupta');
  await page.getByLabel('Date de naissance (JJ/MM/AAAA)').fill('14/02/1993');
  await page.getByLabel('Adresse e-mail').fill('naveenkumar1993@gmail.com');
  await page.getByPlaceholder('## ## ## ##').fill('06524484656');
});