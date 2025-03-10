//MUDANÇA DE IMAGEM PRODUTO 1
//PEGAR O ELEMENTO
const produto1D4 = document.getElementById ("produto1D4") ;
//EVENTO MOUSE POR CIMA
produto1D4.addEventListener ("mouseover", function () {
produto1D4.src = "./produtos/D4-GULF-CINZA-FRENTE-2.jpg";
})
//EVENTO SAÍDA MOUSE
produto1D4.addEventListener ("mouseout", function () {
produto1D4.src = "./produtos/D4 GULF CINZA COSTAS.jpg" ;
})