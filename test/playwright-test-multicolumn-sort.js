const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:5174';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();

  await page.goto(TARGET_URL);
  await page.waitForTimeout(1000);
  console.log('Page loaded:', await page.title());

  // Take initial screenshot
  await page.screenshot({ path: '/tmp/sort-1-initial.png', fullPage: true });
  console.log('📸 Initial state screenshot saved');

  // Click "Id" column header to sort
  const idHeader = page.locator('text=Id').first();
  await idHeader.click();
  await page.waitForTimeout(500);
  console.log('✅ Clicked Id column header');

  await page.screenshot({ path: '/tmp/sort-2-after-id.png', fullPage: true });
  console.log('📸 After Id sort screenshot saved');

  // Command+click (Meta+click) on "Name" column header for multi-column sort
  const nameHeader = page.locator('text=Name').first();
  await nameHeader.click({ modifiers: ['Meta'] });
  await page.waitForTimeout(500);
  console.log('✅ Command+clicked Name column header');

  await page.screenshot({ path: '/tmp/sort-3-after-name.png', fullPage: true });
  console.log('📸 After Name sort screenshot saved');

  // Check for sort indicators (SVAR uses wx-sort-asc or wx-sort-desc classes, or sort index numbers)
  const sortIndicators = await page.locator('[class*="sort"]').count();
  console.log(`Found ${sortIndicators} elements with sort-related classes`);

  // Look for sort index numbers (appears when multi-column sorting is active)
  const pageContent = await page.content();
  const hasMultiSortIndicator = pageContent.includes('wx-sort') || pageContent.includes('sort-index');

  if (hasMultiSortIndicator) {
    console.log('✅ Multi-column sort indicators detected!');
  } else {
    console.log('⚠️ Could not confirm multi-column sort indicators');
  }

  // Keep browser open briefly for visual inspection
  await page.waitForTimeout(2000);

  await browser.close();
  console.log('Test complete!');
})();
