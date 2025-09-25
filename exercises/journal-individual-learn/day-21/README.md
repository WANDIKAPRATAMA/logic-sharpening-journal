Description Day 21

---

# 📱 Multi-Tap SMS Simulator

Sebelum era iPhone dan keyboard sentuh, remaja mengandalkan jempol mereka untuk mengetik SMS di ponsel fitur berbentuk candybar dengan keypad numerik 3x4. Berikut adalah tampilan keypad klasik:

```
┌─────┬───────┬───────┐
│  1  │  ABC  │  DEF  │
│     │   2   │   3   │
├─────┼───────┼───────┤
│ GHI │  JKL  │  MNO  │
│  4  │   5   │   6   │
├─────┼───────┼───────┤
│PQRS │  TUV  │ WXYZ  │
│  7  │   8   │   9   │
├─────┼───────┼───────┤
│  *  │ SPACE │   #   │
│     │   0   │       │
└─────┴───────┴───────┘
```

## 🧠 Cara Kerja Multi-Tap

Sebelum sistem T9 (teks prediktif), metode pengetikan disebut **multi-tap**, di mana pengguna menekan tombol berulang kali untuk memilih karakter yang diinginkan.

Contoh:

- Tombol `7` akan berputar: `P → Q → R → S → 7 → P → ...`
- Tombol `0` akan berputar: `SPACE → 0 → SPACE → 0 → ...`
- Tombol dengan satu simbol langsung mengetik simbol tersebut.

Karakter akan "terkunci" dan dimasukkan ke pesan saat pengguna menekan tombol lain atau berhenti sejenak.

### ✍️ Contoh Pengetikan

- Untuk mengetik huruf `R`, tekan tombol `7` sebanyak **3 kali**.
- Untuk mengetik angka `3`, tekan tombol `3` sebanyak **4 kali**.
- Untuk mengetik pesan `ABC`:
  - Tekan `2` sekali → `A`
  - Tunggu sebentar
  - Tekan `2` dua kali → `B`
  - Tunggu sebentar
  - Tekan `2` tiga kali → `C`
  - Total: **6 kali tekan**

Untuk mengetik pesan:

```
WHERE DO U WANT 2 MEET L8R
```

Dibutuhkan **47 kali tekan tombol**. Tak heran mereka suka menyingkat...

---

## 🧪 Tugas Anda

Buatlah kode yang dapat menghitung jumlah total tombol yang harus ditekan untuk mengetik sebuah frasa, dengan ketentuan:

- Abaikan tanda baca.
- Huruf besar dan kecil dianggap sama.
- Input dapat berupa huruf (A-Z, a-z), angka (0-9), dan karakter khusus `#` dan `*`.

---
