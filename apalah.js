document.getElementById("formDaftar").addEventListener("submit", function (event) {
    event.preventDefault();

    const tombol = document.querySelector("button");
    tombol.disabled = true;
    tombol.textContent = "Mengirim...";

    const formData = new FormData(event.target);

    if (formData.get("hp").length < 10) {
        alert("Nomor HP minimal 10 digit!");
        tombol.disabled = false;
        tombol.textContent = "KIRIM";
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxOnxtJSZ3F_CSAG56mRXPt9BokdAY4xuuN0Ad-V3CiMZVPNwTRYMqL0EPwgBuW9Gtfig/exec", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("Pendaftaran berhasil. Terima kasih.");
        event.target.reset();

        document.getElementById("hasilData").style.display = "none";

        tombol.disabled = false;
        tombol.textContent = "KIRIM";
    })
    .catch(error => {
        console.error(error);
        alert("Gagal mengirim data.");

        tombol.disabled = false;
        tombol.textContent = "KIRIM";
    });
});
