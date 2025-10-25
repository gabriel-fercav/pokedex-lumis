# React + Vite

O projeto foi desenvolvido em React com Vite para atender aos requisitos de performance, responsividade e interatividade do desafio, especialmente a exigência de não recarregar a página durante o uso. Embora o desafio sugerisse o uso de Vanilla JS, a escolha por React foi feita por motivos técnicos que impactam diretamente na qualidade e na escalabilidade da aplicação.

### Justificativas Técnicas
1. React (com Vite)

O React oferece um modelo de componentes que simplifica a atualização dinâmica da interface sem recarregar a página. 
O Vite, por sua vez, garante build rápido e ambiente de desenvolvimento otimizado, tornando o fluxo de trabalho mais ágil e eficiente.

2. Shadcn UI + Tailwind CSS

Essas ferramentas possibilitaram a criação de uma interface moderna, responsiva e fiel ao design do Figma, com mais produtividade no desenvolvimento.
A combinação trouxe agilidade na prototipagem e garantiu consistência visual em diferentes tamanhos de tela.

3. TanStack Query (React Query)

A aplicação realiza múltiplas requisições à PokéAPI, muitas delas combinando dados de diferentes endpoints.
O React Query foi fundamental para gerenciar essas requisições de forma performática, com cache automático e controle de estados de carregamento.
Sem essa ferramenta, seria mais complexo lidar com limites de requisições e problemas de performance como "too many requests".

4. React Router DOM

Responsável pelo roteamento entre páginas (por exemplo, a lista de pokémons e os detalhes de cada um), garantindo transições sem reloads.

## Deploy (Vercel)

https://pokedex-lumis-flame.vercel.app/

## Rodando o Projeto Localmente

Para rodar o projeto, siga a lista de comandos abaixo após realizar sua clonagem
- yarn install
- yarn dev

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
