# Personal Website Portfolio

Website profil pribadi yang profesional, interaktif, dan dirancang dengan estetika tema gelap modern. Dibangun dengan fokus pada prinsip UI/UX tingkat lanjut, menampilkan efek *glassmorphism*, tata letak *flex-accordion* interaktif, dan desain yang sangat responsif.

---

## Struktur Proyek

```text
Personal_Web/
├── index.html          
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/         
└── pages/
    ├── about.html         
    ├── hobbies.html        
    └── funfact.html        
```

---

## Konfigurasi Aset Gambar

Tempatkan seluruh aset gambar di dalam direktori `assets/images/`. Pastikan penamaan file sama persis dengan spesifikasi di bawah ini (huruf kecil semua tanpa spasi).

### Landing Page & About
- `profile.jpg` - Foto profil utama

### Halaman About (Profil & Favorit)
- `food1.jpg` ~ `food4.jpg` - Preferensi kuliner (Tampil dalam Flex-Accordion)
- `music1.jpg` ~ `music4.jpg` - Sampul album/artis (Tampil dalam Marquee Berkelanjutan)
- `film1.jpg` ~ `film2.jpg` - Poster film atau anime

### Halaman Hobbies
- `novel1.jpg` ~ `novel4.jpg` - Sampul novel
- `game1.jpg` ~ `game3.jpg` - Media permainan video (Tampil dalam Flex-Accordion)
- `manhwa1.jpg` ~ `manhwa3.jpg` - Sampul manhwa (Tampil dalam Flex-Accordion)

### Landing Page (Projek)
- `project1.jpg` ~ `project5.jpg` - Tangkapan layar proyek atau *thumbnail* aplikasi

### Halaman Fun Fact
- `funfact1.jpg` ~ `funfact6.jpg` - Gambar pendukung untuk fakta personal

**Catatan Implementasi Fallback:** Jika file gambar tidak tersedia, sistem akan mengeksekusi logika penanganan (*fallback logic*). Ikon gambar yang rusak (*broken image*) akan disembunyikan secara otomatis dan diganti dengan blok *placeholder* berwarna gelap elegan untuk menjaga integritas tata letak dan pengalaman pengguna.

---

## Panduan Kustomisasi Konten

Modifikasi file HTML atau JS terkait menggunakan teks editor untuk memperbarui teks konten:

- **Nama & Gelar:** Temukan elemen target di `index.html` dan `pages/about.html`
- **Kutipan Dinamis:** Modifikasi *array* `quotes` di dalam `assets/js/main.js`
- **Detail Projek:** Edit kartu-kartu yang ada di `index.html`
- **Deskripsi Pribadi:** Perbarui paragraf di `pages/about.html`
- **Konten Favorit (Kuliner, Musik, Film):** Perbarui teks di `pages/about.html`
- **Rating Film:** Sesuaikan distribusi kelas `filled` pada tag `<span class="star">` di `pages/about.html`
- **Konten Hobbies:** Perbarui teks di `pages/hobbies.html`
- **Fun Facts:** Modifikasi tag paragraf di `pages/funfact.html`

---

## Deployment & Hosting

Proyek ini terdiri dari kumpulan file statis dan siap untuk langsung dipublikasikan.
1. **Netlify:** Pindahkan (*drag and drop*) direktori `Personal_Web` ke layanan Netlify Drop.
2. **GitHub Pages:** Unggah (*push*) repositori ini ke GitHub dan aktifkan fitur GitHub Pages di menu pengaturan repositori.

---

## Implementasi UI/UX Utama

- **Hierarki Visual Terstruktur:** Menggunakan tipografi `Playfair Display` untuk judul dan `DM Sans` untuk teks paragraf demi memaksimalkan keterbacaan dan kontras gaya.
- **Uniform Card & Text Truncation:** Menjamin kartu proyek pada halaman utama memiliki ukuran yang selalu seragam secara simetris, terlepas dari panjang teks deskripsi. Dilengkapi dengan fungsionalitas tombol *See More/See Less* otomatis menggunakan komputasi CSS *Line-Clamp* dan validasi tinggi JavaScript.
- **Interactive Flex-Accordion:** Tata letak grid tingkat lanjut yang diterapkan pada bagian Kuliner, Gaming, dan Manhwa yang akan melebar secara mulus saat kursor diarahkan (*hover*).
- **Continuous Scrolling Marquee:** Implementasi pengguliran horizontal tak terbatas secara otomatis untuk bagian daftar putar musik.
- **Premium Micro-Interactions:** Menampilkan *state hover* yang canggih termasuk efek elevasi komponen, pancaran bayangan berpendar (*glowing drop-shadows*), animasi *tilt polaroid 3D*, dan ornamen kaca buram (*backdrop-filter*).
- **Fluid Responsiveness:** Arsitektur 100% responsif yang memanfaatkan teknologi CSS *Flexbox* dan *Grid* modern, memastikan tata letak tetap utuh dan terstruktur sempurna di lintas perangkat (Desktop, Tablet, dan Mobile).
- **Smart Fallback Architecture:** Penanganan kesalahan bawaan untuk aset media yang hilang guna mempertahankan estetika visual tanpa interupsi.

---
© 2026
