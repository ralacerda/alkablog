# AlkaBlog

Esse projeto faz parte de um processo seletivo. O objetivo é criar um Front-End que consiga consumir um REST API e mostrar as postagens de um blog, com informações de comentários quando um post fosse clicado.

Eu optei por criar um site para um blog fictício com o nome de "AlkaBlog". Nesse site, há uma visualização do Blog como visitante, e uma área de administrador.

Na área do administrador, é possível navegar pela lista de Posts, e ao selecionar um, acessar os comentários.

Na página incial, é simulado o resultado do blog, onde existe um card para cada postagem disponível, e ao clicar em cada link, o usuário é levado a uma página com o post, informações do autor e comentários.

- 🔗 [Área do Administrador](https://alkablog.netlify.app/admin)
- 🔗 [Blog](https://alkablog.netlify.app/)

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

## Destaques

### HTML semântico e acessível.

Tentei ao máximo utilizar HTML semântico e boas práticas de acessibilidade. Isso permite que elementos sejam re-utilizáveis e que o website seja acessível.

### CSS resiliênte e facil de manter

O CSS foi escrito para ser facilmente modificado. Existe um arquivo para regras globais, um arquivo para o reset, um arquivo com as animações e um arquivo com as variáveis. Dessa forma, o design do website pode ser facilmente modificado.

Para estilizar os componentes, foi utilizado [Scoped CSS](https://vuejs.org/api/sfc-css-features.html#scoped-css), que limita as definições para somente elementos daquele componente, evitando `conflitos` de estilos.

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

Informações de comentários são carregadas de forma assíncrona, assim, não há a necessidade de esperar o carregamento dos comentários para exibir informações de um post. Isso aumenta a usabilidade do aplicativo.

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

### Estilos

Para esse projeto, o API utilizado possuia texto Lorem Ipsum sem capitalização no começo da frase. Para deixar a aparência mais bonita, eu utilizei CSS para capitalizar a a primeira palavra do texto.

```css
selector::first-letter {
  text-transform: capitalize;
}
```

Em um cenário real, é esperado que os texos estejam corretamente capitalizados.
