import subprocess
import os
from PIL import Image

BASE_DIR = r"D:/KERJAAN/circulife"
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
APP_DIR = os.path.join(BASE_DIR, "src/app")
DOCS_DIR = os.path.join(BASE_DIR, "docs")

os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(APP_DIR, exist_ok=True)

CHROME_BIN = r"C:/Program Files/Google/Chrome/Application/chrome.exe"

def render_chrome(html_path, out_path, width, height):
    cmd = [
        CHROME_BIN,
        "--headless",
        f"--screenshot={out_path}",
        f"--window-size={width},{height}",
        "--hide-scrollbars",
        f"file:///{html_path}"
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"Rendered {out_path} ({width}x{height})")

# 1. Render OG image (1200x630)
og_html = os.path.join(DOCS_DIR, "og-template.html")
og_out_app = os.path.join(APP_DIR, "opengraph-image.png")
og_out_pub = os.path.join(PUBLIC_DIR, "opengraph-image.png")
render_chrome(og_html, og_out_app, 1200, 630)
render_chrome(og_html, og_out_pub, 1200, 630)

# 2. Render Icon Mark base (512x512)
icon_html = os.path.join(DOCS_DIR, "icon-mark.html")
icon_512_pub = os.path.join(PUBLIC_DIR, "icon-512.png")
render_chrome(icon_html, icon_512_pub, 512, 512)

# 3. Generate icon-192.png, apple-icon.png, and favicon.ico using Pillow
base_img = Image.open(icon_512_pub)

# 192x192
icon_192 = base_img.resize((192, 192), Image.Resampling.LANCZOS)
icon_192.save(os.path.join(PUBLIC_DIR, "icon-192.png"))
print("Saved public/icon-192.png")

# 180x180 (Apple Touch Icon)
apple_180 = base_img.resize((180, 180), Image.Resampling.LANCZOS)
apple_180.save(os.path.join(PUBLIC_DIR, "apple-icon.png"))
apple_180.save(os.path.join(APP_DIR, "apple-icon.png"))
print("Saved apple-icon.png (180x180)")

# Multi-resolution Favicon.ico (16, 32, 48)
base_img.save(
    os.path.join(PUBLIC_DIR, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)]
)
base_img.save(
    os.path.join(APP_DIR, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)]
)
print("Saved favicon.ico (16x16, 32x32, 48x48)")

print("All brand & SEO icon assets successfully generated!")
