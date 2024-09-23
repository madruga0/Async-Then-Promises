# Async-Then-Promises

# Promises
> elas esperam algum retorno
> classe **Promise**
> leva dois argumentos **resolve(solucao)** e **reject(erro)**
> encadear mais processos **then**
> alguns recursos de JS **(Fetch API)** e bibliotecas retornam Promises


# Fetch API
> permite fazer requisicoes HTTP
> GET, POST, PUT, DELETE

```js
fetch('https://api.exemplo.com/dados')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json(); // Converte a resposta em JSON
  })
  .then(data => {
    console.log(data); // Trabalha com os dados recebidos
  })
  .catch(error => {
    console.error('Erro:', error); // Lida com erros
  });
```
- **fetch(url)**: faz a requisicao para a URL 
- **response.ok**: verifica se a requisicao foi bem-sucedida
- **response.json()**: extrai os dados no formato JSON da resposta
- **then()**: define o que fazer quando a resposta for recebida com sucesso
- **catch()**: trata os erros que podem ocorrer durante a requisicao




# EXEMPLOS

## 1. Simulação de operação assíncrona (temporizador)
> simula uma operacao que leva algum tempo para ser concluida(uma requisicao a um servidor)

```js
const esperar = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperei por ${ms} milissegundos`)
        }, ms)
    })
}

esperar(2000).then((mensagem) => {
    console.log(mensagem)
})

```
- A função **esperar()** retorna uma ***Promise*** que é resolvida **após 2 segundos**
- Quando o tempo passa, a **Promise é resolvida e o callback dentro de .then() é executado**.





## 2. Promessa para verificar se uma pessoa está online

```js

const verificarStatus = (status) => {
    return new Promise((resolve, reject) => {
        if(status === "online") {
            resolve("A pessoa esta online")
        } else {
            reject("A pessoa esta offline")
        }
    })
}

verificarStatus("online")
    .then((mensagem) => {
        console.log(mensagem) // "A pessoa esta online"
})
.catch((erro) => {
    console.log(erro) // "So sera executado se a promessa for rejeitada"
})

```
- A função **verificarStatus()** resolve a ***Promise*** se o status for **"online"**.
- Se o **status for outro**, a **Promise** será **rejeitada**, e o ***.catch()*** será chamado




# Assync Function

> Vao acontecer de acordo com o seu proprio fluxo (acoes serao executadas ao tempo todo sem uma 'fila')
>// EXEMPLO: usuario esta no checkout, manda salvar seu endereco na conta, mas pode prosseguir para a finalizacao sem recarregar a pagina, pois adicionar endereco ocorre de forma assincrona; **(AJAX => faz uma requisicao pro back end e returna uma reposta sem dar reload na pagina)**



## 1. => Callbacks
> Essa e uma das vertentes da prog Assincrona, fazer com que acoes acontecam depois de um tempo por meio de callbacks
> callback com a **funcao setTimeOut(funcao(){}, time)**

```js
console.log(1);

setTimeout(function () {
  console.log("Acontecendo o callback");
}, 2000);

console.log(2);
console.log(3);
console.log("Aconteceu antes do callback");
```


## 2. => Aprendendo a utilizar PROMISES
> Tambem sao acoes assincronas que podem produzir um valor em algum momento no codigo
> Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do codigo

 /* 
    => **Promise**: o objeto das promises;
    => **resolve**: metodo que resolve uma Promise;
    => **then**: e o que faz ela poder ser executada em um ponto futuro;
*/ 

```js
let p = Promise.resolve(5);

console.log("Algum codigo");

console.log(p);

p.then((value) => {
  return value + 5;
}).then((value) => {
  console.log(`O valor e ${value}`);
});
```

## 3. => Falha nas Promises
> uma promise pode falhar, podemos **reter esse erro** com um metodo chamado **CATCH**
> ***catch***: podemos exibir o erro no console e fazer o debug no codigo
```js
let pro = Promise.resolve(new Error("Nao deu certo"));

console.log("lalala");

pro
  .then((value) => console.log(value))
  .catch((reason) => console.log("Falhou: " + reason));
```

## 4. => Rejeitando Promises
> alem do resolve, ha o metodo **reject**
> quando determinada logica nao satisfaz nosso programa, entao podemos rejeitar e ir para outra com o reject, em vez do resolve
> **RESOLVE** e **REJECT** **terminam a Promise**, nao podemos chamar mais o THEN

```js
function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O numero e ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}

verificarNumero(2);
verificarNumero(4);
```

## 5. => Resolvendo varias Promises
> com o metodo **ALL**, **podemos resolver varias Promises de uma vez** so
? ou seja: **passamos elas por array** e **quando a ultima for resolvida receberemos a resposta**;

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(15);
  }, 5000);
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
  resolve(12);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
```


## 6. => Async Functions
> podemos **criar funcoes assincronas** com a palavra **Async**;
> elas **retornam uma promise**
> se retornar algo, a promise e resolvida, se der alguma exception a promise e rejeitada

```js
async function somar(a, b) {
    return a + b;
}

somar(2,6).then( value => console.log(value) )
```




## 7. => Await
> nas async functions, podemos determinar instrucoes **AWAIT**
> que **vai esperar uma PROMISE ser resolvida ,para apresentar os resultados**

```js
 // Essa funcao cria uma Promise que soma dois numeros ('a' e 'b'), mas com um atraso de 4 segundos.
function somaComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve (a+b); // A Promise e resolvida apos 4 segundos com a soma de A e B
        }, 4000) // Atraso de 4 segundos
    })
}

// Essa funcao e assincrona e usa 'await' para esperar o resultado da Promise que foi retornada pela funcao 'somaComDelay(a,b)'
async function resSoma(a,b,c) {
    let x = somaComDelay(a,b) // 'x' e uma Promise que resolve para a soma de 'a' e 'b' apos 4 segundos
    let y = c // 'y' recebe o valor de 'c' imediatamente

    return await x + y; // Espera o resultado de 'x' (a soma de 'a' e 'b') e depois soma com 'y'
}

// Finalmente, quando você chama resSoma(1, 2, 3), ela espera pela soma de 1 + 2 (que leva 4 segundos) e depois soma esse resultado com 3:
resSoma(1,2,3).then(value => console.log(value)) // Exibe o valor '6' apos 4 segundos
```


## 8. => Generators
> sao **semelhantes a Promises**
> onde **acoes podem ser pausadas e continuadas depois**
> caracterizados pelo **'function*'** e **'yield'**
> o **'yield'** **pode salvar o estado da variavel**

```js
function* criadorId() {
    let id = 0
    while(true) {
        yield id++;
    }
}

let criaId = criadorId();

console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
```
