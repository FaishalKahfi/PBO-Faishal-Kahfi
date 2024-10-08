class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        console.log(`Nama   : ${this.nama}`);
        console.log(`Alamat : ${this.alamat}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(nama, alamat, nim, kelas) {
        super(nama, alamat); // Memanggil konstruktor kelas induk
        this.nim = nim;
        this.kelas = kelas;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM    : ${this.nim}`);
        console.log(`Kelas  : ${this.kelas}`);
    }
}

class Dosen extends Orang {
    constructor(nama, alamat, prodi) {
        super(nama, alamat); // Memanggil konstruktor kelas induk
        this.prodi = prodi;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`Prodi    : ${this.prodi}`);
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Faishal Kahfi", "Jl. Gunung Putri", "202301110060", "IP231");
mahasiswa1.tampilkanInformasi();
const Dosen1 = new Dosen("Budiono Siregar", "Samudra Pasifik", "Kapal Lawut");
Dosen1.tampilkanInformasi();