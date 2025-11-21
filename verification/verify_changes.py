from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # We need a context that allows touch emulation or check cursor,
        # but standard check is fine. Note: Custom cursor is hard to capture in screenshot
        # because playwright screenshots don't always capture OS cursor, and custom div cursor
        # might need mouse movement simulation.
        page = browser.new_page()

        # 1. Verify Services Page (Pricing Cards Animation)
        print("Navigating to Services Page...")
        page.goto("http://localhost:3000/services")
        page.wait_for_timeout(4000) # Wait for preloader/animation bypass

        # Check if pricing plans are visible immediately (opacity 1)
        plans = page.locator("text=6,000 ₺ +")
        if plans.count() > 0:
            print("Services page loaded.")
            page.screenshot(path="verification/services_page.png")
            print("Services page screenshot saved.")
        else:
            print("Services page might not have loaded correctly.")

        # 2. Verify Contact Form (Phone Input)
        print("Navigating to Contact Page...")
        page.goto("http://localhost:3000/contact")
        page.wait_for_timeout(2000)

        # Check for Phone input
        phone_input = page.locator("input[type='tel']")
        if phone_input.count() > 0:
            print("Phone input found.")
        else:
            print("ERROR: Phone input not found.")

        page.screenshot(path="verification/contact_page.png")
        print("Contact page screenshot saved.")

        # 3. Verify AI Modal Buttons (indirectly via text content check if we could open it)
        # Since opening modal requires interaction, we'll just check if translation file was updated
        # by checking if we can see the text on the modal if we open it.
        # But for now, let's stick to page verification.

        browser.close()

if __name__ == "__main__":
    verify_changes()
