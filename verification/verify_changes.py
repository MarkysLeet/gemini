import time
from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 720}
        )
        page = context.new_page()

        try:
            # Navigate to the page
            print("Navigating to homepage...")
            page.goto("http://localhost:3000")

            # Wait for preloader to finish or manually remove it
            # Memory says there's a preloader issue in headless, so bypassing it is good
            # But let's try waiting first as we want to see the Aurora background
            print("Waiting for page to load...")
            time.sleep(5) # Wait for preloader animation

            # Taking screenshot of Aurora Background
            print("Taking screenshot of homepage (Aurora Background)...")
            page.screenshot(path="verification/aurora_bg.png")

            # To verify cursor, we need to simulate mouse movement
            # But headless cursor is tricky to capture in screenshot unless we force it
            # The custom cursor is a div, so it should appear if we move the mouse

            print("Simulating mouse movement for cursor...")
            page.mouse.move(500, 500)
            time.sleep(0.5) # Wait for instant move
            page.screenshot(path="verification/cursor_default.png")

            # Hover over a link to see expansion
            # Assuming there's a link or button
            print("Hovering over a button to check cursor expansion...")
            # Find a link/button
            element = page.query_selector('a')
            if element:
                box = element.bounding_box()
                if box:
                    x = box['x'] + box['width'] / 2
                    y = box['y'] + box['height'] / 2
                    page.mouse.move(x, y)
                    time.sleep(1) # Wait for animation (0.4s)
                    page.screenshot(path="verification/cursor_hover.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
