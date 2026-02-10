const tabela = document.getElementById("lista-somas");
const dateBase = document.getElementById("date2");


const linhas = [0, 0, 0, 0, 0, 0];

tabela.innerHTML = linhas.map(num => `
    
   
    <tr class="linha-calculo">
        <td>
            <input class="input-dias" type="number" placeholder="${num}" 
            style="text-align: center; width: 160px; height: 40px; border: none; border-radius: 6px; background-color: rgb(192, 221, 204); margin: 5px;">
        </td>
        <td class="resultado" style="padding-left: 50px; font-weight: bold;"></td>
    </tr>
`).join('');


function calcularSomaDinamica(event) {
    const dataValor = dateBase.value;
    const inputDias = event.target.classList.contains('input-dias') ? event.target : null;
    const linhasParaCalcular = inputDias ? [inputDias.closest('.linha-calculo')] : document.querySelectorAll('.linha-calculo');

    linhasParaCalcular.forEach(linha => {
        const input = linha.querySelector('.input-dias');
        const campoResultado = linha.querySelector('.resultado');

        if (!dataValor || !input.value) {
            campoResultado.innerHTML = "";
            return;
        }

        const formData = new FormData();
        formData.append("date2", dataValor);
        formData.append("dias", input.value);

        fetch("formulario.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(data => {
            campoResultado.innerHTML = data;
        });
    });
}

tabela.addEventListener("input", calcularSomaDinamica);
dateBase.addEventListener("input", calcularSomaDinamica);



const tabela2 = document.getElementById("lista-datas");
const dateBase2 = document.getElementById("date3");


const linhas2 = [0, 0, 0, 0, 0, 0];

tabela2.innerHTML = linhas2.map(i => `
    <tr class="linha-calculo2">
        <td>
            <input class="input-datas" type="date" 
                style="text-align: center; width: 160px; height: 40px; border: none; border-radius: 6px; background-color: rgb(226, 207, 219); margin: 5px;">
        </td>
        <td class="resultado2" style="padding-left: 50px; font-weight: bold;"></td>
    </tr>
`).join('');


function calcularSomaDinamica2(event) {
    const dataPrincipal = dateBase2.value;
    
    
    const datas = event.target.classList.contains('input-datas') ? event.target : null;
    const linhasParaCalcular = datas ? [datas.closest('.linha-calculo2')] : document.querySelectorAll('.linha-calculo2');

    linhasParaCalcular.forEach(linha => {
        const inputDataSecundaria = linha.querySelector('.input-datas');
        const campoResultado2 = linha.querySelector('.resultado2');

       
        if (!dataPrincipal || !inputDataSecundaria.value) {
            campoResultado2.innerHTML = "";
            return;
        }

        const formData2 = new FormData();
        formData2.append("date3", dataPrincipal);
        formData2.append("date4", inputDataSecundaria.value); 

        fetch("formulario.php", {
            method: "POST",
            body: formData2
        })
        .then(res => res.text())
        .then(num => {
            campoResultado2.innerHTML = num; 
        })
        .catch(err => console.error("Erro na requisição:", err));
    });
}


tabela2.addEventListener("input", calcularSomaDinamica2);
dateBase2.addEventListener("input", calcularSomaDinamica2);


function resetCardDatas(){
    dateBase.value = "";
    tabela.querySelectorAll('.input-dias').forEach(input => {
        input.value = "";
    });
    tabela.querySelectorAll('.resultado').forEach(td => {
        td.innerHTML = "";
    });
}

function resetCardDias(){
    dateBase2.value = "";
    tabela2.querySelectorAll('.input-datas').forEach(input => {
        input.value = "";
    });
    tabela2.querySelectorAll('.resultado2').forEach(td => {
        td.innerHTML = "";
    });
}
