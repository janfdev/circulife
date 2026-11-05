import os
import subprocess
from PIL import Image

BASE_DIR = r"D:/KERJAAN/circulife"
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
CHROME_BIN = r"C:/Program Files/Google/Chrome/Application/chrome.exe"

DIRS = [
    os.path.join(PUBLIC_DIR, "images/gallery"),
    os.path.join(PUBLIC_DIR, "images/products"),
    os.path.join(PUBLIC_DIR, "images/articles"),
    os.path.join(PUBLIC_DIR, "images/species"),
]

for d in DIRS:
    os.makedirs(d, exist_ok=True)

# Image specs: (filename, width, height, category, title, subtitle, badge, accent_color, icon_type)
IMAGES = [
    # Gallery (16:9 - 800x450)
    {
        "path": "images/gallery/paving-molding.jpg",
        "w": 800, "h": 450,
        "cat": "PRODUKSI & PABRIKASI",
        "title": "Pencetakan Paving Block K-250",
        "sub": "Peleburan cacahan 1.200 botol plastik PET dicetak hidrolik dengan pasir silika",
        "tag": "MUTU TEKAN SNI K-250",
        "grad": "linear-gradient(135deg, #0A1C16 0%, #10382B 60%, #175440 100%)",
        "accent": "#1BC483",
        "icon": "paving"
    },
    {
        "path": "images/gallery/maggot-bio.jpg",
        "w": 800, "h": 450,
        "cat": "BIOKONVERSI ORGANIK",
        "title": "Biokonversi Larva Maggot BSF",
        "sub": "Reduksi 80% limbah sisa makanan basah dalam waktu 24 jam di sentra KSM",
        "tag": "REDUKSI 350 KG/HARI",
        "grad": "linear-gradient(135deg, #091913 0%, #143528 60%, #1A4D39 100%)",
        "accent": "#2EE59D",
        "icon": "maggot"
    },
    {
        "path": "images/gallery/stove-upcycling.jpg",
        "w": 800, "h": 450,
        "cat": "UPCYCLING LOGAM",
        "title": "Perakitan Kompor Gasifikasi Kaleng",
        "sub": "Pemanfaatan ulang tabung gas portabel kosong menjadi kompor biomassa efisien",
        "tag": "NOL LIMBAH BAHAN BAKAR",
        "grad": "linear-gradient(135deg, #101B17 0%, #22372E 60%, #184234 100%)",
        "accent": "#1BC483",
        "icon": "stove"
    },
    {
        "path": "images/gallery/digital-scale.jpg",
        "w": 800, "h": 450,
        "cat": "LOGISTIK & TELEMETRI",
        "title": "Penimbangan Sensorik Digital",
        "sub": "Pencatatan bobot sampah real-time dengan akurasi 5 gram dan sinkronisasi reward",
        "tag": "AKURASI 99.8%",
        "grad": "linear-gradient(135deg, #081611 0%, #133327 60%, #1A4737 100%)",
        "accent": "#2EE59D",
        "icon": "scale"
    },
    {
        "path": "images/gallery/paving-pathway.jpg",
        "w": 800, "h": 450,
        "cat": "DAMPAK LINGKUNGAN",
        "title": "Jalan Setapak Pemukiman Ramah Air",
        "sub": "Pemasangan 2.400 unit paving block daur ulang di jalan lingkungan warga desa",
        "tag": "INFILTRASI AIR MAKSIMAL",
        "grad": "linear-gradient(135deg, #0B1E17 0%, #164032 60%, #1E5C46 100%)",
        "accent": "#1BC483",
        "icon": "pathway"
    },
    {
        "path": "images/gallery/kasgot-harvest.jpg",
        "w": 800, "h": 450,
        "cat": "PRODUK AKHIR",
        "title": "Panen & Pengemasan Pupuk Kasgot",
        "sub": "Pupuk organik kaya nutrisi NPK siap didistribusikan ke petani sayur pekarangan",
        "tag": "ORGANIK 100% BEBAS KIMIA",
        "grad": "linear-gradient(135deg, #0A1B14 0%, #17382A 60%, #204C3A 100%)",
        "accent": "#2EE59D",
        "icon": "compost"
    },

    # Products (4:3 - 600x450)
    {
        "path": "images/products/paving-block-pet.jpg",
        "w": 600, "h": 450,
        "cat": "ECO-PAVING",
        "title": "Eco-Paving Block PET K-250",
        "sub": "Bahan Baku: 25 Botol Plastik PET + Pasir Silika. Tahan beban 250 kg/cm2.",
        "tag": "STANDAR MUTU SNI",
        "grad": "linear-gradient(135deg, #081410 0%, #0F2E23 60%, #164837 100%)",
        "accent": "#1BC483",
        "icon": "paving"
    },
    {
        "path": "images/products/kompos-bio-kasgot.jpg",
        "w": 600, "h": 450,
        "cat": "PUPUK BIO-ORGANIK",
        "title": "Pupuk Kompos Kasgot BSF",
        "sub": "Feses larva Black Soldier Fly terfermentasi. Kandungan NPK alami seimbang.",
        "tag": "SIAP PAKAI 5 KG",
        "grad": "linear-gradient(135deg, #091712 0%, #143527 60%, #1B4E3A 100%)",
        "accent": "#2EE59D",
        "icon": "compost"
    },
    {
        "path": "images/products/tungku-biomassa.jpg",
        "w": 600, "h": 450,
        "cat": "UPCYCLING LOGAM",
        "title": "Tungku Ultralight Biomassa",
        "sub": "Upcycling 2 tabung gas portabel. Sistem gasifikasi kayu mini tanpa asap jelaga.",
        "tag": "HEMAT ENERGI FOSIL",
        "grad": "linear-gradient(135deg, #0C1A15 0%, #1C3328 60%, #1D4939 100%)",
        "accent": "#1BC483",
        "icon": "stove"
    },
    {
        "path": "images/products/asbak-saku.jpg",
        "w": 600, "h": 450,
        "cat": "UPCYCLING LOGAM",
        "title": "Asbak Saku Portabel Kedap",
        "sub": "Wadah puntung berpenutup putar rapat. Memadamkan bara rokok seketika tanpa bau.",
        "tag": "ETIKA NOL PUNTUNG",
        "grad": "linear-gradient(135deg, #0A1713 0%, #183026 60%, #204436 100%)",
        "accent": "#2EE59D",
        "icon": "ashtray"
    },
    {
        "path": "images/products/tote-bag-sachet.jpg",
        "w": 600, "h": 450,
        "cat": "KERAJINAN SIRKULAR",
        "title": "Tas Anyaman Sachet Etnik",
        "sub": "Pemberdayaan ibu rumah tangga: anyaman 45 bungkus sachet tahan air dan kuat.",
        "tag": "KUAT HINGGA 10 KG",
        "grad": "linear-gradient(135deg, #0D1C17 0%, #1A392D 60%, #215440 100%)",
        "accent": "#1BC483",
        "icon": "bag"
    },
    {
        "path": "images/products/papan-partikel-plastik.jpg",
        "w": 600, "h": 450,
        "cat": "MATERIAL TEKNIK",
        "title": "Papan Partikel Plastik 12mm",
        "sub": "Substitut kayu lapis dari residu kresek & multilayer film. Anti rayap dan anti lapuk.",
        "tag": "TAHAN AIR 100%",
        "grad": "linear-gradient(135deg, #091612 0%, #123125 60%, #194C39 100%)",
        "accent": "#2EE59D",
        "icon": "board"
    },

    # Articles (16:9 - 800x450)
    {
        "path": "images/articles/panduan-zero-waste.jpg",
        "w": 800, "h": 450,
        "cat": "PANDUAN PRAKTIS",
        "title": "Langkah Memulai Zero Waste Dapur",
        "sub": "Manajemen pemilahan 3 ember di rumah tangga untuk mempermudah alur daur ulang",
        "tag": "5 MENIT BACA",
        "grad": "linear-gradient(135deg, #071510 0%, #0E2E23 60%, #164636 100%)",
        "accent": "#1BC483",
        "icon": "guide"
    },
    {
        "path": "images/articles/paving-block-tech.jpg",
        "w": 800, "h": 450,
        "cat": "INOVASI TEKNOLOGI",
        "title": "Formulasi Paving Block Plastik K-250",
        "sub": "Uji laboratorium kuat tekan dan rasio lelehan plastik PET tanpa semen konvensional",
        "tag": "7 MENIT BACA",
        "grad": "linear-gradient(135deg, #081712 0%, #133327 60%, #1C4D3A 100%)",
        "accent": "#2EE59D",
        "icon": "paving"
    },
    {
        "path": "images/articles/maggot-biokonversi.jpg",
        "w": 800, "h": 450,
        "cat": "BIOKONVERSI ORGANIK",
        "title": "Dekomposisi Cepat Maggot BSF",
        "sub": "Panduan budidaya larva Black Soldier Fly skala perumahan hemat tempat dan higienis",
        "tag": "6 MENIT BACA",
        "grad": "linear-gradient(135deg, #091813 0%, #153729 60%, #1D503C 100%)",
        "accent": "#1BC483",
        "icon": "maggot"
    },
    {
        "path": "images/articles/kaleng-upcycling.jpg",
        "w": 800, "h": 450,
        "cat": "KERAJINAN TEKNIK",
        "title": "Upcycling Tabung Kaleng Logam Bekas",
        "sub": "SOP keselamatan depresurisasi kaleng gas dan modifikasi ventilasi udara bertingkat",
        "tag": "4 MENIT BACA",
        "grad": "linear-gradient(135deg, #0A1A14 0%, #19382C 60%, #20533F 100%)",
        "accent": "#2EE59D",
        "icon": "stove"
    },

    # Species & Biosphere (4:3 - 600x450)
    {
        "path": "images/species/elang-jawa.jpg",
        "w": 600, "h": 450,
        "cat": "FAUNA TERLINDUNGI",
        "title": "Elang Jawa (Nisaetus bartelsi)",
        "sub": "Predator kanopi udara pegunungan. Dilindungi dari polusi tanah dan sisa sampah plastik.",
        "tag": "STATUS : ENDANGERED",
        "grad": "linear-gradient(135deg, #07130F 0%, #11281E 60%, #1A3E30 100%)",
        "accent": "#1BC483",
        "icon": "species"
    },
    {
        "path": "images/species/macan-tutul.jpg",
        "w": 600, "h": 450,
        "cat": "FAUNA TERLINDUNGI",
        "title": "Macan Tutul Jawa (Panthera pardus)",
        "sub": "Kucing besar soliter penjaga rantai makanan alami hutan pegunungan tropis.",
        "tag": "STATUS : CRITICALLY ENDANGERED",
        "grad": "linear-gradient(135deg, #0B1612 0%, #1A2E24 60%, #254636 100%)",
        "accent": "#2EE59D",
        "icon": "species"
    },
    {
        "path": "images/species/edelweiss-jawa.jpg",
        "w": 600, "h": 450,
        "cat": "FLORA ENDEMIK",
        "title": "Edelweiss Jawa (Anaphalis javanica)",
        "sub": "Bunga abadi pencegah erosi tanah pegunungan, terlindungi dari serbuan sampah anorganik.",
        "tag": "STATUS : PROTECTED",
        "grad": "linear-gradient(135deg, #081510 0%, #143024 60%, #1B4534 100%)",
        "accent": "#1BC483",
        "icon": "species"
    },
    {
        "path": "images/species/surili-jawa.jpg",
        "w": 600, "h": 450,
        "cat": "FAUNA ENDEMIK",
        "title": "Surili Jawa (Presbytis comata)",
        "sub": "Primata pemalu penebar benih hutan hujan yang sensitif terhadap polusi mikroplastik.",
        "tag": "STATUS : ENDANGERED",
        "grad": "linear-gradient(135deg, #091712 0%, #163226 60%, #1F4A38 100%)",
        "accent": "#2EE59D",
        "icon": "species"
    },
]

def make_html(item):
    return f"""<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&family=JetBrains+Mono:wght@600;700&display=swap');
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: {item['w']}px;
    height: {item['h']}px;
    background: {item['grad']};
    font-family: 'Poppins', sans-serif;
    color: #F8FAF8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
  }}
  .grid-pattern {{
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(27, 196, 131, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(27, 196, 131, 0.05) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }}
  .glow {{
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(27, 196, 131, 0.18) 0%, transparent 70%);
    top: -80px;
    right: -80px;
    pointer-events: none;
  }}
  .top-row {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }}
  .badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: {item['accent']};
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(27, 196, 131, 0.3);
    padding: 5px 12px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }}
  .brand-chip {{
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 1px;
  }}
  .brand-dot {{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1BC483;
  }}
  .center-content {{
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10;
    margin: auto 0;
  }}
  .category {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: {item['accent']};
    letter-spacing: 2px;
    text-transform: uppercase;
  }}
  .main-title {{
    font-size: {'26px' if item['w'] == 600 else '32px'};
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 1.15;
    color: #FFFFFF;
    max-width: 90%;
  }}
  .sub-text {{
    font-size: {'12px' if item['w'] == 600 else '13px'};
    color: #A3B8AC;
    line-height: 1.5;
    max-width: 88%;
  }}
  .bottom-row {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 16px;
    z-index: 10;
  }}
  .tag-label {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 1px;
  }}
  .circulife-mark {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: #8A9E94;
    text-transform: uppercase;
  }}
</style>
</head>
<body>
  <div class="grid-pattern"></div>
  <div class="glow"></div>
  <div class="top-row">
    <div class="badge">{item['cat']}</div>
    <div class="brand-chip"><span class="brand-dot"></span>CIRCULIFE VERIFIED</div>
  </div>
  <div class="center-content">
    <div class="category">DOKUMENTASI SISTEM</div>
    <h1 class="main-title">{item['title']}</h1>
    <p class="sub-text">{item['sub']}</p>
  </div>
  <div class="bottom-row">
    <div class="tag-label">{item['tag']}</div>
    <div class="circulife-mark">CIRCULIFE HUB</div>
  </div>
</body>
</html>
"""

temp_html = os.path.join(PUBLIC_DIR, "temp_render.html")

for idx, item in enumerate(IMAGES):
    html_content = make_html(item)
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    out_target = os.path.join(PUBLIC_DIR, item['path'])
    # First render PNG via Chrome
    png_tmp = out_target.replace(".jpg", ".png")
    cmd = [
        CHROME_BIN,
        "--headless",
        f"--screenshot={png_tmp}",
        f"--window-size={item['w']},{item['h']}",
        "--hide-scrollbars",
        f"file:///{temp_html}"
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    # Save as high-quality JPEG
    img = Image.open(png_tmp).convert("RGB")
    img.save(out_target, "JPEG", quality=92, optimize=True)
    if os.path.exists(png_tmp) and png_tmp != out_target:
        os.remove(png_tmp)
    
    print(f"[{idx+1}/{len(IMAGES)}] Generated {item['path']} ({item['w']}x{item['h']})")

if os.path.exists(temp_html):
    os.remove(temp_html)

print("All 20 content dummy images generated successfully!")
