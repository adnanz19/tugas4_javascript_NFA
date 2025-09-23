const daftarKendaraan = {
  "Toyota Avanza": {
    nama: "Toyota Avanza",
    plat: "B 1234 ABC",
    harga: 2000000
  },
  "Honda Brio": {
    nama: "Honda Brio",
    plat: "B 5678 XYZ",
    harga: 1000000
  },
  "Porsche 911": {
    nama: "Porsche 911",
    plat: "B 8310 HSJ",
    harga: 50000000
  },
  "Ferrari 458": {
    nama: "Ferrari 458",
    plat: "B 7103 KEI",
    harga: 100000000
  },
};

class pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  sewaKendaraan(objekMobil) {
    this.kendaraanDisewa = objekMobil;
    alert(`${this.nama} berhasil menyewa ${objekMobil.nama}`);
  }
}

let daftarPenyewa = [];

kendaraanDisewa = document.getElementById("kendaraan").value;

const tbody = document.getElementById("tbody");

function tambahPelanggan(event) {
  event.preventDefault();

  let inputNama = document.getElementById("nama").value;
  let inputNoTelp = document.getElementById("noTelp").value;
  let inputKendaraanSewa = document.getElementById("kendaraan").value;

  const MobilTerpilih = daftarKendaraan[inputKendaraanSewa];
  const penyewaBaru = new pelanggan(inputNama, inputNoTelp);

  penyewaBaru.sewaKendaraan(MobilTerpilih);
  daftarPenyewa.push(penyewaBaru);

  tampilkanPelanggan();
}

function tampilkanPelanggan() {
  tbody.innerHTML = "";

  daftarPenyewa.forEach((item) => {
    const tr = document.createElement("tr");

    const tNama = document.createElement("td");
    const tNoTelp = document.createElement("td");
    const tKendaraan = document.createElement("td");
    const tPlat = document.createElement("td");
    const tHarga = document.createElement("td");

    tNama.textContent = item.nama;
    tNoTelp.textContent = item.nomorTelepon;
    tKendaraan.textContent = item.kendaraanDisewa.nama;
    tPlat.textContent = item.kendaraanDisewa.plat;
    tHarga.textContent = item.kendaraanDisewa.harga;

    tr.appendChild(tNama);
    tr.appendChild(tNoTelp);
    tr.appendChild(tKendaraan);
    tr.appendChild(tPlat);
    tr.appendChild(tHarga);

    tbody.appendChild(tr);
  });
}