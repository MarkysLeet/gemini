from playwright.sync_api import sync_playwright

def verify_project_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport to test responsiveness too, or Desktop? User asked for beautiful structure.
        # Let's test Desktop first.
        page = browser.new_page(viewport={"width": 1400, "height": 900})

        print("Navigating to Aura Memoria project page...")
        try:
            page.goto("http://localhost:3000/projects/aura-memoria", timeout=60000)
        except Exception as e:
            print(f"Navigation failed: {e}")
            return

        # Wait for preloader to finish
        print("Waiting for preloader...")
        page.wait_for_timeout(6000)

        # 1. Top Section (Hero + Overview)
        print("Taking screenshot of Top section...")
        page.screenshot(path="verification/1_top.png")

        # 2. Split Slider Section
        print("Looking for Dark Mode slider...")
        # Searching for the title we added
        slider_title = page.get_by_text("Dark Mode", exact=False).first
        if slider_title.count() > 0:
            slider_title.scroll_into_view_if_needed()
            # Wait for any scroll animations
            page.wait_for_timeout(1000)
            print("Taking screenshot of Slider section...")
            page.screenshot(path="verification/2_slider.png")
        else:
            print("Warning: Dark Mode slider title not found.")

        # 3. Admin Dashboard Feature
        print("Looking for Admin Dashboard...")
        admin_title = page.get_by_text("Admin Dashboard", exact=False).first
        if admin_title.count() > 0:
            admin_title.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            print("Taking screenshot of Admin section...")
            page.screenshot(path="verification/3_admin.png")
        else:
            print("Warning: Admin Dashboard title not found.")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_project_page()
