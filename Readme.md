
---

# Detona Ralph - Jogo de Agilidade

Este é um jogo simples de agilidade inspirado em Detona Ralph. Seu objetivo é clicar no quadrado certo antes que o tempo acabe!

## Instruções de Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/detona-ralph.git
   ```

2. Abra o arquivo `index.html` no seu navegador:

   ```bash
   cd detona-ralph
   open index.html
   ```
## Deploy
https://detona-ralph-project.netlify.app/

## Imagens



## Estrutura de Diretórios

O projeto está organizado da seguinte forma:

```
projeto/
|-- src/
|   |-- assets/
|   |   |-- css/
|   |   |   |-- index.css
|   |   |   |-- main.css
|   |   |   |-- reset.css
|   |   |-- img/
|   |   |   |-- abertura.png
|   |   |   |-- bloco.jpg
|   |   |   |-- heart.png
|   |   |   |-- super-smash.png
|   |   |   |-- super-smash-bros.png
|   |   |-- script/
|   |       |-- life_heart.mjs
|   |       |-- opening.mjs
|   |       |-- sound.mjs
|   |       |-- start.mjs
|   |       |-- states.mjs
|   |-- pages/
|       |-- game.html
|-- script/
|   |-- engine.mjs
|-- sound/
|   |-- endgame.ogg
|   |-- failhit.ogg
|   |-- hit.ogg
|   |-- open.ogg
|-- index.html
```

## Funcionalidades

- **Contagem Regressiva:** O jogo possui uma contagem regressiva que diminui a cada segundo.
- **Quadrados Aleatórios:** Um quadrado é aleatoriamente destacado para ser clicado.
- **Pontuação:** Ganhe pontos clicando no quadrado certo.
- **Vidas:** Você tem três vidas. Cada clique errado reduz uma vida.
- **Fim de Jogo:** O jogo termina quando o tempo acaba ou você perde todas as vidas.

## Como Jogar

1. Abra o arquivo `index.html` no seu navegador.
2. Aguarde o botão "Press Start" aparecer.
3. Clique no botão "Press Start" para iniciar o jogo.
4. Clique no quadrado em que Ralph aparece antes que o tempo acabe.
5. Repita até o jogo terminar.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Faça um fork e envie pull requests com melhorias ou correções.

---