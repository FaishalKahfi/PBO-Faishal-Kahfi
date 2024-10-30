let listBuku = ["Matahari di Langit", "Meniti Senja", "Rindu Purnama"];

// Create: Menambah elemen baru
function addToList(name) {
    listBuku.push(name);
}

// Read: Menampilkan elemen-elemen
function readList() {
    console.log(listBuku);
}

// Update: Mengupdate elemen tertentu
function updateList(index, newName) {
    if (index >= 0 && index < listBuku.length) {
        listBuku[index] = newName;
    } else {
        console.log("Index tidak valid");
    }
}

// Delete: Menghapus elemen tertentu
function deleteFromList(index) {
    if (index >= 0 && index < listBuku.length) {
        listBuku.splice(index, 1);
    } else {
        console.log("Index tidak valid");
    }
}

console.log("Add List");
addToList("Rahasia Sang Penjelajah");
readList();             // Output: ["Matahari di Langit", "Meniti Senja", "Rindu Purnama", "Rahasia Sang Penjelajah"]
console.log("Update List");
updateList(1, "Senandung Hujan");
readList();             // Output: ["Matahari di Langit", "Senandung Hujan", "Rindu Purnama", "Rahasia Sang Penjelajah"]
console.log("Delete List");
deleteFromList(2);
readList();             // Output: ["Matahari di Langit", "Senandung Hujan", "Rahasia Sang Penjelajah"]