const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Quem é o autor de Dom Casmurro? ",
        alternativas: [
            {
                texto: "a - Machado de Assis",
                afirmacao: " Você conhece a dona dos olhos de cigana oblíqua e dissimulada."
            },
            {
                texto: " b - Carlos Drummond de Andrade",
                afirmacao: " Você está perdendo a oportunidade de tomar partido em uma das maiores polêmicas literárias da história."
            }
        ]
    },
    {
        enunciado: "2 - Qual desses livros é uma coletânea de contos de Clarice Lispector?",
        alternativas: [
            {
                texto: "a - A Hora da Estrela",
                afirmacao: " Precisa ler um pouco mais a obra da diva máxima da literatura brasileira."
            },
            {
                texto: "b - Laços de Família",
                afirmacao: " Já disfrutou da leitura dos contos que detalham as relações familiares na sociedade carioca do século XX."
            }
        ]
    },
    {
        enunciado: " 3 - Qual romance retrata a história de Riobaldo e Diadorim, personagens emblemáticos da literatura brasileira?",
        alternativas: [
            {
                texto: "a - Senhora",
                afirmacao: " Precisa ler um pouco mais de Guimarães Rosa, aproveite e leia também José de Alencar."
            },
            {
                texto: "b - Grande Sertão: Veredas",
                afirmacao: " Você já teve a honra de se surpreender com o maior plot twist da literatura brasileira."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
        }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent="";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O que você sabe sobre literatura brasileira ?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
