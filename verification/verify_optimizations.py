import time
from playwright.sync_api import sync_playwright, expect

def verify_optimizations():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Verify Desktop View (Cursor should be present)
        print("Verifying Desktop View...")
        context_desktop = browser.new_context(
            viewport={'width': 1280, 'height': 720},
            has_touch=False
        )
        page_desktop = context_desktop.new_page()
        try:
            page_desktop.goto("http://localhost:3000", timeout=60000)

            # Wait for hydration
            page_desktop.wait_for_timeout(2000)

            # Aurora Background should exist
            aurora = page_desktop.locator("div.fixed.inset-0.-z-10")
            expect(aurora).to_be_visible()

            # Custom Cursor should be present (look for the fixed rounded-full div with z-[999])
            cursor = page_desktop.locator("div.fixed.top-0.left-0.rounded-full.z-\\[999\\]")
            if cursor.count() > 0:
                expect(cursor).to_be_visible()
                print("PASS: Custom Cursor found on desktop.")
            else:
                print("FAIL: Custom Cursor not found on desktop.")

            page_desktop.screenshot(path="verification/desktop.png")

        except Exception as e:
            print(f"Error in desktop verification: {e}")
        finally:
            context_desktop.close()

        # 2. Verify Mobile View (Cursor should NOT be present)
        print("Verifying Mobile View...")
        context_mobile = browser.new_context(
            viewport={'width': 375, 'height': 667},
            has_touch=True,
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        )
        page_mobile = context_mobile.new_page()
        try:
            page_mobile.goto("http://localhost:3000", timeout=60000)

            # Wait for hydration
            page_mobile.wait_for_timeout(2000)

            # Aurora Background should exist
            aurora = page_mobile.locator("div.fixed.inset-0.-z-10")
            expect(aurora).to_be_visible()
            print("PASS: Aurora Background visible on mobile.")

            # Custom Cursor should NOT be present
            cursor = page_mobile.locator("div.fixed.top-0.left-0.rounded-full.z-\\[999\\]")

            # Wait a bit to ensure useEffect runs
            page_mobile.wait_for_timeout(1000)

            if cursor.count() == 0:
                print("PASS: Custom Cursor NOT found on mobile (as expected).")
            else:
                # Check visibility, it might be hidden or return null which means not in DOM
                if not cursor.is_visible():
                     print("PASS: Custom Cursor found but not visible.")
                else:
                     print("FAIL: Custom Cursor found and visible on mobile.")

            page_mobile.screenshot(path="verification/mobile.png")

        except Exception as e:
            print(f"Error in mobile verification: {e}")
        finally:
            context_mobile.close()

        browser.close()

if __name__ == "__main__":
    verify_optimizations()
