const form = document.querySelector(".form");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const p1 = document.createElement("p");

h1.innerHTML = "Bem-vindo ao meu projeto criado por meio do DOM";
p.innerHTML = "Servirá de aprendizado junto a IA";
p1.innerHTML = "Cálculo de Juros Compostos";

form.appendChild(h1);
form.appendChild(p);
form.appendChild(p1);

const form1 = document.querySelector(".form1");
const resultado = document.querySelector(".resultado");

const botao = form1.querySelector("button");
botao.innerText = "Calcular Juros Compostos";

form1.addEventListener("submit", enviarEvento);

function enviarEvento(evento) {
    evento.preventDefault(); 

    const capital = parseFloat(form1.querySelector(".capital input").value);
    const taxa = parseFloat(form1.querySelector(".taxa input").value) / 100; 
    const tempo = parseInt(form1.querySelector(".tempo input").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        resultado.innerHTML = "<p>Preencha todos os campos com valores válidos.</p>";
        return;
    }

    // 🧮 Função de Juros Compostos
    function calcularJurosCompostos(capital, taxa, tempo) {
        const montante = capital * Math.pow((1 + taxa), tempo);
        const juros = montante - capital;
        return { juros, montante };
    }

    const { juros, montante } = calcularJurosCompostos(capital, taxa, tempo);

    resultado.innerHTML = `
        <p>Juros Compostos: R$ ${juros.toFixed(2)}</p>
        <p>Montante Final: R$ ${montante.toFixed(2)}</p>
    `;
}
