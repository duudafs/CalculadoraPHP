const dateInput = document.getElementById("date2"); // pega os inputs pelo id
const diasInput = document.getElementById("dias");
const resultado = document.getElementById("resultado");

function calcularAutomatico() {
  if (!dateInput.value || !diasInput.value) {        
    resultado.innerHTML = "";
    return;
  }

  const formData = new FormData();          // cria um objeto FormData que envia dados pro php
  formData.append("date2", dateInput.value); // add data no FormData
  formData.append("dias", diasInput.value);  // add dias no FormData

  fetch("formulario.php", {
    method: "POST",
    body: formData  // dados enviados
  })
  .then(res => res.text())
  .then(data => {
    resultado.innerHTML =  data;   // mostra o resultado da data dentro do card
  });
}

dateInput.addEventListener("input", calcularAutomatico);  // dispara o calculo quando a data mudar
diasInput.addEventListener("input", calcularAutomatico);


const dateInput2 = document.getElementById("date3");
const dateInput3 = document.getElementById("date4");
const resultado2 = document.getElementById("resultado2");

function calcularAutomatico2() {
    if (!dateInput2.value || !dateInput3.value) {
        resultado2.innerHTML = "";
        return;
    }

    const formData2 = new FormData();
    formData2.append("date3", dateInput2.value);
    formData2.append("date4", dateInput3.value);

    fetch("formulario.php", {
        method: "POST",
        body: formData2
    })
    .then(res => res.text())
    .then(dias => {
        resultado2.innerHTML = dias;  // mostra o resultado de dias dentro do card
    });
}

dateInput2.addEventListener("input", calcularAutomatico2);
dateInput3.addEventListener("input", calcularAutomatico2);
