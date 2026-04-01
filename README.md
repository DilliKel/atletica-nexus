# Atletica Nexus

Site institucional da Atletica Nexus (Ciencia da Computacao - RR), desenvolvido com Nuxt.

## Visao geral

O projeto apresenta:
- Pagina inicial institucional
- Galeria de fotos
- Pagina de produtos
- Pagina de associacao com planos
- Pagina de eleicao
- Integracao de contato via WhatsApp

## Stack

- Nuxt 4
- Vue 3 (via Nuxt)
- Tailwind CSS 4 (via `@tailwindcss/postcss`)

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (recomendado)

## Como rodar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```text
http://localhost:3000
```

## Scripts disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run generate`: gera versao estatica do site
- `npm run preview`: serve localmente a build gerada

## Estrutura do projeto

```text
.
|-- app.vue
|-- nuxt.config.ts
|-- assets/
|   `-- css/
|       `-- main.css
|-- components/
|   |-- AppHearder.vue
|   `-- FloatingWhatsapp.vue
|-- composables/
|   `-- useWhatsapp.ts
|-- layouts/
|   `-- default.vue
|-- pages/
|   |-- index.vue
|   |-- fotos.vue
|   |-- produtos.vue
|   |-- associacao.vue
|   `-- eleicao/
|       `-- index.vue
|-- public/
|   `-- imagens/
`-- utils/
    `-- siteContent.js
```

## Conteudo central

Dados principais do site (links, produtos, planos, galeria e contato) ficam em:

- `utils/siteContent.js`

## Metadados e configuracao global

Configuracoes de head (idioma, descricao, favicon), PostCSS e CSS global ficam em:

- `nuxt.config.ts`

## Contato

- Instagram: https://instagram.com/atleticanexus
- WhatsApp: configurado em `utils/siteContent.js`

## Licenca

Defina aqui a licenca do projeto (ex.: MIT) caso deseje tornar publica a distribuicao do codigo.
