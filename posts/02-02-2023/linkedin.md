Boa tarde pessoal! Hoje quero compartilhar com você algumas descobertas que fiz sobre o Javascript nos últimos dias. Vou falar especificamente sobre algumas APIs inclusas no ecossistema que podem te ajudar a remover algumas dependências do seu projeto. 



1. Response API

Documentação MDN: https://developer.mozilla.org/en-US/docs/Web/API/Response

Sem suporte no Node.js.



É uma API para geração de Respostas HTTP, existem exemplos em runtimes mais modernos como o Deno e Bun, que usam por padrão APIs da web.



Exemplo Deno: https://deno.land/manual@v1.29.1/runtime/http_server_apis#responding-with-a-response

Exemplo Bun: https://github.com/oven-sh/bun#using-bunjs---a-new-javascript-runtime-environment



2. Test Runner

Os test runners existem em todos os runtimes, menos na Web (tá na hora já), e tem como objetivo testar seu código e substituir o trabalho que bibliotecas como Jest, fazem hoje.



Exemplo Node: https://nodejs.org/dist/latest-v18.x/docs/api/test.html

Exemplo Deno: https://deno.land/manual@v1.29.3/basics/testing

Exemplo Bun: https://github.com/oven-sh/bun#bunpeek---read-a-promise-without-resolving-it



3. Crypto API

Essa API possui um conjunto de primitivos de criptografia para a sua aplicação, podendo facilmente substituir bibliotecas de hashing (argon2, bcrypt) e bibliotecas de geração de IDs (nanoid, uuid).



documentação: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API



Lembrando que essas APIs existirem não significa que você deve abandonar suas dependências e implementar de forma nativa, essas APIs resolvem muitos problemas mas não todos, é possível que daqui uns anos já seja possível fazer uso delas de forma completa.



#javascript 
