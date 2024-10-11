//Desafio

//- Precisa ter os Heróis
//- Os Heróis precisam ter categorias ou níveis definidos (1, 2 , 3)
//- cada nível deve ter uma definição de pontuação máxima
//- Os personagem precisam ter atributos ( força, habilidade, experiência e velocidade)
//- O nível do herói é calculado a partir da soma dos atributos dele.
//- Precisa poder comparar entre as habilidades dos heróis para saber qual é o mais forte

let personagem01 = {
    nome: "Homem-aranha",
    força: 500,
    habilidade: 300,
    experiencia: 200,
    velocidade: 700,
}

let personagem02 = {
    nome: "Batman",
    força: 700,
    habilidade: 1000,
    experiencia: 400,
    velocidade: 50,
}

let personagem03 = {
    nome: "Superman",
    força: 1000,
    habilidade: 1000,
    experiencia: 1000,
    velocidade: 1000,
}

function atributos1(personagem01) {
    let soma = "";
    soma = personagem01.força + personagem01.habilidade + personagem01.experiencia + personagem01.velocidade;
    return soma
}

function atributos2(personagem02) {
    let soma = "";
    soma = personagem02.força + personagem02.habilidade + personagem02.experiencia + personagem02.velocidade;
    return soma
}

function atributos3(personagem03) {
    let soma = "";
    soma = personagem03.força + personagem03.habilidade + personagem03.experiencia + personagem03.velocidade;
    return soma
}

//console.log(atributos1(personagem01));
//console.log(atributos2(personagem02));
//console.log(atributos3(personagem03));


let n1 = 4000;
let n2 = 3000;
let n3 = 1000;

let heroi = atributos3(personagem03);

if (heroi <= n3) {
    console.log("Heroi nível 3")
} else if (heroi <= n2) {
    console.log("Heroi nível 2")
} else {
    console.log("Heroi nivel 1")
}
    
function poder() {
    return heroi
}

console.log(poder());

let p1 = atributos1(personagem01);
let p2 = atributos2(personagem02);
let p3 = atributos3(personagem03);

function resultado() {
    
   if (p2 > p1) {
        console.log(`O ${personagem02.nome} é mais forte que o ${personagem01.nome}`)
    } else if (p3 > p2) {
        console.log(`O ${personagem03.nome} é mais forte que o ${personagem02.nome}`)
    }
   
}



console.log(resultado());