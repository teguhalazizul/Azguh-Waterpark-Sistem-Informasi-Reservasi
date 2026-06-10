# 🌊 Azguh Waterpark — Sistem Informasi & Reservasi

> Aplikasi web untuk memudahkan pengunjung **AzGuh Waterpark Pekanbaru** dalam memesan tiket, mengakses informasi fasilitas, dan melakukan reservasi secara online.

🔗 **Live Demo:** [https://kolber-app-guest.vercel.app/](https://kolber-app-guest.vercel.app/)

---

## 📌 Latar Belakang

AzGuh Waterpark menghadapi kendala karena sistem reservasi dan layanan masih dilakukan secara manual, yang menyebabkan:
- ❌ Antrian panjang di loket
- ❌ Kesulitan pengunjung dalam mengakses informasi waterpark

Aplikasi ini hadir sebagai solusi digital untuk mengatasi permasalahan tersebut.

---

## 🎯 Tujuan

Mempermudah pengunjung dalam:
- Memesan tiket masuk secara online
- Mengakses informasi fasilitas waterpark
- Melakukan reservasi fasilitas

---

## 👤 Target Pengguna

- Pengunjung AzGuh Waterpark

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🏠 **Halaman Utama** | Landing page dengan informasi umum dan hero section waterpark |
| 🎟️ **List Tiket Masuk** | Daftar paket tiket (Solo Rider, Triple Squad, Fab Four, dll) dengan harga Weekday & Weekend |
| 🏊 **List Fasilitas** | Informasi lengkap fasilitas: Kolam Anak, Seluncuran Air, Gazebo, Kantin, Loker, Toilet & Shower |
| ⭐ **Review Customer** | Halaman ulasan dan testimoni dari pengunjung |
| 📞 **Contact Us** | Form kontak dengan informasi nomor telepon, email, dan alamat |
| 🏢 **Tentang Kami** | Sejarah, visi, dan misi AzGuh Waterpark |
| ❓ **FAQ** | Halaman pertanyaan yang sering diajukan pengunjung |
| 📰 **List Artikel** | Daftar artikel terbaru seputar waterpark |
| 💼 **Career Page** | Halaman lowongan kerja (Lifeguard, Customer Service, Security, Marketing Digital, dll) |

---

## 🛠️ Teknologi yang Digunakan

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Laravel |
| **Deployment** | Vercel |

---

## 🚀 Cara Menjalankan (Lokal)

### Prasyarat
- Node.js >= 16
- npm atau yarn
- PHP >= 8.1
- Composer

### Frontend (React)
```bash
# Clone repository
git clone https://github.com/username/azguh-waterpark.git

# Masuk ke folder frontend
cd frontend

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

### Backend (Laravel)
```bash
# Masuk ke folder backend
cd backend

# Install dependensi
composer install

# Salin file environment
cp .env.example .env

# Generate app key
php artisan key:generate

# Jalankan migrasi database
php artisan migrate

# Jalankan server
php artisan serve
```


---

## 📸 Tampilan Aplikasi

### Halaman Utama
Menampilkan hero section dengan tagline **"Nikmati Keseruan di Azguh Waterpark Pekanbaru"** dan navigasi ke berbagai fitur.

### Paket Tiket
Tersedia berbagai paket tiket dengan harga berbeda untuk Weekday dan Weekend:
- Solo Rider Weekday — Rp 95.000
- Solo Rider Weekend — Rp 135.000
- Triple Squad Weekend — Rp 270.000
- Fab Four Weekday — Rp 440.000
- Fab Four Weekend — Rp 560.000

### Fasilitas
Menampilkan 6 fasilitas utama: Kolam Anak, Seluncuran Air, Gazebo, Kantin, Loker, dan Toilet & Shower.

---

## 👨‍💻 Developer

| Nama | NIM |
|------|-----|
| Teguh Al Azizul | 2355301197 |

**Mata Kuliah:** Bengkel Pemrograman Framework 2  
**Program Studi:** D4 Teknik Informatika — Politeknik Caltex Riau

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademis di Politeknik Caltex Riau.
