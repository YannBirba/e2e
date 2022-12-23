import { test, expect } from "@playwright/test";

test("go to the contact page when user click on the contact link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByTestId("contacts").click();
  await expect(page).toHaveURL("http://localhost:5173/contacts");
});
test("go to the files page when user click on the files link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByTestId("files").click();
  await expect(page).toHaveURL("http://localhost:5173/files");
});
test("go to the upload page when user click on the upload link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByTestId("upload").click();
  await expect(page).toHaveURL("http://localhost:5173/upload");
});

test("go to the home page when user click on the home link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByTestId("contacts").click();
  await page.getByTestId("home").click();
  await expect(page).toHaveURL(
    "http://localhost:5173/" || "http://localhost:5173"
  );
});
