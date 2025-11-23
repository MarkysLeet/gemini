from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate desktop
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        try:
            # 1. Verify Project Page Spacing & Dividers
            print("Navigating to Aura Memoria project page...")
            page.goto("http://localhost:3000/projects/aura-memoria")

            # Wait for content to load
            page.wait_for_timeout(3000)

            # Screenshot of the top part (Header + Back button + spacing)
            print("Taking screenshot of top part...")
            page.screenshot(path="verification/project_top_spacing.png", clip={"x": 0, "y": 0, "width": 1280, "height": 600})

            # Screenshot of dividers between blocks
            # Scroll down to see blocks
            page.mouse.wheel(0, 800)
            page.wait_for_timeout(1000)
            print("Taking screenshot of dividers...")
            page.screenshot(path="verification/project_dividers.png", clip={"x": 0, "y": 0, "width": 1280, "height": 1000})

            # 2. Verify Desktop Header "Narrowing"
            print("Taking screenshot of header only...")
            page.screenshot(path="verification/desktop_header.png", clip={"x": 0, "y": 0, "width": 1280, "height": 100})

            # 3. Verify Image Styles (Hover effect) - Hard to fully verify visually in static shot but we can try
            # Hover over an image placeholder if found
            # Selector for an image container in ContentFeature
            # ContentFeature renders ImagePlaceholder inside a div with relative group
            # We can try to hover over a known block image
            # aura-memoria has blocks with images

            # Locate an image placeholder
            # The structure is complicated, but let's try to find an image
            image_locator = page.locator("img[alt='Светлая тема (Light Mode)']").first
            if image_locator.count() > 0:
                print("Hovering over image...")
                image_locator.hover()
                page.wait_for_timeout(500)
                page.screenshot(path="verification/image_hover.png")
            else:
                print("Could not find specific image to hover")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
