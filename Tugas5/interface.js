// Definisi antarmuka melalui pola objek
const AlatInterface = {
    fungsi: function() {
        throw new Error("Metode 'fungsi()' harus diimplementasikan.");
    }
};

// Kelas yang mengimplementasikan antarmuka
class Komputer {
    // Implementasi metode fungsi
    fungsi() {
        console.log("Komputer digunakan untuk menghitung dan menjalankan program.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Lampu {
    // Implementasi metode fungsi
    fungsi() {
        console.log("Lampu digunakan untuk menerangi ruangan.");
    }
}

// Penggunaan
const komputer = new Komputer();
komputer.fungsi(); // Output: Komputer digunakan untuk menghitung dan menjalankan program.

const lampu = new Lampu();
lampu.fungsi(); // Output: Lampu digunakan untuk menerangi ruangan.
