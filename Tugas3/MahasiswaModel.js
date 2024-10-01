class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;
        this.nim = nim;
        let _nilai = nilai; 

        this.getNilai = function() {
            return _nilai;
        };

        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log("Nilai harus antara 0 dan 100");
            }
        };
    }
}