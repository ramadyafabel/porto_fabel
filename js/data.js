// ===== DATA PORTFOLIO: edit isi di sini (nama, proyek, kontak, ikon, jawaban AI) =====
const PHOTO="images/foto.jpg";
const WA="6285738842863",EMAIL="ramadyafabelputra@gmail.com";
const DATA=[["Nama Lengkap","Ramadya Fabel Putra Athallah"],["Pendidikan","SMKN 2"],["Jurusan","Rekayasa Perangkat Lunak"],["Kelas","XII RPL 2"],["Domisili","Gedeg, Mojokerto"],["Bidang Minat","Web Development"],["Cita-cita","Web Developer"]];
/* Ikon teknologi (SVG inline). Mau pakai logo resmi? Ganti isi icons dengan path gambar, mis. ["images/html.png"] */
const SV=b=>"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'+b+'</svg>');
const SH=(c1,c2,tx)=>'<path d="M8 4l5 52 19 6 19-6 5-52z" fill="'+c1+'"/><path d="M32 8v50l15-5 4-45z" fill="'+c2+'"/><text x="32" y="41" font-size="30" font-weight="800" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif">'+tx+'</text>';
const IC={
html:SV(SH("#e44d26","#f16529","5")),
css:SV(SH("#1572b6","#33a9dc","3")),
js:SV('<rect x="4" y="4" width="56" height="56" rx="4" fill="#f7df1e"/><text x="55" y="54" font-size="26" font-weight="800" text-anchor="end" fill="#111" font-family="Arial,sans-serif">JS</text>'),
php:SV('<ellipse cx="32" cy="32" rx="29" ry="17" fill="#777bb4"/><text x="32" y="39" font-size="21" font-weight="800" font-style="italic" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif">php</text>'),
laravel:SV('<path d="M32 3l25 14.5v29L32 61 7 46.500v-29z" fill="#ff2d20"/><path d="M22 18v26h20" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>'),
mysql:SV('<path d="M12 14v36c0 4.400 9 8 20 8s20-3.600 20-8V14z" fill="#00758f"/><ellipse cx="32" cy="14" rx="20" ry="8" fill="#4aa3b8"/><path d="M12 28c0 4.400 9 8 20 8s20-3.600 20-8M12 41c0 4.400 9 8 20 8s20-3.600 20-8" fill="none" stroke="#f29111" stroke-width="3"/>'),
wp:SV('<circle cx="32" cy="32" r="29" fill="#21759b"/><circle cx="32" cy="32" r="24" fill="none" stroke="#fff" stroke-width="2"/><text x="32" y="42" font-size="29" font-weight="700" text-anchor="middle" fill="#fff" font-family="Georgia,serif">W</text>'),
el:SV('<circle cx="32" cy="32" r="29" fill="#92003b"/><rect x="22" y="19" width="5" height="26" fill="#fff"/><rect x="31" y="19" width="12" height="5" fill="#fff"/><rect x="31" y="29.500" width="12" height="5" fill="#fff"/><rect x="31" y="40" width="12" height="5" fill="#fff"/>')};
const SKILLS=[["HTML","Struktur halaman website.",[IC.html]],["CSS","Desain dan tampilan website.",[IC.css]],["JavaScript","Interaksi website.",[IC.js]],["PHP","Pemrograman backend.",[IC.php]],["Laravel","Framework pengembangan aplikasi web.",[IC.laravel]],["MySQL","Pengelolaan database.",[IC.mysql]],["WordPress & Elementor","Pembuatan website.",[IC.wp,IC.el]]];
/* Ganti nilai img di bawah dengan path gambar proyekmu, mis. "images/hotel.jpg" */
const PROJECTS=[
{t:"Hotel Booking System",img:"images/hotel-booking.jpg",d:"Aplikasi pemesanan hotel berbasis web dengan fitur pengelolaan kamar, pemesanan pelanggan, autentikasi, dan bukti transaksi."},
{t:"Inventory Management System",img:"images/inventory.jpg",d:"Aplikasi pengelolaan inventaris untuk mengatur data barang, stok, serta hak akses pengguna."},
{t:"Library Management System",img:"images/library.jpg",d:"Aplikasi pengelolaan data perpustakaan dengan fitur CRUD (Create, Read, Update, Delete)."},
{t:"Website Development",img:"images/website.jpg",d:"Pengalaman mempelajari pembuatan dan pengembangan website menggunakan WordPress dan Elementor."}];
const PKL=["Dokumentasi foto dan video.","Pembuatan konten Instagram Story.","Pengambilan video kegiatan pembelajaran.","Pembuatan desain konten digital.","Beradaptasi dengan lingkungan kerja."];
const KB=`Nama: Ramadya Fabel Putra Athallah, Junior Web Developer. Siswa kelas XII RPL 2 (Rekayasa Perangkat Lunak) di SMKN 2, tinggal di Gedeg, Mojokerto. Minat: web development; cita-cita: Web Developer.
Tentang: tertarik pada teknologi dan pengembangan website, senang mencoba hal baru, mengeksplorasi ide kreatif, dan belajar lewat proyek.
Keahlian: HTML, CSS, JavaScript, PHP, Laravel, MySQL, WordPress & Elementor.
Proyek: ${PROJECTS.map(p=>p.t+" ("+p.d+")").join("; ")}.
PKL: Yayasan Permata, TKIT Permata. Kegiatan: ${PKL.join(" ")}
Tujuan karier: menjadi Web Developer yang membangun website dan aplikasi bermanfaat, terus meningkatkan kemampuan programming dan pengalaman di dunia pengembangan perangkat lunak.
Kontak: email ${EMAIL}, WhatsApp 085738842863, GitHub ramadyafabel.`;
const SYS="Kamu adalah Sahabat AI di website portfolio Ramadya Fabel Putra Athallah. Jawab pertanyaan pengunjung tentang Ramadya dalam bahasa Indonesia yang ramah, singkat (maksimal 4 kalimat), hanya berdasarkan data berikut. Jika info tidak ada di data, katakan belum tahu dan sarankan menghubungi lewat WhatsApp atau email. Jangan mengarang.\n\nDATA:\n"+KB;
function localAnswer(q){q=q.toLowerCase();const has=(...w)=>w.some(x=>q.includes(x));
if(has("kontak","hubungi","email","wa","whatsapp","github"))return"Kamu bisa menghubungi Ramadya lewat email "+EMAIL+", WhatsApp 085738842863, atau GitHub ramadyafabel.";
if(has("skill","keahlian","bisa","teknologi","bahasa"))return"Keahliannya: HTML, CSS, JavaScript, PHP, Laravel, MySQL, serta WordPress & Elementor.";
if(has("proyek","project","karya","portofolio"))return"Proyeknya: "+PROJECTS.map(p=>p.t).join(", ")+". Detailnya ada di halaman Portfolio.";
if(has("pkl","magang","pengalaman"))return"Ramadya PKL di Yayasan Permata (TKIT Permata): dokumentasi foto dan video, konten Instagram Story, video kegiatan belajar, dan desain konten digital.";
if(has("sekolah","pendidikan","kelas","jurusan","smk"))return"Ramadya siswa kelas XII RPL 2, jurusan Rekayasa Perangkat Lunak di SMKN 2.";
if(has("tinggal","domisili","asal","dimana","di mana"))return"Ramadya berdomisili di Gedeg, Mojokerto.";
if(has("cita","karier","karir","tujuan","target"))return"Ia ingin menjadi Web Developer yang membangun website dan aplikasi bermanfaat.";
return"Ramadya adalah siswa RPL SMKN 2 yang fokus pada web development. Coba tanya soal keahlian, proyek, PKL, atau kontaknya.";}
