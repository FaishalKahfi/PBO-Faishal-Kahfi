let setBuku = new Set(["Matahari di Langit", "Meniti Senja", "Rindu Purnama"]);

// Create: Menambah elemen baru
function addToSet(name) {
    setBuku.add(name);
}

// Read: Menampilkan elemen-elemen
function readSet() {
    console.log(Array.from(setBuku)); // Mengonversi Set ke Array untuk tampilan lebih jelas
}

// Update: Tidak bisa mengupdate elemen dalam Set secara langsung
// Solusi: Menghapus elemen lama dan menambah yang baru
function updateSet(oldName, newName) {
    if (setBuku.has(oldName)) {
        setBuku.delete(oldName);
        setBuku.add(newName);
    } else {
        console.log("Nama tidak ditemukan");
    }
}

// Delete: Menghapus elemen tertentu
function deleteFromSet(name) {
    setBuku.delete(name);
}

console.log("Add Set");
addToSet("Rahasia Sang Penjelajah");
readSet();             // Output: ["Matahari di Langit", "Meniti Senja", "Rindu Purnama", "Rahasia Sang Penjelajah"]
console.log("Update Set");
updateSet("Rindu Purnama", "Senandung Hujan");
readSet();             // Output: ["Matahari di Langit", "Meniti Senja", "Rahasia Sang Penjelajah", "Senandung Hujan"]
console.log("Delete Set");
deleteFromSet("Meniti Senja");
readSet();             // Output: ["Matahari di Langit", "Rahasia Sang Penjelajah", "Senandung Hujan"]