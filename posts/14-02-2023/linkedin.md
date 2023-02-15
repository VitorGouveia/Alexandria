Bom dia, gostaria de compartilhar uma aplicação que desenvolvi utilizando Next.js, o edge runtime e o serviço de OG Image para criar thumbnails para os meus projetos do github.

Basicamente, escrevi uma função serverless dentro das API routes do Next.js que utiliza o edge runtime para utilizar APIs da Web , como Request e Response, mas também para utilizar a biblioteca de OG Image, que gera imagens na "nuvem" de forma automática baseado nos paramêtros passados na URL, aqui vai um exemplo:

![https://thumbify.vercel.app/api/thumbnail.png?company=vitorgouveia&title=Oi%20linkedin&description=Isso%20foi%20gerado%20na%20nuvem](https://thumbify.vercel.app/api/thumbnail.png?company=vitorgouveia&title=Oi%20linkedin&description=Isso%20foi%20gerado%20na%20nuvem)

link do repositório: [https://github.com/VitorGouveia/Blueprint/tree/master/internals/thumbify](https://github.com/VitorGouveia/Blueprint/tree/master/internals/thumbify)