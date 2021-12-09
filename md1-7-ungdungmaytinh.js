function input(kiTu) {
    document.getElementById('rs').value += kiTu
}
function tinhKetQua() {
    let bieuThuc = document.getElementById('rs').value;
    document.getElementById('rs').valueOf = eval(bieuThuc);
}
function resert() {
    document.getElementById('rs').value = "";
}