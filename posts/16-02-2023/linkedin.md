Você sabe o que é o pipe operator?

Pipe operator é uma expressão que permite passar o retorno de de uma função para outra de forma simples, o pipe operator é muito utilizado para realizar diversas transformações em um dado.

Existe uma proposta com o objetivo de adicionar o pipe operator ao javascript:

[https://github.com/tc39/proposal-pipeline-operator](https://github.com/tc39/proposal-pipeline-operator)

Porém, pode levar um tempo até que as coisas andem e essa feature seja implementada na linguagem, enquanto isso, preparei um “hackzinho” que permite a gente utilizar esse função de pipe de maneira simples e com sintaxe similar à promises.

Um caso de uso real dessa função seria na hora de criar uma slug:

```js
wrapPipe("Essa é a minha string")
    .pipe(string => String(string))
    .pipe(string => string.replaceAll(" ", "-"))
    .pipe(string => string.normalize('NFD'))
    .pipe(string => string.replace(/[\u0300-\u036f]/g, ""))
    .pipe(string => string.toLowerCase())
    .pipe(console.log) // resultado: "essa-e-a-minha-string"
```

Essa função pode ser implementada de algumas formas, mas eu decidi utilizar o Builder Pattern já que deixa o código muito mais legível.

```js
const wrapPipe = (value) => {
    let modifiedValue = value

    return {
        pipe: function(callback) {
            modifiedValue = callback(modifiedValue) ?? modifiedValue

            return this
        }
    }
}
```

Inclusive essa mesma funcionalidade poderia ser implementada utilizando a API de Promises.
