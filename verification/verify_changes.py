from playwright.sync_api import sync_playwright, expect
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        print("Navigating to http://localhost:3000")
        page.goto("http://localhost:3000")

        # Wait for the preloader to finish (it should take about 2.5s to start fading + 0.5s fade)
        # But we have the new LoadingContext, so we expect the text to appear shortly.
        # The memory says "bypass preloader checks using fixed timeout".
        # However, my change specifically touches the preloader logic, so I should verify it works.

        # Wait for 4 seconds to be safe as per memory instructions for headless issues
        print("Waiting for preloader...")
        page.wait_for_timeout(4000)

        # Check if the "Grozan Studio" title is visible (opacity 1)
        heading = page.locator("h1").filter(has_text="Grozan Studio")
        expect(heading).to_be_visible()

        # Check if the Scroll Arrow exists
        arrow_btn = page.locator("button[aria-label='Прокрутить вниз']")
        expect(arrow_btn).to_be_visible()

        # Check if the Arrow has the "Down" text
        expect(arrow_btn).to_contain_text("Вниз")

        # Take a screenshot of the hero section with the arrow
        print("Taking screenshot...")
        page.screenshot(path="verification/hero_with_arrow.png")

        # Test the scroll functionality
        # Note: Scrolling behavior is hard to test in headless without visual confirmation,
        # but we can check if the scroll position changes or if the element comes into view.
        # We will click the button.
        print("Clicking arrow...")
        arrow_btn.click()

        # Wait for scroll animation
        page.wait_for_timeout(1000)

        # Take another screenshot to see if we scrolled down
        print("Taking scrolled screenshot...")
        page.screenshot(path="verification/scrolled_page.png")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_app()
