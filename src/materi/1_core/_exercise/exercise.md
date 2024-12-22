Exercise: Daftar Tugas dengan Filter, Sorting, dan Pencarian

Deskripsi:
Buat aplikasi **task list** yang memungkinkan pengguna untuk:
- Menambahkan tugas baru.
- Menandai tugas sebagai selesai.
- Menghapus tugas.
- Menyaring tugas berdasarkan status (selesai atau belum selesai).
- Menyortir tugas berdasarkan nama secara ascending atau descending.
- Mencari tugas berdasarkan kata kunci.

1. **State**:
   - Gunakan `useState` untuk menyimpan array `tasks` yang berisi objek tugas.
   - Setiap tugas memiliki properti `id`, `name`, dan `isCompleted`.
   - Gunakan state tambahan untuk `filterStatus`, `sortOrder`, dan `searchTerm`.

2. **Props**:
   - Kirimkan props ke komponen anak (misalnya, komponen filter dan sort).

3. **JSX**:
   - Render daftar tugas menggunakan `.map()`.
   - Gunakan tombol untuk menghapus atau menandai tugas sebagai selesai.
   - Tampilkan form untuk menambah tugas baru.
   - Gunakan **conditional rendering** untuk menandai tugas yang selesai.
   - Gunakan **list rendering** untuk menampilkan daftar tugas.

4. **Conditional Rendering**:
   - Gunakan conditional rendering untuk menampilkan pesan ketika tidak ada tugas yang ditemukan berdasarkan pencarian atau filter.
   - Tandai tugas yang sudah selesai dengan warna berbeda atau teks yang dicoret.

5. **Filter & Sort**:
   - Implementasikan filter untuk menampilkan tugas berdasarkan status (`isCompleted`).
   - Implementasikan sorting untuk mengurutkan tugas berdasarkan nama (ascending atau descending).
   - Gunakan form input untuk mengubah filter dan urutan.


7. **Langkah-langkah**:
   - Gunakan `useState` untuk `tasks` yang berisi array tugas. Tugas memiliki `id`, `name`, dan `isCompleted`.
   - Gunakan `useState` tambahan untuk `filterStatus`, `sortOrder`, dan `searchTerm` agar pengguna bisa mengatur filter dan pencarian.
   - Gunakan form input untuk menambah tugas baru.
   - Tampilkan input pencarian untuk mencari tugas berdasarkan nama.
   - Gunakan **conditional rendering** untuk menampilkan tugas selesai dengan gaya khusus (misalnya, teks dicoret).
   - Gunakan `.map()` untuk merender daftar tugas yang telah difilter dan disortir.
   - Gunakan **localStorage** untuk menyimpan dan memuat data tugas yang tersimpan.
   - Gunakan dropdown atau tombol untuk memilih status filter dan urutan penyortiran tugas.

8. **Tugas**:
   - Buat form input untuk menambah tugas baru.
   - Implementasikan input pencarian untuk mencari tugas berdasarkan kata kunci.
   - Implementasikan filter berdasarkan status tugas (`isCompleted`).
   - Implementasikan sorting berdasarkan nama tugas (ascending atau descending).
   - Gunakan `.map()` untuk merender setiap tugas berdasarkan kondisi filter, pencarian, dan sorting yang diterapkan.
   - Tampilkan pesan jika tidak ada tugas yang sesuai dengan pencarian atau filter yang diterapkan.

9. **Fitur tambahan**:
   - Gunakan `useEffect` untuk menyimpan dan memuat tugas dari **localStorage** agar data tetap ada setelah reload.
   - Gunakan **conditional rendering** untuk menampilkan status tugas yang sudah selesai.
   - Implementasikan **list rendering** untuk menampilkan tugas yang disaring dan disortir berdasarkan preferensi pengguna.

Dengan exercise ini, kamu akan melatih:
- **State management** untuk data dinamis dalam aplikasi React.
- **Props** untuk komunikasi antara komponen.
- **JSX** untuk merender elemen-elemen dalam aplikasi.
- **Conditional rendering** untuk menampilkan data berdasarkan kondisi.
- **List rendering** untuk menampilkan daftar tugas.
- **useEffect** untuk menyimpan dan memuat data dari **localStorage**.