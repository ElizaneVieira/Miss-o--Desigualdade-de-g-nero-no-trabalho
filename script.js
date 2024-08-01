const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na equipe de desenvolvimento de software, Rafaela se destacava como uma programadora excepcional. No entanto, apesar do seu talento evidente, Rafaela se sentiu frustrada ao observar como as suas idéias muitas vezes foram negligênciadas ou atribuídas aos seus colegas masculinos durante a construção de projetos importantes. Sendo assim, o que Rafaela fez a respeito disso?",
        alternativas: [
            {
                texto: "Relevou novamente a situação sem contestar e buscou trabalhar de forma individual em outros projetos para evitar novamente o cenário.",
                afirmacao: ""
            },  
            {
                texto: "Expôs para sua gerente a autoria e a contribuição de suas idéias em relação aos trabalhos realizados e sugeriu uma reunião com todos os demais para tratar do problema.", 
                afirmacao: ""
            

            }
        ]
    },
    {
        enunciado: "Ao entender a seriedade do assunto e se identificar com ele, a gerente autorizou a reunião. Em sua vez, Helena, outra integrante, relatou seu esforço para ser ouvida nas reuniões, enquanto Lucas parecia ter suas idéias aceitas com mais facilidade. Além disso, Helena percebeu que sua remuneração inicial era inferior, mesmo apresentando um desempenho igual ou superior ao colega. Sobre isso, o que ela sugeriu?",
        alternativas: [
            {
                texto: "Iniciar políticas inovadoras direcionadas a mulheres para exercerem cargos de liderança, que garantiriam a participação feminina de maneira igualitária nas equipes e normalizariam considerar a relevância das opiniões sem levar em conta o gênero.",
                afirmacao: ""
            },
            {
                texto: "Manter o padrão atual da empresa e continuar abrindo mão das próprias opiniões, participando apenas como ajudante geral para obter presença e apenas receber o sálario no final do mês.",
                afirmacao: ""
            }   
        ]
    },
    {
        enunciado: "Depois de todas as propostas, sendo o palpite de Helena o mais destacado principalmente para mulheres, houve a votação geral, onde a maioria:",
        alternativas: [
            {
                texto: "Foi contra.",
                afirmacao: ""
            },
            {
                texto: "Foi a favor.",
                afirmacao: ""
            }
                      
        ]
    },
    {
        enunciado: "Tendo a maioria concordado com a proposta, na semana seguinte, as novas políticas começaram a ser implantadas. Então, Helena, por sua idéia, foi indicada ao cargo de líder em seu setor. Em seu novo cargo, durante sua jornada, quais foram as contribuições de Helena?",
        alternativas: [
            {
                texto: "Ela garantiu que todos os participantes da equipe fossem tratados com igualdade, com a mesma importância de opiniões e também realizou diversas dinâmicas com metas a serem cumpridas para provar que a desigualdade salarial era injusta, já que todos possuíam resultados equivalentes e satisfatórios.",
                afirmacao: ""
            },
            {
                texto: "Deixou que apenas alguns se sobresaíssem nas colaborações e não teve nenhuma reação quando observava uma injustiça.",
                afirmacao: ""
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "Décadas mais tarde, Helena e Rafaela fizeram uma reflexão sobre o passado. Cada uma observou uma perspectiva diferente. " +
"Rafaela se lembrou de sua intervenção e percebeu que seu posicionamento contra as injustiças foi fundamental para mudar o cenário de desigualdade. " +
"Através de sua voz, as mulheres conseguiram ter mais oportunidades e conquistaram mais espaço dentro do ambiente de trabalho, " +
"além de nivelarem as questões morais e relevantes dentro da empresa. " +
"Helena relembrou o nervosismo daquele momento, " +
"quando explicou os motivos e suas intenções, mantendo sua postura até o final, mesmo que uma parte discordasse. " +
"Por isso, estreou a primeira conquista de sua perseverança. " + 
"Isso trouxe um exemplo a ser seguido por outras mulheres que observaram como agir nessas situações e " + 
"levou consigo sua coragem para todos os ambientes em que esteve presente, inspirando mais mulheres a fazerem o mesmo.";



function mostraPergunta() {
    if (atual >= perguntas.length) {
            mostraResultado();
            return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}

mostraPergunta();

