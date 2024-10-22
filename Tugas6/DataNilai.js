class DataNilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }

    hitungMedian() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const sorted = [...this.nilai].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    }
}

class TampilanNilai {
    tampilkanHasil(rataRata, median) {
        return `Rata-rata nilai: ${rataRata}, Median nilai: ${median}`;
    }

    tampilkanError(error) {
        return `Error: ${error}`;
    }
}

class KontrolNilai {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanNilai(nilai) {
        try {
            const data = new this.model(nilai);
            const rataRata = data.hitungRataRata();
            const median = data.hitungMedian();
            return this.view.tampilkanHasil(rataRata, median);
        } catch (error) {
            return this.view.tampilkanError(error.message);
        }
    }
}

function pembagian(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        return "Terjadi error: " + error.message; // Mengembalikan pesan error sebagai string
    } finally {
        console.log("Operasi pembagian selesai."); // Mencetak ini di akhir
    }
}

// Inisialisasi dan Penggunaan
const kontrolNilai = new KontrolNilai(DataNilai, new TampilanNilai());

// Menampilkan rata-rata dan median
console.log(kontrolNilai.tampilkanNilai([80, 90, 100])); // Menampilkan hasil rata-rata dan median
console.log(kontrolNilai.tampilkanNilai([]));            // Menampilkan error: Data nilai tidak valid atau kosong.

// Menghitung pembagian
console.log(pembagian(10, 2)); // Output: 5
console.log(pembagian(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.