# AlkaBlog

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) [![Netlify Status](https://api.netlify.com/api/v1/badges/b2d01367-79f8-491e-9377-ec0fc914f0a5/deploy-status)](https://app.netlify.com/sites/alkablog/deploys)

Este projeto faz parte de um processo seletivo. O objetivo é criar um FrontEnd que consiga consumir um API REST e mostrar as postagens de um blog, com informações de comentários quando um post for clicado.

Eu optei por criar um site para um blog fictício com o nome de "AlkaBlog". Nesse site, há uma visualização do Blog como visitante, e uma área do administrador.

Na área do administrador, é possível navegar pela lista de posts, e ao selecionar um, acessar os comentários.

Na página incial, é simulado o resultado do blog, há um card para cada postagem disponível, e ao clicar em cada link, o usuário é levado a uma página com o post, informações do autor e dos comentários.

- 🔗 [Área do Administrador](https://alkablog.netlify.app/admin)
- 🔗 [Blog](https://alkablog.netlify.app/)

## Instalação local e uso

Primeiro, clone o repositório e acesse sua pasta:

```sh
git clone https://github.com/ralacerda/alkablog.git
cd alkablog
```

Certifique-se de que você possui `node` instalado (Versão 16.x ou maior).

Instale as dependências necessárias. Se você não possui `pnpm` instalado, você pode instalar usando `npm -g pnpm` ou ativar o [corepack](https://github.com/nodejs/corepack) usando `corepack enable`.

```sh
pnpm i
```

Criei a build e comece uma preview

```sh
pnpm build && pnpm preview
```

O aplicativo estará disponível no endereço http://localhost:3000

## Destaques

### HTML semântico e acessível.

Tentei ao máximo utilizar HTML semântico e boas práticas de acessibilidade. Isso permite que elementos sejam re-utilizáveis e que o website seja acessível.

### CSS resiliente e fácil de manter

O CSS foi escrito para ser facilmente modificado. Existe um arquivo para regras globais, um arquivo para o reset, um arquivo com as animações e um arquivo com as variáveis. Dessa forma, o design do website pode ser facilmente modificado.

Para estilizar os componentes, foi utilizado [Scoped CSS](https://vuejs.org/api/sfc-css-features.html#scoped-css), que limita as definições somente aos elementos daquele componente, evitando conflitos de estilos.

O nome das classes foram escolhidos da seguinte forma:

```html
<div class="bloco-container">
  <div class="bloco">
    <p class="bloco__elemento1"></p>
    <p class="bloco__elemento2"></p>
    <div class="bloco__subbloco">
      <div class="subblock__elemento"></div>
    </div>
  </div>
</div>
```

Essa padronização permite uma compreensão rápida do código.

### Resiliência a erros

O site foi desenvolvido de forma a lidar com eventuais instabilidades do API. Isso inclui redirecionamento para páginas de 404 e mensagens de aviso ao encontrar erros no carregamento de Posts ou Comentários.

### Carregamento assíncrono

AS informações de comentários são carregadas de forma assíncrona, assim, não há a necessidade de esperar o carregamento dos comentários para exibir informações de um post. Isso aumenta a usabilidade do aplicativo e da melhor sensação de performance.

## Server Side Rendering

Utilizando a estratégia de Server Side Rendering, o navegador recebe uma renderização inicial feita no servidor,
e carrega (hidata) os elementos em segundo plano. Dessa forma, é possível reduzir o tempo necessário para o carregamento inicial da página.

## Ferramentas utilizadas

- SASS, Typescript, VueJS, NuxtJS
- Bibliotecas vueuse e unplugin-icons
- Git e GitHub para versionamento
- Netlify para hospedagem e Continous Deployment
- Calculadora Utopia para espaçamento e tamanho de fonte fluidas

## Mudanças em um projeto real

Como o projeto faz parte de um processo seletivo com tempo limitado, eu tomei a decisão de não implementar determinadas funcionalidades, ou optei por um caminho mais simples.

### Zod

O Typescript não é capaz de verificar se a resposta do API bate com o modelo definido.
Em um projeto real, eu utilizaria [Zod](https://zod.dev/) para validar os resultados do API, sendo possível verificar que o modelo da resposta bate com o modelo esperado. Dessa forma, é possível lidar com erros na API sem afetar o resto do site.

### Paginação

Dado o limite do API de posts responder de sempre com todos os 100 posts disponíveis, não foi possível otimizar
o tempo de carregamento do website.
Em um projeto real, uma mudança no API deveria ser feita para possibilitar o retorno de um valor
limitado de posts. Dessa forma, seria possível fazer implementar uma paginação ou scroll infito, por exemplo, realizando pequenas chamadas conforme necessário.

### Estilos

Para esse projeto, o API utilizado possuia texto Lorem Ipsum sem capitalização no começo da frase. Para deixar a aparência mais bonita, eu utilizei CSS para capitalizar a a primeira palavra do texto.

```css
selector::first-letter {
  text-transform: capitalize;
}
```

Em um cenário real, é esperado que os texos estejam corretamente capitalizados.
