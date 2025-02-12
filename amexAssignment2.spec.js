import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
  await page.getByTestId('granular-banner-button-accept-all').click();
  await page.getByRole('link', { name: 'En savoir plus' }).nth(1).click();
  await page.goto('https://www.americanexpress.com/fr-fr/carte-de-paiement/gold-card-americanexpress/?intlink=fr-proprietary-gold&intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
});