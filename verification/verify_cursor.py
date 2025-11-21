import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Navigate to the homepage
        page.goto("http://localhost:3000")

        # Wait for preloader to finish (as per memory instructions)
        page.wait_for_timeout(5000)

        # Move mouse to center to trigger cursor appearance (if it depends on movement)
        page.mouse.move(500, 500)
        page.wait_for_timeout(500)

        # Screenshot of default cursor state
        page.screenshot(path="verification/cursor_default.png")
        print("Default cursor screenshot taken.")

        # Hover over a link to trigger 'text' variant
        # The logo in header is usually a link
        # Or 'Grozan Studio' text

        # Let's find a link
        link = page.query_selector("a")
        if link:
            box = link.bounding_box()
            if box:
                page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
                page.wait_for_timeout(500) # Wait for expansion animation
                page.screenshot(path="verification/cursor_hover.png")
                print("Hover cursor screenshot taken.")
            else:
                print("Link found but no bounding box.")
        else:
            print("No link found to hover.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
