// // Criacao de promessa
// const myPromise = new Promise((resolve, reject) => {
//   const nome = "Pedro";

//   if (nome === "Pedro") {
//     resolve("Usuario Pedro encontrado");
//   } else {
//     reject("O usuario Pedro nao foi encontrado");
//   }
// });

// myPromise.then((data) => {
//     console.log(data)
// })

// // callback: executada apenas quando o resultado da operacao estiver pronto
// // then(), so executa quando a PROMISE for resolvida com sucesso
// // se houver algum erro ou se a PROMISE for rejeitada, o callback em catch() sera chamado




// // Encadeamento de then's
// const myPromise2 = new Promise((resolve, reject) => {
//     const nome = "Pedro";
  
//     if (nome === "Pedro") {
//       resolve("Usuario Pedro encontrado");
//     } else {
//       reject("O usuario Pedro nao foi encontrado");
//     }
//   });
  
//   myPromise2.then((data) => {
//       return data.toUpperCase()
//   }).then((stringModificada) => {
//     console.log(stringModificada)
//   })


// // Retorno do catch()
// const myPromise3 = new Promise((resolve, reject) => {
//     const nome = "Joao";
  
//     if (nome === "Pedro") {
//       resolve("Usuario Pedro encontrado");
//     } else {
//       reject("O usuario Pedro nao foi encontrado");
//     }
//   });

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

//

function verificarStatus(status) {
    return new Promise((resolve, reject) => {
        if(status === "Online") {
            resolve("A pessoa esta online");
        } else {
            reject("A pessoa esta offline");
        }
    });
}

verificarStatus("online").then((mensagem) => {
    console.log(mensagem) // "A pessoa esta online"
}).catch((err) => {
    console.log(err) // "So sera executado se a promessa for rejeitada"
})
