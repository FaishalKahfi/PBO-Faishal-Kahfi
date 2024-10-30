// Function untuk mengambil elemen pada posisi tertentu (Lihat)
function lihatPosisi(array, posisi) {
    if (posisi >= 0 && posisi < array.length) {
        return array[posisi];
    }
    throw new Error("Posisi tidak tersedia dalam daftar");
}

// Function untuk menambahkan elemen baru ke dalam daftar (Tambahkan)
function tambahkanKeDaftar(array, itemBaru) {
    array.push(itemBaru);
    return array;
}

// Function untuk mengganti elemen pada posisi tertentu (Perbarui)
function perbaruiPosisi(array, posisi, nilaiBaru) {
    if (posisi >= 0 && posisi < array.length) {
        array[posisi] = nilaiBaru;
        return array;
    }
    throw new Error("Posisi tidak tersedia dalam daftar");
}

// Function untuk menghapus elemen pada posisi tertentu (Hapus)
function hapusPosisi(array, posisi) {
    if (posisi >= 0 && posisi < array.length) {
        array.splice(posisi, 1);
        return array;
    }
    throw new Error("Posisi tidak tersedia dalam daftar");
}

// Contoh penggunaan
let angka = [5, 15, 25];
let warna = ["merah", "hijau", "biru"];

console.log("Read Generic");
console.log(lihatPosisi(angka, 1)); // Output: 15
console.log("Add Generic");
console.log(tambahkanKeDaftar(angka, 35));       // Output: [5, 15, 25, 35]
console.log("Update Generic");
console.log(perbaruiPosisi(angka, 0, 10)); // Output: [10, 15, 25, 35]
console.log("Delete Generic");
console.log(hapusPosisi(angka, 2));        // Output: [10, 15, 35]

console.log("Read Generic");
console.log(lihatPosisi(warna, 0));        // Output: "merah"
console.log("Add Generic");
console.log(tambahkanKeDaftar(warna, "kuning")); // Output: ["merah", "hijau", "biru", "kuning"]
console.log("Update Generic");
console.log(perbaruiPosisi(warna, 1, "ungu"));   // Output: ["merah", "ungu", "biru", "kuning"]
console.log("Delete Generic");
console.log(hapusPosisi(warna, 3));        // Output: ["merah", "ungu", "biru"]