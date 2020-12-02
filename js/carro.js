window.actualizarCarro = function(){
    let productos = localStorage.getItem("productos");
    if(productos){
        productos = JSON.parse(productos);
    } else{
        productos = [];
    }
    document.querySelector("#cantidad-productos-carro").innerText = productos.length;
};
window.addEventListener('DOMContentLoaded', ()=>{

    window.actualizarCarro();
});