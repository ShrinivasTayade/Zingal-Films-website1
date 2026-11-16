import os
import shutil
import fitz
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(BASE_DIR, "public", "assets")
os.makedirs(os.path.join(ASSETS_DIR, "video"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "images"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "posters"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "stills"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "studio"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "equipment"), exist_ok=True)
os.makedirs(os.path.join(ASSETS_DIR, "clients"), exist_ok=True)

# 1. Video copy
video_src = os.path.join(BASE_DIR, "WhatsApp Video 2026-11-12 at 7.20.21 PM.mp4")
video_dst = os.path.join(ASSETS_DIR, "video", "zingal-logo-hero.mp4")
if os.path.exists(video_src):
    shutil.copy2(video_src, video_dst)
    # Also keep original named link
    shutil.copy2(video_src, os.path.join(ASSETS_DIR, "video", "WhatsApp Video 2026-11-12 at 7.20.21 PM.mp4"))
    print("Video copied successfully.")

# 2. Logo copy
logo_src = os.path.join(BASE_DIR, "logo.png")
logo_dst = os.path.join(ASSETS_DIR, "images", "logo.png")
if os.path.exists(logo_src):
    shutil.copy2(logo_src, logo_dst)
    # Let's create an optimized web-friendly version as well
    im = Image.open(logo_src)
    im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
    im.save(os.path.join(ASSETS_DIR, "images", "logo-web.png"), optimize=True)
    print("Logo copied and web version generated.")

# 3. Posters from Page 9
# Embedded image 77 is the 2304x1296 poster sheet
doc = fitz.open(os.path.join(BASE_DIR, "Zingal Films & Music India Pvt Ltd-1.pdf"))
p9 = doc[8]
for img in p9.get_images():
    xref = img[0]
    base_image = doc.extract_image(xref)
    sheet_path = os.path.join(BASE_DIR, "extracted_assets", "poster_sheet.jpeg")
    with open(sheet_path, "wb") as f:
        f.write(base_image["image"])

sheet = Image.open(os.path.join(BASE_DIR, "extracted_assets", "poster_sheet.jpeg"))

# Row 1: y=130 to 608
r1_bounds = [0, 412, 776, 1165, 1522, 1932, 2304]
r1_info = [
    ("poster-ek-sawal.jpg", "Ek Sawal: The Dark Word", "Feature Film / Psychological Drama", "Directed by Jai Kumar Lahori | Produced by Amit Dhupe | DOP & Editing by Pankaj Jagtap & Lucky Bhotmange"),
    ("poster-jhoomru.jpg", "Jhoomru", "Drama / Short Film", "7 Horse Entertainment | Directed by Jai Kumar Lahori"),
    ("poster-chehra.jpg", "Chehra: The Unknown Mask", "Feature Film / Mystery Thriller", "A film by Deepak K. Bajaj & Veena Bajaj | Gaarimma Films"),
    ("poster-qayamat-hai.jpg", "Qayamat Hai..", "Music Video", "Zingal Music | Singer: Dheer Verma feat. Immortal Voice | Lyrics: Hemant Shahar | Produced by Rima Gaurkar"),
    ("poster-ram-siya-ram.jpg", "Ram Siya Ram", "Devotional Music Video", "Zingal Music | Song cover by Dheer Verma | Produced by Zingal Music | Directed by Pankaj Jagtap"),
    ("poster-coming-soon.jpg", "Tere Liye / Yaadein", "Romantic Music Single", "Zingal Music | Directed by Pankaj Jagtap")
]

for i, (fn, title, cat, credits) in enumerate(r1_info):
    crop = sheet.crop((r1_bounds[i], 130, r1_bounds[i+1], 608))
    crop.save(os.path.join(ASSETS_DIR, "posters", fn), quality=95)
    print(f"Saved {fn}")

# Row 2: y=650 to 1169
r2_bounds = [0, 356, 692, 1250, 1833, 2304]
r2_info = [
    ("poster-the-other-shades.jpg", "The Other Shades", "Feature Film / Drama", "Zingal Entertainment & Altruistic Films | A Film by Pankaj Jagtap & Tathagat Gaikwad | Story & Screenplay by Virendra Ganvir | Produced by Surendra Wankhede & Rima Gaurkar"),
    ("poster-sukh.jpg", "Sukh: Real Happiness of Life", "Commercial / Social Film", "Pushpakey Entertainment in association with Zingal Entertainment | Directed by Pankaj Jagtap"),
    ("poster-mor-piya.jpg", "Mor Piya...", "Folk / Festive Music Video", "Zingal Music | Directed by Pankaj Jagtap | Singers: Dheer Verma & Kanchan Joshi | Produced by Rima Gaurkar"),
    ("poster-adhikar-hai.jpg", "Adhikar Hai", "Public Awareness Campaign / Music Film", "District Election Office, Nagpur & Zingal Entertainment | Directed by Pankaj Jagtap"),
    ("poster-ram-aayein.jpg", "Ram Aayein", "Devotional Anthem", "Zingal Music | Releasing on 21st January 2024 | Singer: Dheer Verma | Lyrics: Pankaj Jagtap & Dheer Verma | Producer: Rima Gaurkar")
]

for i, (fn, title, cat, credits) in enumerate(r2_info):
    crop = sheet.crop((r2_bounds[i], 650, r2_bounds[i+1], 1169))
    crop.save(os.path.join(ASSETS_DIR, "posters", fn), quality=95)
    print(f"Saved {fn}")

# 4. Stills from Page 10
p10 = doc[9]
for idx, img in enumerate(p10.get_images()):
    xref = img[0]
    base_image = doc.extract_image(xref)
    fn = f"still-{idx+1:02d}.jpg"
    with open(os.path.join(ASSETS_DIR, "stills", fn), "wb") as f:
        f.write(base_image["image"])
print(f"Extracted {len(p10.get_images())} production stills.")

# 5. Studio photos from Page 12
p12 = doc[11]
studio_names = ["studio-audio-mixing-suite.jpg", "studio-soundstage-lighting.jpg", "studio-video-editing-color.png"]
for idx, img in enumerate(p12.get_images()):
    xref = img[0]
    base_image = doc.extract_image(xref)
    fn = studio_names[idx] if idx < len(studio_names) else f"studio-{idx+1}.jpg"
    with open(os.path.join(ASSETS_DIR, "studio", fn), "wb") as f:
        f.write(base_image["image"])
print(f"Extracted studio images.")

# 6. Equipment photos from Page 11
p11 = doc[10]
equip_names = ["equipment-dji-mavic-3-drone.png", "equipment-cinema-cameras-lenses.png"]
for idx, img in enumerate(p11.get_images()):
    xref = img[0]
    base_image = doc.extract_image(xref)
    fn = equip_names[idx] if idx < len(equip_names) else f"equipment-{idx+1}.png"
    with open(os.path.join(ASSETS_DIR, "equipment", fn), "wb") as f:
        f.write(base_image["image"])
print("Extracted equipment images.")

# 7. Page 3 Hero Slate image
p3 = doc[2]
for idx, img in enumerate(p3.get_images()):
    xref = img[0]
    base_image = doc.extract_image(xref)
    with open(os.path.join(ASSETS_DIR, "images", "cinematic-clapperboard.jpg"), "wb") as f:
        f.write(base_image["image"])
print("Extracted cinematic clapperboard image.")

# 8. Client logos from Page 13
p13 = doc[12]
p13_images = p13.get_images()
print(f"Page 13 has {len(p13_images)} client images.")
for idx, img in enumerate(p13_images):
    xref = img[0]
    base_image = doc.extract_image(xref)
    ext = base_image["ext"]
    fn = f"client-logo-{idx+1:02d}.{ext}"
    with open(os.path.join(ASSETS_DIR, "clients", fn), "wb") as f:
        f.write(base_image["image"])

print("All assets processed and organized!")
