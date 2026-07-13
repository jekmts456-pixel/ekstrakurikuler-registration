alert("JS berhasil dimuat");

document.getElementById("formDaftar").addEventListener("submit", function (event) {
    event.preventDefault();
  const tombol = document.querySelector("button");
tombol.disabled = true;
tombol.textContent = "Mengirim...";

    const formData = new FormData(event.target);if (data.hp.length < 10) {
    alert("Nomor HP minimal 10 digit!");

    tombol.disabled = false;
    tombol.textContent = "KIRIM";

    return;
}
    const data = Object.fromEntries(formData.entries()); 
}

    const hasilTeks = `
Nama: ${data.nama}
Kelas: ${data.kelas}
JK: ${data.jk}
Tgl Lahir: ${data.tgl_lahir}
HP: ${data.hp}
Email: ${data.email}
Alamat: ${data.alamat}
Pesan: ${data.pesan}
`;

    document.getElementById("output").textContent = hasilTeks;
    document.getElementById("hasilData").style.display = "block";

    fetch("https://script.google.com/macros/s/AKfycbxOnxtJSZ3F_CSAG56mRXPt9BokdAY4xuuN0Ad-V3CiMZVPNwTRYMqL0EPwgBuW9Gtfig/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Data berhasil dikirim!");
        
    })
    
    .catch((error) => {
    console.log(error);

    tombol.disabled = false;
    tombol.textContent = "KIRIM";

    alert("Gagal mengirim data.");
})

event.target.reset();
});
