# Atletica Nexus
> Portal web simples para divulgação da Atlética Nexus, apresentando sua história, fotos, conquistas e produtos.

## Sobre
Este projeto foi criado para a Atlética Nexus, representante dos alunos de Ciência da Computação da UFRR/UERR, que não possuía um site oficial. Desenvolvi este portal com o objetivo de registrar e compartilhar informações institucionais, fotos de eventos, históricos de gestões, conquistas e produtos da Atlética ao longo dos anos.  
O projeto surgiu de iniciativa pessoal, sem demanda institucional ou acadêmica, impulsionado pela vontade de centralizar a memória e promover a integração dos membros da Atlética.  
Atualmente, sou o único responsável por todo o desenvolvimento (frontend e backend) e manutenção deste sistema.

## Funcionalidades

- [x] Página inicial com histórico da Atlética Nexus e missão institucional
- [x] Página "Sobre" detalhando objetivo, missão e valores
- [x] Página "Fotos" apresentando galerias por ano e evento
- [x] Página "Produtos" com listagem de artigos à venda ou produzidos pela Atlética
- [x] Página "Associação" com informações sobre como se associar
- [ ] Página de eleição de gestão (estrutura iniciada, porém sem votação implementada)
- [ ] Upload de fotos/projetos direto pelo site (não implementado)
- [ ] Integração com backend para cadastro, login ou votos (não implementado)
- [ ] Histórico dinâmico de conquistas (planejado)

## Stack utilizada

- **Nuxt.js**: Estrutura principal do frontend, roteamento e renderização SSR/SPA
- **TailwindCSS**: Estilização e responsividade das páginas
- **PostCSS**: Processamento de estilos em conjunto com Tailwind
- **Vercel**: Deploy automático e hospedagem do site

## Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/DilliKel/atletica-nexus.git
   cd atletica-nexus
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no navegador.  
> **Obs.:** Não há backend próprio implementado, apenas páginas estáticas/SSR geradas pelo Nuxt.

## Aprendizados

- Como estruturar um site multipáginas utilizando Nuxt.js 4.x
- Customização completa do TailwindCSS e escopos de utilitários pelo PostCSS
- Organização dos assets, páginas e componentes em projetos Nuxt modernos
- Deploy e gerenciamento de versões automáticas usando Vercel
- Desenho de uma solução incremental, priorizando o MVP realista

## Status do projeto
Em desenvolvimento  
O portal já está no ar ([atletica-nexus.vercel.app](https://atletica-nexus.vercel.app/)), mas diversas funcionalidades planejadas ainda não foram implementadas, especialmente as interativas.

---
