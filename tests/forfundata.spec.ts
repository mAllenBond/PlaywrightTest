import { test, expect } from '@playwright/test';

test('Has expected title', async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("ForFun");
});

test("Can click into a user's posts", async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');
  await page.content();

  // Pick a user and click on the posts
  const post = await page.locator('mat-expansion-panel').first();
  const postButton = await post.getByRole("button");

  // Expand the first post row
  await postButton.click();

  // Get the columns locator for the first post
  const postTableColumns = post.getByRole('columnheader');

  // NOTE:  MUST WAIT FOR AT LEAST ONE OF THE COLUMNS TO BE VISIBLE BEFORE YOU CAN USE THE LOCATOR
  await postTableColumns.first().waitFor({state:"visible"})

  // Expect table to render with Title, Content, and Comments columns
  expect(await postTableColumns.count()).toEqual(3);

  expect(await postTableColumns.nth(0).innerText()).toEqual('Title');
  expect(await postTableColumns.nth(1).innerText()).toEqual('Content');
  expect(await postTableColumns.nth(2).innerText()).toEqual('Comments');
});

test("Can click into a post's comments", async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');

  // TODO:  Fill in test here
  // Can we leverage any ids on the elements?
});

test('Has expected number of distinct users', async ({ page }) => {
  await page.goto('https://forfundataproject.web.app/');

  // TODO:  Fill in test here
});

// TODO:  What other tests do you think would be worthwhile to add here