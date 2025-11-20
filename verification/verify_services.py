
from playwright.sync_api import Page, expect, sync_playwright
import time

def test_services_page(page: Page):
    print("Navigating to Services page...")
    page.goto("http://localhost:3000/services")

    # Wait for animations to settle (framer-motion)
    print("Waiting for page load and animations...")
    page.wait_for_timeout(4000)

    # Check if the header is visible
    expect(page.get_by_role("heading", name="Наши Тарифы")).to_be_visible()

    # Check if the 3 plans are visible
    expect(page.get_by_text("СТАРТ")).to_be_visible()
    expect(page.get_by_text("БАЗА")).to_be_visible()
    expect(page.get_by_text("ПРОФИ")).to_be_visible()

    # Check for "Recommended" badge
    expect(page.get_by_text("Рекомендуемый выбор")).to_be_visible()

    # Check for "Common Features" section
    expect(page.get_by_role("heading", name="Что включено в каждый проект?")).to_be_visible()

    print("Taking screenshot...")
    page.screenshot(path="verification/services_page.png", full_page=True)
    print("Screenshot saved.")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_services_page(page)
        finally:
            browser.close()
