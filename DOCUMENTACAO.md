# Lume Pet — Documentação do Projeto

## 1. Identificação

- **Projeto:** Landing page para pet shop fictício — Lume Pet
- **Autor:** Felipe Machado da Silveira
- **Curso:** Introdução à Programação Front-End e Back-End (IP 20h A) — SCTEC
- **Atividade:** Desafio Extra — desenvolvimento de landing page para pet shop

## 2. Uso de Inteligência Artificial

Antes de iniciar o desenvolvimento, utilizei uma IA (ChatGPT) como ferramenta de apoio **exclusivamente para a fase de concepção da marca** — brainstorm de nome, escrita da biografia e definição da identidade visual (paleta de cores, tipografia e diretrizes de estilo).

Conversa completa: https://chatgpt.com/share/6a5fc76a-12e4-83e9-8edd-0b5040590ee7

**Importante:** a IA não foi utilizada para gerar código. Todo o HTML, CSS e JavaScript da landing page foi escrito manualmente por mim. As seções seguintes documentam as decisões de marca tomadas nessa conversa, que serviram de base conceitual para o desenvolvimento do projeto.

## 3. Identidade da marca

### 3.1. Escolha do nome

Foram avaliadas cinco opções de nome antes da escolha final:

| Nome | Conceito |
|---|---|
| Pata Leve | Cuidado tranquilo, gentil e sem estresse |
| Ninho Pet | Proteção, conforto e sensação de pertencimento |
| **Lume Pet** | Alegria, vitalidade e cuidado que ilumina |
| VivaPata | Animais felizes, saudáveis e cheios de energia |
| Laço Animal | Conexão entre animais e tutores |

O nome escolhido foi **Lume Pet**, por ser curto, moderno, com boa sonoridade e por permitir uma identidade visual clean e sofisticada, alinhada à proposta do projeto.

### 3.2. Conceito e slogan

- **Conceito da marca:** "A luz do cuidado" — o nome "Lume" remete a luz, calor e aconchego, e a marca busca transmitir carinho e alegria sem ser infantil.
- **Slogan principal:** "Cuidado que ilumina."
- **Slogan de destaque:** "Cuidado que ilumina a vida do seu pet. Serviços pensados para proporcionar mais saúde, conforto e felicidade ao seu melhor amigo."

### 3.3. Biografia

**Versão completa:**

Na Lume Pet, acreditamos que todo animal merece uma vida cheia de carinho, saúde e alegria. Por isso, oferecemos cuidados pensados para proporcionar conforto, segurança e bem-estar em cada atendimento.

Mais do que uma petshop, somos um espaço de confiança para tutores que desejam o melhor para seus companheiros. Reunimos atendimento cuidadoso, profissionais apaixonados por animais e serviços realizados com atenção às necessidades de cada pet.

Nosso propósito é tornar a rotina dos animais mais leve e especial, valorizando o vínculo que ilumina a vida de cada família.

**Versão curta:**

A Lume Pet é uma petshop dedicada ao cuidado, à saúde e ao bem-estar dos animais. Oferecemos serviços com carinho, segurança e atenção individual, porque cada pet merece um cuidado especial.

**Versão para redes sociais:**

> Cuidado que ilumina a vida do seu pet. Banho, tosa, bem-estar e muito carinho. Agende um horário com a Lume Pet.

## 4. Identidade visual

### 4.1. Logotipo

O símbolo une três elementos: um círculo incompleto (remetendo a luz/sol), uma pata minimalista formada por espaços negativos no centro, e três pequenos raios arredondados acima do círculo. Formas simples, sem detalhes excessivos, para funcionar bem também em tamanhos pequenos (favicon, ícones).

No nome ao lado do símbolo, "Lume" recebe maior destaque em verde-escuro, e "Pet" aparece em amarelo-dourado, com peso mais leve.

Versões previstas: logo horizontal (símbolo + nome), logo vertical (símbolo acima do nome), símbolo isolado (favicon/ícone), versão monocromática escura e versão branca para fundos escuros.

### 4.2. Paleta de cores

| Cor | Código | Aplicação |
|---|---|---|
| Verde Lume | `#173F3A` | Cor principal, títulos, menu e botões |
| Amarelo Solar | `#F4B942` | Destaques, detalhes e elementos gráficos |
| Creme Claro | `#FFF8EB` | Fundo principal do site |
| Coral Suave | `#E87962` | Pequenos destaques e chamadas secundárias |
| Grafite | `#263332` | Textos e parágrafos |
| Branco | `#FFFFFF` | Cards e áreas de contraste |

O verde-escuro transmite confiança e proximidade com a natureza; o amarelo representa o "lume", trazendo calor e alegria; o creme deixa o site acolhedor, evitando um fundo branco frio. O coral é usado com moderação (ícones pequenos, etiquetas, detalhes decorativos). Botões principais usam fundo verde com texto branco; em elementos amarelos, o texto deve ser verde-escuro (nunca branco), para manter contraste de leitura.

### 4.3. Tipografia

- **Títulos — Fredoka:** formas arredondadas e amigáveis, sem parecer infantil. Pesos: `700` para título principal, `600` para títulos de seção, `500` para títulos de cards.
- **Textos — Nunito Sans:** limpa, arredondada e legível, usada em parágrafos, botões, formulários e navegação. Pesos: `400` para parágrafos, `600` para menus/botões, `700` para pequenos destaques.

Importação via Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
```

Variáveis base sugeridas:

```css
:root {
  --color-primary: #173f3a;
  --color-primary-dark: #102f2c;
  --color-accent: #f4b942;
  --color-secondary: #e87962;
  --color-background: #fff8eb;
  --color-surface: #ffffff;
  --color-text: #263332;
  --color-text-light: #687371;
  --font-heading: 'Fredoka', sans-serif;
  --font-body: 'Nunito Sans', sans-serif;
}
```

### 4.4. Estilo dos elementos

- **Botões:** arredondados, mas não em formato de cápsula (`border-radius: 12px`). Textos como "Agendar atendimento", "Conhecer os serviços", "Falar com a Lume Pet".
- **Cards:** fundo branco, bordas arredondadas entre `16px` e `20px`, sombra suave, ícones simples e arredondados, pequeno detalhe amarelo, espaçamento interno generoso.
- **Ícones:** traço uniforme, cantos arredondados, representando banho, tosa, higiene, cuidados especiais, atendimento e produtos — dentro de quadrados ou círculos com fundo amarelo-claro.
- **Elementos decorativos:** raios arredondados, círculos remetendo ao sol, patinhas discretas, linhas curvas, manchas suaves em amarelo/creme e brilhos minimalistas próximos aos títulos (usados principalmente no destaque inicial e fundos de seção).
- **Fotografias:** animais reais, alegres e bem cuidados, com iluminação natural, fundos claros, tons quentes e ambientes limpos — evitando cores muito saturadas ou filtros fortes.

### 4.5. Personalidade da marca

A Lume Pet deve transmitir: acolhimento, confiança, alegria, cuidado, modernidade e proximidade com os tutores.

## 5. Etapas de desenvolvimento

O desenvolvimento do projeto seguiu as etapas técnicas exigidas pelo desafio:

1. **Estruturação e identidade visual:** aplicação da paleta de cores e tipografia (Fredoka + Nunito Sans) definidas na fase de concepção da marca.
2. **Seção de destaque:** cabeçalho com impacto visual, uso de `position: relative/absolute` para sobreposição de elementos (imagem de pet em destaque) e CTAs.
3. **Seção sobre:** apresentação da história/proposta da Lume Pet, estruturada com Flexbox/Grid, incluindo indicadores (ex: pets atendidos, anos de experiência).
4. **Seção de serviços:** cards de serviços (banho e tosa, consultas, produtos) com `aspect-ratio` e ícones.
5. **Seção de contato:** formulário de contato em HTML/CSS/JavaScript com validação básica de campos (obrigatoriedade e formato de e-mail).
6. **Interatividade (JavaScript/DOM):** validação do formulário e demais comportamentos interativos da página.

Todo o código (HTML, CSS e JavaScript) foi escrito manualmente, sem uso de IA nesta etapa.

## 6. Guia rápido de execução local

O projeto é uma página estática, sem dependências de instalação.

1. Baixe ou clone os arquivos do projeto.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique) **ou**, para melhor experiência com recarregamento automático, abra a pasta no VS Code e use a extensão "Live Server".
3. Não é necessário nenhum passo de build, instalação de dependências ou servidor backend.
