# Site iPhone 17 Pro

Landing page em React e Vite do iPhone 17 Pro. A página é única: o menu leva a seções da mesma tela com âncoras (`#design`, `#camera`, `#performance`, `#cores`).

## Como rodar

Na pasta `site-iphone18`:

```bash
npm install
npm run dev
```

O Vite mostra o endereço local, em geral `http://localhost:5173`. Se a porta estiver ocupada, ele usa a próxima livre.

Outros comandos:

```bash
npm run build
npm run preview
npm run lint
```

## Estrutura

```text
src/
  main.jsx                 inicia o React no elemento #root
  App.jsx                  junta as seções na ordem da página
  index.css                Tailwind e a classe .text-gradient
  components/
    NavBar.jsx             menu fixo
    Hero.jsx               foto de abertura
    Intro.jsx              título, botões e cards de especificação
    Highilights.jsx        design, chip e câmera
    Colors.jsx             escolha de cor e modelos
    Footer.jsx             links do rodapé
public/img/                fotos servidas em /img/...
```

Arquivos em `public` não usam o caminho `public/` no `src` da imagem. O certo é `/img/hero.jpg`.

## Seções e âncoras

| Menu        | Âncora          | Onde está                         |
| ----------- | --------------- | --------------------------------- |
| Design      | `#design`       | `Highilights.jsx`                 |
| Câmera      | `#camera`       | `Highilights.jsx`                 |
| Performance | `#performance`  | `Highilights.jsx`                 |
| Cores       | `#cores`        | `Colors.jsx`                      |

O menu é fixo. As seções usam `scroll-mt-28` para o título não ficar escondido atrás dele.

## Console no DevTools

Abra o DevTools (F12) e a aba **Console**. Todos os logs deste site começam com `[site-iphone]`. Use esse texto no filtro do console para esconder o resto.

| Ação na tela              | O que aparece no console                                      |
| ------------------------- | ------------------------------------------------------------- |
| A página abre             | `React iniciando` e o grupo `App montado`, com a tabela de seções |
| A foto do hero carrega    | largura, altura e `src` da imagem                             |
| A foto do hero falha      | `console.error` com o caminho que não carregou                |
| Clique em Design, Câmera, Performance ou Cores | destino e o elemento encontrado na página        |
| Clique em Comprar no menu | aviso de que o botão ainda não leva a uma seção               |
| Clique em Compre agora, Saiba mais ou num card da intro | qual botão ou spec foi clicado                 |
| A seção de cores abre     | cor inicial e a tabela dos modelos                            |
| Clique numa bolinha de cor | id clicado e o objeto da cor selecionada                     |
| Clique num link do rodapé | aviso de que o link ainda aponta para `#`                     |

No modo de desenvolvimento o React monta os efeitos duas vezes. Por isso `App montado`, a cor inicial e a tabela de modelos podem aparecer em dobro. Isso não acontece no build de produção.

## Imagens

| Arquivo                    | Uso                          |
| -------------------------- | ---------------------------- |
| `public/img/hero.jpg`      | abertura                     |
| `public/img/titanium-design.jpg` | card de titânio        |
| `public/img/ios-features.jpg`    | card do sistema          |
| `public/img/chip-a18-pro.jpg`    | chip A18 Pro             |
| `public/img/iphone-blue.jpg`     | cor azul                 |
| `public/img/iphone-silver.jpg`   | cor natural              |
| `public/img/iphone-orange.jpg`   | cor laranja              |
