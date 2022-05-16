// carne - 400 gr por pessoa + 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

calcular = () => {
  let adultos = inputAdultos.value;
  let criancas = inputcriancas.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355
  )} latas de cerveja`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebidas / 2000
  )} garrafas pet de 2L`;
};

carnePP = (duracao) => {
  if (duracao >= 6) {
    return 640;
  } else {
    return 400;
  }
};

cervejaPP = (duracao) => {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
};

bebidasPP = (duracao) => {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
};
