
import time
from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Mobile View - Verify Featured Projects Height
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
            page_mobile.screenshot(path="verification/mobile_featured.png")
            print("Mobile screenshot taken.")

        except Exception as e:
            print(f"Mobile verification failed: {e}")
        finally:
            context_mobile.close()

        # 2. Desktop View - Verify Services Page
        context_desktop = browser.new_context(viewport={"width": 1280, "height": 800})
        page_desktop = context_desktop.new_page()
        try:
            page_desktop.goto("http://localhost:3000/services", timeout=60000)
            page_desktop.wait_for_timeout(2000) # Wait for animations

            # Check for new text
            page_desktop.locator("text=Быстрый Старт").wait_for(state="visible")
            page_desktop.locator("text=Бизнес + AI").wait_for(state="visible")
            page_desktop.locator("text=Цифровая Система").wait_for(state="visible")

            # Check prices
            page_desktop.locator("text=7,500 ₺ +").wait_for(state="visible")
            page_desktop.locator("text=15,000 ₺ +").wait_for(state="visible")
            page_desktop.locator("text=30,000 ₺ +").wait_for(state="visible")

            page_desktop.screenshot(path="verification/desktop_services.png")
            print("Desktop Services screenshot taken.")

        except Exception as e:
            print(f"Desktop Services verification failed: {e}")
        finally:
            context_desktop.close()

        browser.close()

if __name__ == "__main__":
    verify_changes()
