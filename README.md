# Portfolio Ramadya Fabel Putra Athallah

Website portfolio: HTML + CSS + React (JS) + Tailwind.

## Struktur
```
index.html            halaman utama
css/style.css         seluruh gaya & animasi
js/tailwind.config.js konfigurasi Tailwind
js/core.js            helper React
js/data.js            DATA PORTFOLIO (edit nama, proyek, kontak, ikon, jawaban AI)
js/components.js      loader, karakter Sahabat AI, chat, halaman
js/app.js             routing & efek
images/               foto.jpg + gambar proyek
```

## Mengganti gambar proyek
Timpa file di `images/` dengan nama yang sama (`hotel-booking.jpg`, `inventory.jpg`, `library.jpg`, `website.jpg`), atau ubah path `img` di array `PROJECTS` pada `js/data.js`.

## Upload ke GitHub & aktifkan hosting (GitHub Pages)
1. Buat repository baru di GitHub, mis. `portfolio`.
2. Upload SELURUH isi folder ini (bukan zip-nya) ke repository.
3. Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
4. Tunggu 1-2 menit. Web aktif di `https://USERNAME.github.io/portfolio/`.

## Catatan Sahabat AI
Di GitHub Pages, Sahabat AI menjawab dengan pencocokan kata kunci dari `js/data.js` (fungsi `localAnswer` dan `KB`). Untuk jawaban AI sungguhan, hubungkan ke backend sendiri yang menyimpan API key (jangan taruh API key di kode front-end).
