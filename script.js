const animacaoBraco = [
  {
    transform: "rotate(-40deg)", 
    margin: "0px -9px 0px 0px"
  }, 
  {
    transform: "rotate(-130deg)", 
    margin: "-50px -12px 0px 0px",
    height: "76px"
  }
]
const timingDoApontar = {
  duration: 2000,
  iterations: 1
}
const btnApontar = document.querySelector("#btnApontar");
const braco = document.querySelector('.direito');
btnApontar.addEventListener("click", () => {
  braco.animate(animacaoBraco, timingDoApontar);
});