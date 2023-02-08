function add() {
var So1 = document.getElementById("othunhat").value;
var So2 = document.getElementById("othuhai").value;
var ketqua = Number(So1) + Number(So2) ;
    document.getElementById("Result").innerHTML = ketqua ;

}
function sub() {
var So1 = document.getElementById("othunhat").value;
var So2 = document.getElementById("othuhai").value;
var ketqua = Number(So1) - Number(So2) ;
    document.getElementById("Result").innerHTML = ketqua ;
}
function multi() {
    var So1 = document.getElementById("othunhat").value;
    var So2 = document.getElementById("othuhai").value;
    var ketqua = Number(So1) * Number(So2);
    document.getElementById("Result").innerHTML = ketqua;
}
function divi() {
    var So1 = document.getElementById("othunhat").value;
    var So2 = document.getElementById("othuhai").value;
    var ketqua = Number(So1) / Number(So2);
    document.getElementById("Result").innerHTML = ketqua;
}