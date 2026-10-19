const tombolSapa = document.getElementById('btn-sapa');
const pesanSapa = document.getElementById('pesan-sapa');

tombolSapa.addEventListener("click", function() {
    pesanSapa.textContent = "Halo! Terima kasih sudah mengklik tombol";
})