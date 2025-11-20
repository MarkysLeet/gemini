from playwright.sync_api import sync_playwright, Page, expect

def verify_changes(page: Page):
    # 1. Go to the homepage
    page.goto("http://localhost:3000")

    # 2. Wait for preloader to disappear
    # The memory says use fixed timeout or manual removal.
    # Let's try waiting for the Hero title to be visible which appears after preloader
    page.wait_for_timeout(4000)

    # 3. Verify Hero Logo
    # There should be an image before the h1 in the hero section.
    # The h1 text is "Grozan Studio" (or whatever is in translation).
    # But let's just check for the image with alt "Grozan Studio Logo" in the main area

    # The header also has a logo with the same alt.
    # We added a class to the hero logo container: "mb-6 relative w-24 h-24 md:w-32 md:h-32"
    # But the image itself has the alt.

    # Let's just take a screenshot of the top part of the page.
    page.set_viewport_size({"width": 1280, "height": 800})
    page.screenshot(path="verification/home_desktop.png")

    # 4. Check mobile view for spacing and logo size
    page.set_viewport_size({"width": 375, "height": 667})
    page.screenshot(path="verification/home_mobile.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        finally:
            browser.close()
