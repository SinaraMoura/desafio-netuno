const prompt = require('prompt-sync')();

const data_hoje = new Date();
const mes_atual = data_hoje.getMonth() + 1;
const dia_atual = data_hoje.getDate();
const data = `Data: ${dia_atual}-${mes_atual}-${data_hoje.getFullYear()}`;
let idade = 0;

let nome = '';
let email_cadastro = '';
let senha_cadastro = '';
let confirma_senha = '';

let cabelo = '';
let pele = '';
let nomeClasse = '';

let ferramenta = '';
let montaria = '';
let vida = 0;
let mana = 0;
let velocidadeAtaque = 0;
let velocidade = 0;
let tempoDescanso = 0;


function TelaCadastro() {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("                           TELA DE CADASTRO                           ");
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");

    nome = prompt("Nome Completo: ");
    const data_nasc = prompt("Data de nascimento (AAAA-MM-DD): ");
    email_cadastro = prompt("E-mail: ");
    senha_cadastro = prompt("Senha: ");
    confirma_senha = prompt("Confirmar a senha: ");

    const dataNasc = new Date(data_nasc);
    const mes_nascimento = dataNasc.getMonth() + 1;
    const dia_nascimento = dataNasc.getDate();
    idade = data_hoje.getFullYear() - dataNasc.getFullYear();

    while (confirma_senha !== senha_cadastro) {
        console.log("As senhas não coincidem. Por favor, insira senhas idênticas nos campos 'Senha' e 'Confirmar senha");
        confirma_senha = prompt("Confirmar a senha: ");
    }

    if (mes_atual < mes_nascimento || (mes_atual === mes_nascimento && dia_atual < dia_nascimento)) {
        idade--;
    }

    if (idade < 18) {
        console.log("Deve ter no mínimo 18 anos");
        console.log("");
        console.log("ENCERRANDO O PROGRAMA ......");
    } else {
        TelaLogin();
    }
}
TelaCadastro()

function TelaLogin() {
    console.clear();
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("                             TELA DE LOGIN                            ");
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");

    let tentativas = 0;

    while (tentativas < 3) {
        const email_login = prompt("E-mail: ");
        const senha_login = prompt("Senha: ");

        if (email_login === email_cadastro && senha_login === senha_cadastro) {
            console.clear();
            TelaJogo();
            return;
        } else {
            console.log("Email ou senha incorretos !");
            tentativas++;

            if (tentativas === 3) {
                console.log("Número máximo de tentativas atingido. Saindo do Programa");
                return;
            }
        }
    }
}
function TelaJogo() {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("                              TELA DO JOGO                            ");
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<------------------<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log(" ");
    console.log("ESCOLHA A CLASSE PARA JOGAR");
    console.log("----------------------------------");
    console.log("1 - PALADINO[LANÇA E ESCUDO]");
    console.log("2 - ATIRADOR[ARMA]");
    console.log("3 - GUERREIRO[ESPADA E ESCUDO]");
    console.log("4 - BÁRBARO[MACHADO OU MARRETA]");
    console.log("5 - ARQUEIRO[ARCO]");
    console.log("----------------------------------");
    console.log("ESCOLHA O NÚMERO CORRESPONDENTE");

    const opcao = 0;
    const classe = prompt("Classe: ");
    cabelo = prompt("Cor do cabelo: ");
    pele = prompt("Cor da pele: ");

    if (classe == 1) {
        console.log("Qual ferramenta: ");
        console.log("1 - Lança");
        console.log("2 - Escudo");
        let ferramentas = prompt("Escolha a Ferramenta: ");
    } else if (classe == 4) {
        console.log("Qual ferramenta: ");
        console.log("1 - Machado");
        console.log("2 - Marreta");
        let ferramentas = prompt("Escolha a Ferramenta: ");
    }

    console.clear()
    console.log("ESCOLHA A MONTARIA");
    console.log("----------------------------------");
    console.log("1 - PANDA");
    console.log("2 - CAVALO");
    console.log("3 - DRAGÃO");
    console.log("4 - AVE");
    console.log("5 - UNICÓRNIO");
    console.log("----------------------------------");

    const escolha_montaria = prompt("Montaria: ");
    console.clear();

    console.log("DISTRIBUA PONTOS PARA CADA ATRIBUTO DE CLASSE");
    console.log("------------------------------------------------");
    vida = parseInt(prompt("Vida: "));
    mana = parseInt(prompt("Mana: "));
    velocidadeAtaque = parseFloat(prompt("Velocidade de ataque: "));

    console.clear();
    console.log("DISTRIBUA PONTOS PARA CADA ATRIBUTO DE MONTARIA");
    console.log("------------------------------------------------");
    velocidade = parseFloat(prompt("Velocidade montaria: "));
    tempoDescanso = parseInt(prompt("Tempo de descanso: "));

    switch (classe) {
        case '1':
            nomeClasse = "Paladino";
            if (opcao === 1) {
                ferramenta = "Lança";
            } else {
                ferramenta = "Escudo";
            }
            break;
        case '2':
            nomeClasse = "Atirador";
            ferramenta = "Arma";
            break;
        case '3':
            nomeClasse = "Guerreiro";
            ferramenta = "Espada e Escudo";
            break;
        case '4':
            nomeClasse = "Bárbaro";
            if (opcao === 1) {
                ferramenta = "Machado";
            } else {
                ferramenta = "Marreta";
            }

            break;
        case '5':
            nomeClasse = "Arqueiro";
            ferramenta = "Arco";
            break;
        default:
            console.log("Classe inválida.");
            break;
    }

    switch (escolha_montaria) {
        case '1':
            montaria = 'Panda';
            break;
        case '2':
            montaria = 'Cavalo';
            break;
        case '3':
            montaria = 'Dragão';
            break;
        case '4':
            montaria = 'Ave';
            break;
        case '5':
            montaria = 'Unicórnio';
            break;
        default:
            console.log("Montaria inválida.");
            break;
    }

    console.clear();
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log(`Seja muito bem-vindo(a), ${nome.padEnd(30)}  ${idade} anos ${data.padStart(30)}`);
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("");
    console.log("INFORMAÇÕES SOBRE A CLASSE ");
    console.log("-----------------------------------------");
    console.log(`Classe : ${nomeClasse}`);
    console.log(`Características Físicas: `);
    console.log(`Cor do cabelo: ${cabelo.toUpperCase()}`);
    console.log(`Cor da pele: ${pele.toUpperCase()}`);
    console.log(`Ferramenta: ${ferramenta}`);
    console.log("-----------------------------------------");
    console.log("Pontos distribuidos:");
    console.log(`Vida: ${vida}`);
    console.log(`Mana: ${mana}`);
    console.log(`Velocidade de Ataque: ${velocidadeAtaque.toFixed(1)} m/s`);
    console.log("------------------------------------------");
    console.log("");
    console.log("INFORMAÇÕES SOBRE A MONTARIA");
    console.log("-------------------------------------------");
    console.log(`Montaria: ${montaria}`);
    console.log("Pontos distribuidos para os atributos da montaria:");
    console.log(`Velocidade: ${velocidade.toFixed(1)} m/s`);
    console.log(`Tempo de descanso: ${tempoDescanso} minutos`);
}





