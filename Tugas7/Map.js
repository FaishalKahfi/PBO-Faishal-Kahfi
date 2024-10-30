let mapBuku = new Map();
mapBuku.set("Matahari di Langit", 4.8);
mapBuku.set("Rindu Purnama", 4.5);

// Create: Menambah elemen baru
function addToMap(name, rating) {
    mapBuku.set(name, rating);
}

// Read: Menampilkan semua elemen
function readMap() {
    for (let [key, value] of mapBuku) {
        console.log(key + ": " + value);
    }
}

// Update: Mengupdate nilai dari elemen tertentu
function updateMap(name, newRating) {
    if (mapBuku.has(name)) {
        mapBuku.set(name, newRating);
    } else {
        console.log("Nama tidak ditemukan");
    }
}

// Delete: Menghapus elemen tertentu
function deleteFromMap(name) {
    mapBuku.delete(name);
}

console.log("==============================");
console.log("Add Map");
addToMap("Senandung Hujan", 4.6);
readMap();              // Output: Matahari di Langit: 4.8, Rindu Purnama: 4.5, Senandung Hujan: 4.6
console.log("==============================");
console.log("Update Map");
updateMap("Rindu Purnama", 4.7);
readMap();              // Output: Matahari di Langit: 4.8, Rindu Purnama: 4.7, Senandung Hujan: 4.6
console.log("==============================");
console.log("Delete Map");
deleteFromMap("Matahari di Langit");
readMap();              // Output: Rindu Purnama: 4.7, Senandung Hujan: 4.6
console.log("==============================");