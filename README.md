# AlkaBlog

Esse projeto faz parte de um processo seletivo. O objetivo é criar um Front-End que consiga consumir um REST API e mostrar as postagens de um blog, com informações de comentários quando um post fosse clicado.

Eu optei por criar um site para um blog fictício com o nome de "AlkaBlog". Nesse site, há uma visualização do Blog como visitante, e uma área de administrador.

Na área do administrador, é possível navegar pela lista de Posts, e ao selecionar um, acessar os comentários.

Na página incial, é simulado o resultado do blog, onde existe um card para cada postagem disponível, e ao clicar em cada link, o usuário é levado a uma página com o post, informações do autor e comentários.

## Instalação local e uso

Primeiro, clone o repositório e acesse sua pasta:

```sh
git clone https://github.com/ralacerda/alkablog.git
cd alkablog
```

Certifique-se que você possui `node` instalado (Versão 16.x ou maior).

Instale as depedencias necessárias. Se você não possui `pnpm` instalado, você pode instalar usando `npm -g pnpm` ou ativar o [corepack](https://github.com/nodejs/corepack) usando `corepack enable`.

```sh
pnpm i
```

Criei a build e comece uma preview

```sh
pnpm build && pnpm preview
```

O aplicativo vai estar disponível no endereço http://localhost:3000

## Ferramentas utilizadas

- SASS, Typescript, VueJS, NuxtJS
- Bibliotecas vueuse e unplugin-icons
- Git e GitHub para versionamento
- Netlify para hospedagem e Continous Deployment
- Calculadora Utopia para espaçamento e tamanho de fonte fluídas

## Mudanças em um projeto real

Como o projeto faz parte de um processo seletivo com tempo limitado, tomei a decisão de não implementar determinadas features, ou optei por um caminho mais simples.

### Zod

O Typescript não é capaz de verificar se a resposta do API bate com o modelo definido.
Em um projeto real, eu utilizaria [Zod](https://zod.dev/) para validar os resultados do API, sendo possível verificar que o modelo da resposta bate com o modelo esperado. Dessa forma, é possível lidar com erros na API sem afetar o resto do site.

### Paginação

Dado o limite do API de posts responder de sempre com todos os 100 posts disponíveis, não foi possível otimizar
o tempo de carregamento do website.
Em um projeto real, uma mudança no API deveria ser feita para possibilitar o retorno de um valor
limitado de posts. Dessa forma, seria possível fazer implementar uma paginação ou scroll infito, por exemplo, realizando pequenas chamadas conforme necessário.
