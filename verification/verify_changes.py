
from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_changes(page: Page):
    # Go to home page
    page.goto("http://localhost:3000")

    # Bypass Preloader (as per memory instructions)
    page.wait_for_timeout(4000)

    # 1. Verify Default Language (RU) and Hero Arrow Position
    # The header also has Grozan Studio link which might be an h1 or similar, but error said strict mode violation.
    # The error shows two headings: one is likely the preloader or header logo, the other is the main hero.
    # We target the one in the main content area.
    expect(page.locator("main").get_by_role("heading", name="Grozan Studio")).to_be_visible()
    expect(page.get_by_text("Создаем не просто сайты, а впечатления.")).to_be_visible()

    # Check arrow text (should be "Вниз" in RU)
    expect(page.get_by_text("Вниз")).to_be_visible()

    # Take screenshot of Home RU
    page.screenshot(path="verification/01_home_ru.png")

    # 2. Verify Language Switcher
    # Open switcher
    page.get_by_label("Change Language").first.click() # .first because mobile/desktop might coexist or be hidden via CSS
    time.sleep(0.5) # wait for animation

    # Click English
    page.get_by_text("English").click()
    time.sleep(0.5) # wait for transition

    # Verify Content in EN
    expect(page.get_by_text("We create not just websites, but impressions.")).to_be_visible()
    expect(page.get_by_text("Down")).to_be_visible()

    # Take screenshot of Home EN
    page.screenshot(path="verification/02_home_en.png")

    # 3. Verify Projects Page in EN
    page.goto("http://localhost:3000/projects")
    page.wait_for_timeout(1000)
    expect(page.get_by_role("heading", name="Our Projects")).to_be_visible()
    expect(page.get_by_text("All")).to_be_visible()
    expect(page.get_by_text("Cafe")).to_be_visible()

    # Take screenshot of Projects EN
    page.screenshot(path="verification/03_projects_en.png")

    # 4. Verify Back to Top Button
    # Go back to home page as it has more scrollable content
    page.goto("http://localhost:3000/")
    page.wait_for_timeout(2000) # wait for load

    # Scroll down significantly to ensure we trigger the 300px threshold
    page.evaluate("window.scrollTo(0, 2000)")
    time.sleep(2)

    # Check if button exists (it has aria-label="Back to Top")
    back_to_top = page.get_by_label("Back to Top")
    expect(back_to_top).to_be_visible()

    # Take screenshot of Back to Top
    page.screenshot(path="verification/04_back_to_top.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        finally:
            browser.close()
