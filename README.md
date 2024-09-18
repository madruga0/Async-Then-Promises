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
