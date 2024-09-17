// Mendefinisikan Kelas
class Motor {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    jalan() {
        console.log(`${this.merk} berwarna ${this.warna} sedang berjalan.`);
    }
}

// Pewarisan
class MotorBalap extends Motor {
    constructor(merk, warna, kecepatanMaksimal) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    jalan() {
        console.log(`${this.merk} balap berwarna ${this.warna} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const motor1 = new Motor('Supra', 'Hijau');
motor1.jalan(); // Output: Supra berwarna Hijau sedang berjalan.

const motorBalap1 = new MotorBalap('Beat', 'Hitam', 350);
motorBalap1.jalan(); // Output: Beat balap berwarna hitam berjalan dengan kecepatan maksimal 350 km/jam.