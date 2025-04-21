const form = document.querySelector(".form");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const p1 = document.createElement("p");

h1.innerHTML = "Bem-vindo ao meu projeto criado por meio do DOM";
p.innerHTML = "Servirá de aprendizado junto a IA";
p1.innerHTML = "Cáculo de Juros Simples";

form.appendChild(h1);
form.appendChild(p);
form.appendChild(p1);

const form1 = document.querySelector(".form1");
const resultado = document.querySelector(".resultado");

const botao = form1.querySelector("button");
botao.innerText = "Calcular Juros Simples";

form1.addEventListener("submit", enviarEvento);

function enviarEvento(evento) {
    evento.preventDefault(); 

    const capital = parseFloat(form1.querySelector(".capital input").value);
    const taxa = parseFloat(form1.querySelector(".taxa input").value) / 100; 
    const tempo = parseInt(form1.querySelector(".tempo input").value);

    // Verificação básica
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        resultado.innerHTML = "<p>Preencha todos os campos com valores válidos.</p>";
        return;
    }

    // Função de cálculo
    function calcularJurosSimples(capital, taxa, tempo) {
        const juros = capital * taxa * tempo;
        const montante = capital + juros;
        return { juros, montante };
    }

    const { juros, montante } = calcularJurosSimples(capital, taxa, tempo);

    // Exibe o resultado
    resultado.innerHTML = ` <p>Juros: R$ ${juros.toFixed(2)}</p> <p>Montante: R$ ${montante.toFixed(2)}</p>
    `;
}
