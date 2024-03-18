const textoCartao = document.querySelector("#textoCartao");
const tituloCartao = document.querySelector("#tituloCartao");
const selectFont = document.querySelector("#font-family");
const texto = document.querySelector("#texto");
const titulo = document.querySelector("#titulo");

const corDeFundoInput = document.querySelector("#corDeFundo");
const corDaBordaInput = document.querySelector("#corDaBorda");
const cartao = document.querySelector(".cartao");

corDeFundoInput.addEventListener('change', () => {
    cartao.style.backgroundColor = corDeFundoInput.value;
});

corDaBordaInput.addEventListener('change', () => {
    cartao.style.borderColor = corDaBordaInput.value;
});

texto.addEventListener('change', () => {
    textoCartao.innerHTML = texto.value;
});

titulo.addEventListener('change', () => {
    tituloCartao.innerHTML = titulo.value;
});

selectFont.addEventListener('change', () => {
    textoCartao.style.fontFamily = selectFont.value;
    tituloCartao.style.fontFamily = selectFont.value;
});


