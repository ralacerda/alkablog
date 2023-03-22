# AlkaBlog

Esse projeto faz parte do processo seletivo da Alkabot

## Instalação local e uso

## Ferramentas utilizadas

- ModernFontStack: Fonts encontradas em multiplos sistema. Usar as fontes usadas diminuim o controle
  sobre como o site vai aparecer, mas favorece a performace e evita mudanças de estilo durante carregamento
  da página.

## Destaques

### Uso de Nuxt e SSR

- Rápida velocidade para acessar
- Usando router

### Lidando com erros

O projeto consegue lidar corretamente com multiplos tipos de erro.

### Carregamento assíncrono

## Mudanças em um projeto real

Como o projeto faz parte de um processo seletivo com tempo limitado, tomei a decisão de não implementar determinadas features, ou optei por um caminho mais simples.

### Zod

O typescript não é capaz de verificar se a resposta do API bate com o modelo definido.
Em um projeto real, eu utilizaria _Zod_ para validar os resultados do API, sendo possível verificar que o modelo da resposta bate com o modelo esperado.

### Página de 404 personalizada

### Paginação

Dado o limite do API de posts responder de sempre com 100 posts, não foi possível otimizar
o tempo de carregamento do website.
Em um projeto real, uma mudança no API deveria ser feita para possibilitar o retorno de um valor
limitado de posts. Dessa forma, seria possível fazer implementar uma paginação ou scroll infito, por exemplo, realizando pequenas chamadas conforme necessário.
