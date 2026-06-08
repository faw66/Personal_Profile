# 🌐 Personal Website

Website profil pribadi dengan tema ungu tua, hitam, dan putih.

---

## 📁 Struktur File

```
fauzi-website/
├── index.html          
├── about.html         
├── favorit.html        
├── hobbies.html        
├── funfact.html        
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/         
```

---

## 🖼️ Panduan Menambahkan Gambar

Simpan semua gambar di folder `assets/images/`. Nama file harus tepat:

### Foto Diri (muncul di Landing Page & About Me)
| File | Keterangan |
|------|-----------|
| `profile.jpg` | Foto dirimu (ukuran ideal: 400×500px) |

### Halaman About Me
| File | Keterangan |
|------|-----------|
| `ibu.jpg` | Foto ibu |
| `bapak.jpg` | Foto bapak |
| `saudara1.jpg` | Foto saudara 1 |
| `saudara2.jpg` | Foto saudara 2 |
| `saudara3.jpg` | Foto saudara 3 |

### Halaman My Favorit
| File | Keterangan |
|------|-----------|
| `food1.jpg` ~ `food4.jpg` | Foto makanan/minuman favorit |
| `music1.jpg` ~ `music4.jpg` | Cover album/artis favorit |
| `film1.jpg` ~ `film2.jpg` | Poster film atau anime favorit |

### Halaman Hobbies
| File | Keterangan |
|------|-----------|
| `novel1.jpg` ~ `novel4.jpg` | Cover novel yang pernah dibaca |
| `game1.jpg` ~ `game3.jpg` | Cover/screenshot game favorit |
| `manhwa1.jpg` ~ `manhwa3.jpg` | Cover manhwa favorit |

### Landing Page (Projek)
| File | Keterangan |
|------|-----------|
| `project1.jpg` ~ `project5.jpg` | Screenshot atau thumbnail projek |

### Halaman Fun Fact
| File | Keterangan |
|------|-----------|
| `funfact1.jpg` ~ `funfact6.jpg` | Gambar pendukung fun fact |

> **Catatan:** Jika gambar belum ditambahkan, website akan otomatis menampilkan emoji placeholder yang tetap terlihat rapi.

---

## ✏️ Cara Edit Konten

Buka file HTML terkait dan cari bagian yang perlu diubah:

- **Nama:** Cari `Fauzi` di `index.html` dan `about.html`
- **Kata-kata motivasi:** Edit array `quotes` di `js/main.js`
- **Nama projek:** Edit bagian `project-card` di `index.html`
- **Deskripsi diri:** Edit paragraf di `about.html`
- **Nama keluarga:** Edit `.parent-label` dan `.sibling-card` di `about.html`
- **Nama makanan/musik/film:** Edit teks di `favorit.html`
- **Nama novel/game/manhwa:** Edit teks di `hobbies.html`
- **Fun facts:** Edit teks di `funfact.html`
- **Rating film:** Ubah class `filled` pada tag `.star` di `favorit.html`

---

## 🚀 Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misal: `fauzi-website`)
2. Upload semua file ke repository
3. Pergi ke **Settings → Pages**
4. Pilih branch `main`, folder `/ (root)`
5. Klik **Save** — website akan live di `https://username.github.io/fauzi-website`

## 🚀 Deploy ke Netlify

1. Drag & drop folder `fauzi-website` ke [netlify.com/drop](https://app.netlify.com/drop)
2. Website langsung live dengan URL acak
3. Bisa ubah nama domain di dashboard Netlify

---

## 🎨 Fitur Website

- ✅ 5 halaman lengkap sesuai desain sketch
- ✅ Carousel gambar kanan/kiri di setiap section
- ✅ Carousel bawah bergerak berlawanan arah (marquee)
- ✅ Navbar sticky dengan mobile hamburger menu
- ✅ Responsive — otomatis menyesuaikan HP
- ✅ Animasi fade-in saat scroll
- ✅ Efek hover tilt pada card
- ✅ Quote rotator otomatis
- ✅ Gradasi warna ungu tua yang elegan
- ✅ Font Playfair Display + DM Sans
- ✅ Placeholder otomatis jika gambar belum ada
