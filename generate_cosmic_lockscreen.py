import os
import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = r"e:\downloads\countdown"
FONT_DIR = r"C:\Windows\Fonts"

def get_font(name, size):
    try:
        path = os.path.join(FONT_DIR, name)
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    except Exception:
        pass
    try:
        for f in ["segoeui.ttf", "segoeuil.ttf", "arial.ttf", "tahoma.ttf"]:
            p = os.path.join(FONT_DIR, f)
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    except Exception:
        pass
    return ImageFont.load_default()

def draw_rounded_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    x1, y1, x2, y2 = bbox
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius, fill=fill, outline=outline, width=width)

def draw_glow_rounded(img, bbox, radius, glow_color, blur_radius=18):
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    draw_rounded_rect(gdraw, bbox, radius=radius, fill=glow_color)
    glow = glow.filter(ImageFilter.GaussianBlur(blur_radius))
    img.alpha_composite(glow)

# Precise icon drawers matching media_1795361195270_1b74ea51.jpg
def draw_orbit_loop(draw, cx, cy, color):
    # Elliptical loop rotated with dot
    draw.ellipse([cx - 14, cy - 7, cx + 14, cy + 7], outline=color, width=2)
    draw.ellipse([cx - 8, cy - 4, cx - 4, cy], fill=color)

def draw_solar_array(draw, cx, cy, color):
    # Solar panel grid
    draw.rounded_rectangle([cx - 14, cy - 9, cx + 14, cy + 6], radius=2, outline=color, width=2)
    draw.line([(cx - 5, cy - 9), (cx - 5, cy + 6)], fill=color, width=1)
    draw.line([(cx + 5, cy - 9), (cx + 5, cy + 6)], fill=color, width=1)
    draw.line([(cx - 14, cy - 1), (cx + 14, cy - 1)], fill=color, width=1)
    draw.line([(cx, cy + 6), (cx, cy + 12)], fill=color, width=2)
    draw.line([(cx - 6, cy + 12), (cx + 6, cy + 12)], fill=color, width=2)

def draw_relay_dish(draw, cx, cy, color):
    # Dish antenna with signal waves
    draw.arc([cx - 12, cy - 12, cx + 10, cy + 10], 110, 290, fill=color, width=2)
    draw.line([(cx - 1, cy - 1), (cx - 7, cy + 7)], fill=color, width=2)
    draw.ellipse([cx - 2, cy - 2, cx + 2, cy + 2], fill=color)
    draw.arc([cx - 2, cy - 14, cx + 14, cy + 2], 260, 360, fill=color, width=2)
    draw.arc([cx + 4, cy - 18, cx + 20, cy - 2], 260, 360, fill=color, width=2)

def draw_star_reticle(draw, cx, cy, color):
    # 4-corner reticle and central 4-point star
    s = 11
    # Corners
    draw.line([(cx - s, cy - s + 4), (cx - s, cy - s), (cx - s + 4, cy - s)], fill=color, width=2)
    draw.line([(cx + s - 4, cy - s), (cx + s, cy - s), (cx + s, cy - s + 4)], fill=color, width=2)
    draw.line([(cx - s, cy + s - 4), (cx - s, cy + s), (cx - s + 4, cy + s)], fill=color, width=2)
    draw.line([(cx + s - 4, cy + s), (cx + s, cy + s), (cx + s, cy + s - 4)], fill=color, width=2)
    # Center star
    draw.line([(cx, cy - 6), (cx, cy + 6)], fill=color, width=2)
    draw.line([(cx - 6, cy), (cx + 6, cy)], fill=color, width=2)
    draw.ellipse([cx - 2, cy - 2, cx + 2, cy + 2], fill=color)

def draw_cube_cluster(draw, cx, cy, color):
    # Isometric tech cube cluster
    draw.polygon([(cx, cy - 10), (cx + 8, cy - 5), (cx, cy), (cx - 8, cy - 5)], outline=color)
    draw.polygon([(cx - 8, cy - 5), (cx, cy), (cx, cy + 8), (cx - 8, cy + 3)], outline=color)
    draw.polygon([(cx + 8, cy - 5), (cx, cy), (cx, cy + 8), (cx + 8, cy + 3)], outline=color)

def draw_planet_orbit(draw, cx, cy, color):
    # Planet with orbit dot
    draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], outline=color, width=2)
    draw.ellipse([cx - 13, cy - 13, cx + 13, cy + 13], outline=(77, 232, 244, 140), width=1)
    draw.ellipse([cx + 7, cy - 10, cx + 11, cy - 6], fill=color)

def generate_mobile_wallpaper():
    width, height = 1080, 1920
    img = Image.new("RGBA", (width, height), (3, 7, 18, 255))
    draw = ImageDraw.Draw(img)

    # 1. Base Deep Space Void Gradient
    for y in range(height):
        factor = y / height
        r = int(3 + factor * 5)
        g = int(7 + factor * 9)
        b = int(18 + factor * 18)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # 2. Subtle Starfield
    random.seed(42)
    for _ in range(160):
        sx = random.randint(20, width - 20)
        sy = random.randint(30, height - 30)
        alpha = random.randint(100, 240)
        size = random.choice([1, 1, 1, 2])
        draw.rectangle([sx, sy, sx + size, sy + size], fill=(255, 255, 255, alpha))

    # 3. Dynamic Island Notch at top
    notch_w, notch_h = 240, 60
    notch_x1 = (width - notch_w) // 2
    notch_y1 = 40
    draw.rounded_rectangle([notch_x1, notch_y1, notch_x1 + notch_w, notch_y1 + notch_h], radius=30, fill=(0, 0, 0, 255))
    draw.ellipse([notch_x1 + notch_w - 45, notch_y1 + 18, notch_x1 + notch_w - 20, notch_y1 + 43], fill=(8, 16, 28, 255), outline=(60, 70, 90, 255), width=1)
    draw.ellipse([notch_x1 + 30, notch_y1 + 22, notch_x1 + 46, notch_y1 + 38], fill=(3, 7, 14, 255))

    # 4. Status Bar
    font_status = get_font("segoeui.ttf", 28)
    draw.text((100, 52), "19:37", font=font_status, fill=(255, 255, 255, 240))
    # Wifi/Cell icons placeholder
    draw.rectangle([width - 150, 58, width - 110, 78], outline=(255, 255, 255, 220), width=2)
    draw.rectangle([width - 146, 62, width - 122, 74], fill=(255, 255, 255, 220))

    # 5. Header: DEEP SPACE & SUNDAY, NOVEMBER 22
    font_micro = get_font("segoeui.ttf", 26)
    font_date = get_font("segoeui.ttf", 25)
    font_clock = get_font("segoeuil.ttf", 160)

    # Centered DEEP SPACE
    draw.text((width // 2, 160), "D E E P   S P A C E", font=font_micro, fill=(203, 213, 225, 240), anchor="mt")

    # Winged date
    date_str = "SUNDAY, NOVEMBER 22"
    bbox_d = draw.textbbox((0, 0), date_str, font=font_date)
    dw = bbox_d[2] - bbox_d[0]
    date_y = 215
    draw.text((width // 2, date_y), date_str, font=font_date, fill=(148, 163, 184, 230), anchor="mt")
    # Hairline wings
    draw.line([(width // 2 - dw // 2 - 80, date_y + 16), (width // 2 - dw // 2 - 20, date_y + 16)], fill=(148, 163, 184, 140), width=1)
    draw.line([(width // 2 + dw // 2 + 20, date_y + 16), (width // 2 + dw // 2 + 80, date_y + 16)], fill=(148, 163, 184, 140), width=1)

    # Hero Clock 19:37 with soft ambient glow
    clock_glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    cg_draw = ImageDraw.Draw(clock_glow)
    cg_draw.text((width // 2, 280), "19:37", font=font_clock, fill=(77, 232, 244, 90), anchor="mt")
    clock_glow = clock_glow.filter(ImageFilter.GaussianBlur(16))
    img.alpha_composite(clock_glow)
    draw = ImageDraw.Draw(img)
    draw.text((width // 2, 280), "19:37", font=font_clock, fill=(255, 255, 255, 255), anchor="mt")

    # 6. ORBIT INSERTION Card (border-radius: 36)
    card_w, card_h = 940, 420
    cx1 = (width - card_w) // 2
    cy1 = 490
    cx2 = cx1 + card_w
    cy2 = cy1 + card_h

    # Card background glow & body
    draw_glow_rounded(img, (cx1, cy1, cx2, cy2), radius=36, glow_color=(77, 232, 244, 35), blur_radius=20)
    draw = ImageDraw.Draw(img)
    draw_rounded_rect(draw, (cx1, cy1, cx2, cy2), radius=36, fill=(8, 18, 36, 220), outline=(77, 232, 244, 75), width=2)

    # Faint Radar Ellipses inside card
    rcx, rcy = (cx1 + cx2) // 2, cy1 + 200
    draw.ellipse([rcx - 380, rcy - 120, rcx + 380, rcy + 120], outline=(77, 232, 244, 25), width=1)
    draw.ellipse([rcx - 260, rcy - 80, rcx + 260, rcy + 80], outline=(77, 232, 244, 38), width=1)
    draw.ellipse([rcx - 140, rcy - 45, rcx + 140, rcy + 45], outline=(77, 232, 244, 50), width=1)
    # Center dot & glowing waypoint
    draw.ellipse([rcx - 3, rcy - 3, rcx + 3, rcy + 3], fill=(77, 232, 244, 180))
    # Active Waypoint dot on ellipse
    wx, wy = rcx + 180, rcy - 56
    draw.ellipse([wx - 8, wy - 8, wx + 8, wy + 8], fill=(77, 232, 244, 255))
    draw.ellipse([wx - 14, wy - 14, wx + 14, wy + 14], outline=(77, 232, 244, 120), width=2)

    # Card Title: ORBIT INSERTION with wings
    font_card_title = get_font("segoeui.ttf", 26)
    title_str = "ORBIT INSERTION"
    draw.text((width // 2, cy1 + 34), title_str, font=font_card_title, fill=(255, 255, 255, 255), anchor="mt")
    bbox_t = draw.textbbox((0, 0), title_str, font=font_card_title)
    tw = bbox_t[2] - bbox_t[0]
    draw.line([(cx1 + 50, cy1 + 48), (width // 2 - tw // 2 - 25, cy1 + 48)], fill=(77, 232, 244, 90), width=1)
    draw.line([(width // 2 + tw // 2 + 25, cy1 + 48), (cx2 - 50, cy1 + 48)], fill=(77, 232, 244, 90), width=1)

    # 4 Countdown Tiles
    tile_w = 190
    tile_h = 160
    tile_gap = 24
    start_tx = cx1 + (card_w - (tile_w * 4 + tile_gap * 3)) // 2
    tile_y = cy1 + 95

    font_tile_num = get_font("segoeuil.ttf", 68)
    font_tile_unit = get_font("segoeui.ttf", 22)
    tiles_data = [("29", "DAYS"), ("18", "HRS"), ("28", "MIN"), ("53", "SEC")]

    for i, (val, unit) in enumerate(tiles_data):
        tx1 = start_tx + i * (tile_w + tile_gap)
        ty1 = tile_y
        tx2 = tx1 + tile_w
        ty2 = ty1 + tile_h

        draw_rounded_rect(draw, (tx1, ty1, tx2, ty2), radius=20, fill=(10, 22, 42, 210), outline=(77, 232, 244, 75), width=2)
        draw.text(((tx1 + tx2) // 2, ty1 + 22), val, font=font_tile_num, fill=(255, 255, 255, 255), anchor="mt")
        draw.text(((tx1 + tx2) // 2, ty1 + 115), unit, font=font_tile_unit, fill=(148, 163, 184, 255), anchor="mt")

    # Progress Section inside card
    font_prog_l = get_font("segoeui.ttf", 24)
    font_prog_r = get_font("segoeui.ttf", 24)
    draw.text((cx1 + 50, cy1 + 300), "3 OF 5 PHASES COMPLETE", font=font_prog_l, fill=(148, 163, 184, 240))
    draw.text((cx2 - 50, cy1 + 300), "60%", font=font_prog_r, fill=(255, 255, 255, 255), anchor="rt")

    # Progress Bar Track & Glowing Cyan Fill
    bar_x1, bar_y1 = cx1 + 50, cy1 + 342
    bar_x2, bar_y2 = cx2 - 50, cy1 + 356
    draw_rounded_rect(draw, (bar_x1, bar_y1, bar_x2, bar_y2), radius=7, fill=(255, 255, 255, 22))

    fill_w = int((bar_x2 - bar_x1) * 0.6)
    draw_rounded_rect(draw, (bar_x1, bar_y1, bar_x1 + fill_w, bar_y2), radius=7, fill=(77, 232, 244, 255))
    draw_glow_rounded(img, (bar_x1, bar_y1, bar_x1 + fill_w, bar_y2), radius=7, glow_color=(77, 232, 244, 160), blur_radius=8)
    draw = ImageDraw.Draw(img)

    # 7. Stacked 6 Uniform Phase Rows (Pills with Icon | Title >)
    row_w = card_w
    row_h = 105
    row_gap = 18
    start_ry = cy2 + 35
    rx1 = (width - row_w) // 2
    rx2 = rx1 + row_w

    phases = [
        ("trajectory", "Trajectory & Telemetry", (77, 232, 244)),
        ("solar",      "Solar Array & Power",    (167, 139, 250)),
        ("dish",       "Deep Space Relay",       (77, 232, 244)),
        ("tracker",    "Star Tracker",           (167, 139, 250)),
        ("payload",    "Payload Calibration",    (77, 232, 244)),
        ("insertion",  "Orbit Insertion",        (167, 139, 250))
    ]

    font_row_title = get_font("segoeui.ttf", 30)
    font_chevron = get_font("segoeui.ttf", 32)

    for i, (ptype, title, sep_color) in enumerate(phases):
        ry1 = start_ry + i * (row_h + row_gap)
        ry2 = ry1 + row_h

        # Pill background
        draw_rounded_rect(draw, (rx1, ry1, rx2, ry2), radius=22, fill=(8, 18, 36, 190), outline=(77, 232, 244, 55), width=2)

        # Left Icon
        icon_cx = rx1 + 55
        icon_cy = (ry1 + ry2) // 2
        cyan_color = (77, 232, 244, 255)

        if ptype == "trajectory":
            draw_orbit_loop(draw, icon_cx, icon_cy, cyan_color)
        elif ptype == "solar":
            draw_solar_array(draw, icon_cx, icon_cy, cyan_color)
        elif ptype == "dish":
            draw_relay_dish(draw, icon_cx, icon_cy, cyan_color)
        elif ptype == "tracker":
            draw_star_reticle(draw, icon_cx, icon_cy, cyan_color)
        elif ptype == "payload":
            draw_cube_cluster(draw, icon_cx, icon_cy, cyan_color)
        elif ptype == "insertion":
            draw_planet_orbit(draw, icon_cx, icon_cy, cyan_color)

        # Vertical Separator |
        sep_x = rx1 + 110
        draw.line([(sep_x, ry1 + 28), (sep_x, ry2 - 28)], fill=sep_color + (140,), width=2)

        # Title text
        draw.text((rx1 + 140, icon_cy), title, font=font_row_title, fill=(241, 245, 249, 255), anchor="lm")

        # Right Chevron >
        draw.text((rx2 - 45, icon_cy), ">", font=font_chevron, fill=(100, 116, 139, 255), anchor="mm")

    # 8. Home indicator
    draw.rounded_rectangle([(width - 320) // 2, height - 35, (width + 320) // 2, height - 25], radius=5, fill=(255, 255, 255, 180))

    out_path = os.path.join(OUTPUT_DIR, "wallpaper_cosmic_lockscreen.png")
    img.save(out_path, format="PNG")
    print(f"Generated mobile wallpaper at: {out_path}")
    return img

def generate_cover_preview(mobile_img):
    # 1800 x 1200 Cover Showcase framed inside spaceship observation cupola
    cov_w, cov_h = 1800, 1200
    cover = Image.new("RGBA", (cov_w, cov_h), (2, 5, 12, 255))
    cdraw = ImageDraw.Draw(cover)

    # 1. Background Space Viewport
    for y in range(cov_h):
        f = y / cov_h
        cdraw.line([(0, y), (cov_w, y)], fill=(int(2 + f * 5), int(5 + f * 9), int(12 + f * 20), 255))

    # Starfield outside viewport
    random.seed(99)
    for _ in range(200):
        sx = random.randint(30, cov_w - 30)
        sy = random.randint(30, cov_h - 30)
        cdraw.rectangle([sx, sy, sx + 1, sy + 1], fill=(255, 255, 255, random.randint(120, 255)))

    # Giant circular spaceship viewport ring
    vp_cx, vp_cy = cov_w // 2, cov_h // 2 - 20
    vp_r = 540
    cdraw.ellipse([vp_cx - vp_r, vp_cy - vp_r, vp_cx + vp_r, vp_cy + vp_r], outline=(15, 28, 48, 255), width=28)
    cdraw.ellipse([vp_cx - vp_r - 28, vp_cy - vp_r - 28, vp_cx + vp_r + 28, vp_cy + vp_r + 28], outline=(77, 232, 244, 70), width=4)

    # Crescent blue planet in viewport
    px, py = vp_cx + 340, vp_cy + 180
    cdraw.ellipse([px - 40, py - 40, px + 40, py + 40], fill=(2, 5, 12, 255))
    cdraw.arc([px - 40, py - 40, px + 40, py + 40], 280, 80, fill=(56, 189, 248, 255), width=8)

    # Observation console surface at bottom
    cdraw.rectangle([0, cov_h - 180, cov_w, cov_h], fill=(7, 16, 32, 255))
    cdraw.line([(0, cov_h - 180), (cov_w, cov_h - 180)], fill=(77, 232, 244, 90), width=2)
    # Console lights
    cdraw.ellipse([cov_w // 2 - 120, cov_h - 90, cov_w // 2 - 105, cov_h - 75], fill=(77, 232, 244, 255))
    cdraw.ellipse([cov_w // 2 + 105, cov_h - 90, cov_w // 2 + 120, cov_h - 75], fill=(59, 130, 246, 255))

    # Resize mobile image to fit phone mockup
    phone_h = 1000
    phone_w = int(phone_h * (1080 / 1920))
    phone_screen = mobile_img.resize((phone_w, phone_h), Image.Resampling.LANCZOS)

    # Phone hardware mockup frame
    frame_w = phone_w + 32
    frame_h = phone_h + 32
    fx1 = (cov_w - frame_w) // 2
    fy1 = (cov_h - frame_h) // 2 - 30
    fx2 = fx1 + frame_w
    fy2 = fy1 + frame_h

    # Shadow & Titanium chassis
    draw_glow_rounded(cover, (fx1 - 10, fy1 - 10, fx2 + 10, fy2 + 10), radius=56, glow_color=(0, 0, 0, 200), blur_radius=30)
    draw_glow_rounded(cover, (fx1, fy1, fx2, fy2), radius=54, glow_color=(77, 232, 244, 80), blur_radius=20)
    cdraw = ImageDraw.Draw(cover)
    draw_rounded_rect(cdraw, (fx1, fy1, fx2, fy2), radius=54, fill=(5, 11, 22, 255), outline=(77, 232, 244, 110), width=3)

    # Paste phone screen
    cover.paste(phone_screen, (fx1 + 16, fy1 + 16), phone_screen)

    out_cover = os.path.join(OUTPUT_DIR, "cover_cosmic_3x2.png")
    cover.save(out_cover, format="PNG")
    print(f"Generated cover preview at: {out_cover}")

if __name__ == "__main__":
    mob = generate_mobile_wallpaper()
    generate_cover_preview(mob)
