/*

// Criação de Variáveis

var nome = "Amilton Silva";
var idade = 56;
var idade2 = 10;
var graduacao = "Engenheir de Software"

// alert(nome + " tem " + idade + " anos de idade!" )

console.log(nome);
console.log(idade);
console.log(idade - idade2);

// Tratando conteúdo de variáveis

var frase = "Japão é o melhor time do mundo!";
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão","Brasil"));

console.log(frase.toUpperCase())
console.log(frase.toLocaleLowerCase())


// Trabalhando com Array (lista)

var lista = ["maçã", "banana", "pera", "laranja"];

lista.push("uva");
lista.length();
lista.reverse(); //exibe o conteúdo invertido da lista
//lista.pop(2)
console.log(lista);
console.log(lista[0]);
console.log(lista.toString);// transforma um array em string
console.log(lista.join(" - ")); // troca a virgula por traço na lista 

// Tratando dicionário

var fruta = {nome: "limão", cor: "verde"}
console.log(fruta.nome)
alert(fruta.cor)

// Tratando array de dicionários

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)
alert(frutas[1].nome)


// Usando Condicional

var idade = prompt("Qual a sua idade?");
//var idade = 18
if (idade >= 18){
    alert("maior de idade");
    }else{
        alert("menor de idade");
}



// Usando repetição

var contador = 0
while (contador <= 5){
    console.log(contador);
    contador = contador + 1; // pode ser usado CONTADOR++
}


var contador;
for (contador = 0; contador < 6; contador++){
    console.log(contador);
}



// Trabalhando com DATA

var d = new Date();

alert(d.getDate());
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true             
    }else{
        validar = false   
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);

*/

function clicou(){
    //document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!")
}

function redirecionar(){
    //abre a página em nova aba
    window.open("https://www.carrefour.com.br/");
    //abre a página na mesma página da chamada
    window.location.href = "https://www.carrefour.com.br/";
}

function trocar(elemento){
   elemento.innerHTML = "Obrigado por passar o mouse!"
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("trocar texto...")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada...")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
