import { test, expect } from "@playwright/test";

test("go to the contact page when user click on the contact link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("link", { name: "Contacts" }).click();
  await expect(page).toHaveURL("http://localhost:5173/contacts");
});
test("go to the profile page when user click on the profile link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("link", { name: "Profile" }).click();
  await expect(page).toHaveURL("http://localhost:5173/profile");
});
test("go to the files page when user click on the files link", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("link", { name: "Fichiers" }).click();
  await expect(page).toHaveURL("http://localhost:5173/files");
});

// test.skip("go to the home page when user click on the home link", async ({
//   page,
// }) => {
//   await page.goto("http://localhost:5173");
//   await page.getByRole("link", { name: "Fichiers" }).click();
//   await page.getByRole("link", { name: "Accueil" }).click();
//   await expect(page).toHaveURL(
//     "http://localhost:5173/" || "http://localhost:5173"
//   );
// });
