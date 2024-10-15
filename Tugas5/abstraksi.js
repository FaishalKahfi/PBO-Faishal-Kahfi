// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Makhluk {
    constructor(nama) {
        if (this.constructor === Makhluk) {
            throw new Error("Kelas Makhluk adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.nama = nama;
    }

    // Metode abstrak
    tindakan() {
        throw new Error("Metode 'tindakan()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Manusia extends Makhluk {
    constructor() {
        super('Manusia');
    }

    tindakan() {
        console.log(`${this.nama} berbicara dan berjalan.`);
    }
}

class Burung extends Makhluk {
    constructor() {
        super('Burung');
    }

    tindakan() {
        console.log(`${this.nama} terbang dan berkicau.`);
    }
}

// Penggunaan
const manusia = new Manusia();
manusia.tindakan(); // Output: Manusia berbicara dan berjalan.

const burung = new Burung();
burung.tindakan(); // Output: Burung terbang dan berkicau.
