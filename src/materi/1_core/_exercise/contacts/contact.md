**Exercise: Buku Telepon Digital**  

### **Deskripsi**  
Buat aplikasi **buku telepon digital** yang memungkinkan pengguna untuk:  
- Menambahkan kontak baru dengan nama dan nomor telepon.  
- Menghapus kontak.  
- Mengedit kontak.  
- Menyaring kontak berdasarkan nama.  
- Menyortir kontak berdasarkan nama secara ascending atau descending.  
- Mencari kontak berdasarkan kata kunci.  

---

### **State**  
1. Gunakan `useState` untuk menyimpan array `contacts` yang berisi objek kontak.  
   - Setiap kontak memiliki properti `id`, `name`, dan `phone`.  
2. Gunakan state tambahan untuk `filterStatus` (menyaring berdasarkan nama), `sortOrder` (ascending atau descending), dan `searchTerm`.  

---

### **Features**  

1. **Menambah Kontak**  
   - Form input untuk memasukkan nama dan nomor telepon.  
   - Validasi agar nama tidak boleh kosong dan nomor telepon harus valid.  

2. **Menghapus Kontak**  
   - Tombol "Hapus" untuk menghapus kontak berdasarkan `id`.  

3. **Mengedit Kontak**  
   - Tombol "Edit" untuk mengubah nama atau nomor telepon kontak.  

4. **Filter & Search**  
   - Input pencarian untuk mencari kontak berdasarkan nama.  
   - Penyortiran kontak berdasarkan nama secara ascending atau descending.  

5. **Daftar Kontak**  
   - Gunakan **conditional rendering** untuk menampilkan daftar kontak atau pesan jika tidak ada kontak yang ditemukan.  

---

### **Langkah-langkah**  

1. **State Management**  
   - Buat state untuk `contacts`, `sortOrder`, `searchTerm`, dan kontak yang sedang diedit.  

2. **CRUD Operation**  
   - **Add**: Tambahkan kontak baru ke array.  
   - **Edit**: Perbarui kontak berdasarkan `id`.  
   - **Delete**: Hapus kontak berdasarkan `id`.  

3. **Search & Sort**  
   - Filter daftar kontak berdasarkan kata kunci pencarian.  
   - Urutkan kontak berdasarkan nama secara ascending atau descending.  

4. **Conditional Rendering**  
   - Tampilkan pesan jika tidak ada kontak berdasarkan pencarian atau filter.  

5. **Best Practices**  
   - Gunakan handler terpisah untuk setiap aksi (add, delete, edit, search).  
   - Hindari manipulasi array secara langsung.  