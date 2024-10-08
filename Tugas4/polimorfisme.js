// Definisi kelas induk
class TukangSeblak {
    tampilkanPeran() {
        console.log("Bu joko si penjual seblak goreng");
    }
}

// Definisi kelas turunan
class TukangBakso extends TukangSeblak {
    tampilkanPeran() {
        console.log("Pak siti si penjual bakso tikus");
    }
    //Menggunakan OverWrite
    tampilkanPeran() {
        console.log("Pak Komeng si penjual bakso borak");
    }
}

class TukangGorengan extends TukangSeblak {
    tampilkanPeran() {
        console.log("Bu ani dan Pak rudi si penjual gorengan basi");
    }
    //Menggunakan Kompulasi
    tampilkanJumlah(jumlah) {
        console.log("Gorengannya Sudah Terjual Sebanyak", jumlah);
    }
}

// Menggunakan polimorfisme
const TukangSeblak1 = new TukangSeblak();
const TukangBakso1 = new TukangBakso();
const TukangGorengan1 = new TukangGorengan();

TukangSeblak1.tampilkanPeran();    // Output: Bu joko si penjual seblak goreng
TukangBakso1.tampilkanPeran(); // Output: Pak Komeng si penjual bakso borak
TukangGorengan1.tampilkanPeran();     // Output: Bu ani dan Pak rudi si penjual gorengan basi
TukangGorengan1.tampilkanJumlah(300); // Output : Gorengannya Sudah Terjual Sebanyak 300