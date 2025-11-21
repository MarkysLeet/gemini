from playwright.sync_api import sync_playwright, expect

def test_cursor_hover(page):
    print("Navigating to home page...")
    page.goto("http://localhost:3000")

    # Wait for preloader to finish (conservative wait)
    print("Waiting for page to load...")
    page.wait_for_timeout(5000)

    # Find the cursor element
    # Selector based on classes: fixed top-0 left-0 rounded-full pointer-events-none z-[999]
    cursor_selector = ".fixed.top-0.left-0.rounded-full.z-\\[999\\]"
    cursor = page.locator(cursor_selector)

    # Initial state check
    expect(cursor).to_be_visible()
    box = cursor.bounding_box()
    print(f"Initial cursor size: {box['width']}x{box['height']}")

    # Standard size is 16px
    if not (14 < box['width'] < 18):
        print(f"Warning: Initial cursor size {box['width']} is unexpected (expected ~16).")

    # Find a button to hover
    print("Finding a button to hover...")
    # "Evaluate idea with AI" button is dynamically rendered, so this is a good test for our fix.
    # Or the hero button. Let's try finding any button.
    button = page.locator("button").first
    if not button.is_visible():
         print("Button not visible, waiting...")
         button.wait_for(state="visible")

    print("Hovering over button...")
    button.hover()

    # Wait for animation (0.2s duration)
    page.wait_for_timeout(500)

    # Check cursor size again
    box_hover = cursor.bounding_box()
    print(f"Hover cursor size: {box_hover['width']}x{box_hover['height']}")

    # Text state size is 64px
    if box_hover['width'] > 50:
        print("Success: Cursor expanded.")
    else:
        print("Failure: Cursor did not expand.")

    # Screenshot
    print("Taking screenshot...")
    page.screenshot(path="verification/cursor_test.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        # Force has_touch=False to ensure we use mouse logic
        browser = p.chromium.launch(headless=True)
        # Create context with no touch support
        context = browser.new_context(has_touch=False, viewport={'width': 1280, 'height': 720})
        page = context.new_page()
        try:
            test_cursor_hover(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
