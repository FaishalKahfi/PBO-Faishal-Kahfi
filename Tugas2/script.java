// Definisi kelas Mahasiswa
class Mahasiswa {
    // Atribut kelas
    private String nama;
    private String nim;
    private String jurusan;

    // Konstruktor kelas untuk inisialisasi objek
    public Mahasiswa(String nama, String nim, String jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }

    // Metode untuk mendapatkan nama mahasiswa
    public String getNama() {
        return nama;
    }

    // Metode untuk mengubah nama mahasiswa
    public void setNama(String nama) {
        this.nama = nama;
    }

    // Metode untuk menampilkan aktivitas belajar
    public void belajar() {
        System.out.println(nama + " sedang Mengerjakan Tugas.");
    }

    // Metode untuk mencetak informasi lengkap mahasiswa
    public String toString() {
        return "(" + nama + ", " + nim + ", " + jurusan + ")";
    }
}

// Implementasi penggunaan kelas Mahasiswa
public class Main {
    public static void main(String[] args) {
        // Membuat objek Mahasiswa
        Mahasiswa mahasiswa1 = new Mahasiswa("Faishal", "202301110060", "Informatika");
        Mahasiswa mahasiswa2 = new Mahasiswa("Kahfi", "202301110060", "Sistem Informasi");

        // Menggunakan metode objek
        mahasiswa1.belajar();  // Output: Faishal sedang mengerjakan tugas.
        mahasiswa2.belajar();  // Output: Kahfi sedang mengerjakan tugas.

        // Mencetak informasi lengkap dari objek mahasiswa
        System.out.println(mahasiswa1);  // Output: (Faishal, 202301110060, Informatika)
        System.out.println(mahasiswa2);  // Output: (Kahfi, 202301110060, Sistem Informasi)
    }
}
