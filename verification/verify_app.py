
from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_site_loads(page: Page):
    print("Navigating to homepage...")
    page.goto("http://localhost:3000")

    # Wait for preloader to finish (bypass technique from memory)
    print("Waiting for preloader...")
    try:
        page.wait_for_timeout(5000) # 5 seconds for preloader
    except Exception as e:
        print(f"Timeout waiting: {e}")

    # Check if the custom cursor exists in DOM
    print("Checking for cursor...")
    cursor = page.locator(".fixed.top-0.left-0.rounded-full")
    # We expect it to be attached, even if we can't see the animation
    if cursor.count() > 0:
        print("Custom cursor element found in DOM.")
    else:
        print("Warning: Custom cursor element NOT found.")

    # Take screenshot of homepage
    print("Taking screenshot...")
    page.screenshot(path="/home/jules/verification/homepage_cursor.png")

    # Navigate to Contact page (part of AI flow)
    print("Navigating to Contact page...")
    page.goto("http://localhost:3000/contact")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/contact_page.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_site_loads(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
