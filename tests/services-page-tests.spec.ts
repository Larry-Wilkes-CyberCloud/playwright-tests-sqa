import { test, expect } from "@playwright/test";
import { ServicesPage } from "../pages/services-page";

test.describe("Service Page", () => {
  let servicesPage: ServicesPage;

  test.beforeEach(async ({ page }) => {
    servicesPage = new ServicesPage(page);
    await servicesPage.openHomePage();
  });

  test("should redirect to services page", async ({ page }) => {
    await servicesPage.clickServicesButton();
    await servicesPage.verifyServicesPage();
  });
});
