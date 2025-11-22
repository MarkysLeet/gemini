
import time
from playwright.sync_api import sync_playwright

def verify_adjustments():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Mobile View - Verify Featured Projects Alignment
        context_mobile = browser.new_context(viewport={"width": 375, "height": 812})
        page_mobile = context_mobile.new_page()
        try:
            page_mobile.goto("http://localhost:3000", timeout=60000)
            # Bypass preloader
            page_mobile.wait_for_timeout(5000)

            # Scroll to Featured Projects
            featured_section = page_mobile.locator("text=Избранные кейсы").first
            featured_section.scroll_into_view_if_needed()
            page_mobile.wait_for_timeout(1000)

            # Take screenshot of Featured Projects on Mobile
            page_mobile.screenshot(path="verification/mobile_featured_v2.png")
            print("Mobile Featured Projects screenshot taken.")

        except Exception as e:
            print(f"Mobile verification failed: {e}")
        finally:
            context_mobile.close()

        # 2. Projects Page - Verify Images
        context_desktop = browser.new_context(viewport={"width": 1280, "height": 800})
        page_projects = context_desktop.new_page()
        try:
            page_projects.goto("http://localhost:3000/projects", timeout=60000)
            # Bypass preloader
            page_projects.wait_for_timeout(5000)
            page_projects.wait_for_timeout(2000) # Wait for animations

            page_projects.screenshot(path="verification/projects_page_images.png")
            print("Projects Page screenshot taken.")

        except Exception as e:
            print(f"Projects Page verification failed: {e}")
        finally:
            page_projects.close()

        # 3. Services Page - Verify Text
        page_services = browser.new_page()
        try:
            page_services.goto("http://localhost:3000/services", timeout=60000)
            page_services.wait_for_timeout(2000)

            # Check specific text changes
            page_services.locator("text=От 48 часов").wait_for(state="visible")
            page_services.locator("text=От 5 дней").wait_for(state="visible")
            page_services.locator("text=Приоритетная поддержка").wait_for(state="visible")
            page_services.locator("text=Конверсия в Ватсап/Инстаграмм").wait_for(state="visible")

            page_services.screenshot(path="verification/services_text_v2.png")
            print("Services Text screenshot taken.")

        except Exception as e:
             print(f"Services Text verification failed: {e}")
        finally:
            page_services.close()

        browser.close()

if __name__ == "__main__":
    verify_adjustments()
