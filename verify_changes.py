import time
from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 375, "height": 667}) # Mobile Viewport
        page = context.new_page()

        try:
            # 1. Visit Home Page
            print("Navigating to home page...")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for preloader to finish
            print("Waiting for preloader...")
            time.sleep(5)

            # Force hide preloader if it's still there (common issue in headless)
            # Escaping brackets for querySelector
            page.evaluate("const el = document.querySelector('.z-\\\\[100\\\\]'); if(el) el.remove();")

            # Screenshot Home
            page.screenshot(path="/home/jules/verification/1_home_mobile.png")
            print("Home page screenshot taken.")

            # 2. Open Mobile Menu
            print("Opening mobile menu...")
            # The burger button is in the header. It's a button inside the .md:hidden div
            # Since I don't have a specific ID or text for the button, I'll look for the button element
            menu_button = page.locator("header button")
            menu_button.click()

            # Wait for animation
            time.sleep(1)

            # Screenshot Menu
            page.screenshot(path="/home/jules/verification/2_mobile_menu.png")
            print("Mobile menu screenshot taken.")

            # 3. Check Footer Info in Menu
            content = page.content()
            if "grozantwink@gmail.com" in content:
                print("Verified: Contact email present in menu.")
            else:
                print("Failed: Contact email NOT found in menu.")

            # 4. Navigate to Projects
            print("Navigating to Projects page...")
            # Click 'Проекты' in the mobile menu.
            # The desktop version is hidden, but the mobile one is visible in the modal.
            # Use a specific selector to ensure we click the one in the mobile menu (inside the modal)
            # The modal is likely inside AnimatePresence which mounts/unmounts.
            # We can select by text and ensure it is visible.
            page.locator("nav ul li a").get_by_text("Проекты").last.click()

            time.sleep(2) # Wait for transition

            page.screenshot(path="/home/jules/verification/3_projects_page.png")
            print("Projects page screenshot taken.")

            # 5. Navigate to a Project (Testing Black Screen Fix)
            print("Navigating to specific project...")
            # Find a link to a project.
            # I added a specific structure in ProjectsPage.
            # Let's find the first project card link.
            page.locator("a[href^='/projects/']").first.click()

            time.sleep(3) # Wait for transition and scroll

            # Check if content is visible (not black screen)
            # We can check for the project title or description visibility
            # Or just take a screenshot
            page.screenshot(path="/home/jules/verification/4_project_detail.png")
            print("Project detail screenshot taken.")

            # 6. Desktop View for Aurora & Header Blur
            print("Switching to Desktop...")
            context_desktop = browser.new_context(viewport={"width": 1920, "height": 1080})
            page_desktop = context_desktop.new_page()
            page_desktop.goto("http://localhost:3000")
            time.sleep(5)
             # Force hide preloader if it's still there (common issue in headless)
            page_desktop.evaluate("const el = document.querySelector('.z-\\\\[100\\\\]'); if(el) el.remove();")

            page_desktop.screenshot(path="/home/jules/verification/5_desktop_home.png")
            print("Desktop home screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
