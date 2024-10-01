class MahasiswaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanMahasiswa() {
        const mahasiswa = new this.model("Faishal Kahfi", "202301110060", 100);
        document.getElementById("output").innerHTML = this.view.render(mahasiswa);
    }

    ubahNilai(nama, nim, nilaiBaru) {
        const mahasiswa = new this.model(nama, nim, 0);
        mahasiswa.setNilai(nilaiBaru);
        console.log(`${nama} memiliki nilai baru: ${mahasiswa.getNilai()}`);
    }
}
