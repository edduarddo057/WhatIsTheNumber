# Qual é o número ? 🎰

Um jogo de palpites que tem por objetivo tentar advinhar um número através de chutes.

## Hospedagem da aplicação
  O link para acesso da aplicação é este: https://edduarddo057.github.io/WhatIsTheNumber/ 

## Introdução

Jogo de chutes para se destrair quando está atoa ou mesmo passando o tempo, divertido e simples qualquer um pode jogar! :D  

## Como o jogo está estruturado? 🤔

O jogo é dividido em duas pastas uma de arquivos javascript e outra de arquivos css, além de uma arquivo html.

### Arquivos javascript

As configurações javascript estão separadas em 3 arquivos: main.js, display.js e request.js

Sendo o main.js responsável por gerenciar instanciar e controlar todas as outras classes. 
O display.js por outro lado controla somente as funções de exibição dos segmentos e seus metodos.
Enquanto isso request.js é responsável simplismente por fazer a requisição para o servidor e buscar o número chave para ser advinhado no jogo. 

### Arquivos css

As configurações css estão separadas em 4 arquivos: style.css, display.css, colors.css e buttons.css

O arquivo style.css é o arquivo  geral de controle dos atributos css, controlando o body e os containers principais do jogo,
display.css é responsavel por conter as classes de manipulação do próprio display de 7 segmentos, contudo os todas as classes
que controlam os botões ficam na buttons.css. 
O arquivo colors.css é responsável por fazer a configuração das cores e gerencia-las quando entramos no modo noturno! 😱

### Arquivo html

As configurações html estão no arquivo index.html

Este arquivo tem todas as configurações html e faz a chamada dos modulos necessário e dos arquivos de css
e de script presentes na aplicação.

## E os testes? 🤔
- O app atualmente não contém testes unitários e de interface, contudo estes testes são muito importantes e devido somente a falta de prática
  e tempo não foram implementados :/.

## O que temos de diferente ?
 - Como a implementação pedia a não utilização de fontes externas o icone de reinicialização do game foi feito completamente por css!
 - Foi adicionado um modo noturno, que acompanha o navegador caso o seu navegador esteja configurado em modo noturno o jogo reconhece
    automaticamente a corrige as cores para melhor visualização do jogador além de economizar energia do aparelho utilizado! 😉
 
## Pontos a melhorar?
- O erro 'from origin 'null' has been blocked by CORS policy' ocorreu, isso acontece por tentar chamar um script.js diretamente de um endereço físico na própia 
  maquina, por politicas de segurança o próprio navegador acusa esse problema, contudo ele foi resolvido com a hospedagem do jogo que neste caso foi feita
  no GitHub Pages.
- Melhores metódos para responsividade que ficou funcional, mas podemos melhora-la expressivamente.
- Testes automatizados de interface e unitario que são impresindiveis para uma boa gerencia da aplicação;
- Criptrográfia do número chave para melhor jogabilidade.
