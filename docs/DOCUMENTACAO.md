# Documentação – Care Plus (o que foi feito)

Este arquivo registra a estrutura do projeto e tudo que foi implementado ao longo do desenvolvimento.

---

## 1. Estrutura de pastas e arquivos

### Raiz
- **index.html** – Redireciona para o login (`src/assets/pages/auth/login.html`) via meta refresh e `window.location.replace`.
- **README.md** – Visão geral, estrutura, como rodar e tecnologias.
- **DOCUMENTACAO.md** – Este arquivo.

### CSS (`src/assets/css/`)
- **style.css** – Ponto de entrada. Apenas importa: `common.css`, `animations.css`, `auth.css`, `paciente.css`, `medico.css`.
- **common.css** – Variáveis do tema (cores, sombras, raios), reset, body, header, nav inferior, botões (careplus, success, danger), cards, logo, formulários em `.bg-careplus`, badge de notificação, barra de pontos, success-check, slots (`.slot-grid`), faixa de datas (`.date-strip`), container principal (`.main-container`), utilitários, avatar, calendário (`.careplus-calendar`, semana, dias, navegação). Inclui também: `.screen-title`, `.screen-subtitle`, `.section-title`, `.app-card`, `.feature-card`, `.consult-card`, `.form-card`.
- **animations.css** – Variáveis de duração e easing, keyframes (fadeIn, fadeInUp, slideInDown, slideInUp, scaleIn, pulseSoft, gradientShift, etc.). Animações de entrada (header, nav, conteúdo em cascata). Transições em cards e botões, barra de progresso, badge, success-check e nav. Respeita `prefers-reduced-motion`.
- **auth.css** – Layout centralizado para `.page-auth`, logo em branco, `.auth-card`, `.btn-social`, `.auth-links`, `.auth-toggle` (Paciente/Médico).
- **paciente.css** – `.home-welcome`, `.home-level` (nível, nome, CTA, pontos, barra), `.home-wallet-cta` (bloco da carteira na home), `.menu-list`, `.profile-header`, estilos da carteira digital (wallet-hero, nível, saldo, progresso, histórico, recompensas).
- **medico.css** – Estilos específicos do fluxo médico (reservado para futuras customizações).
- **README.md** – Descrição de cada arquivo CSS e onde alterar cores, login, carteira, médico.

### JavaScript (`src/assets/js/`)
- **app.js** – Comportamento global: máscara CPF, máscara telefone, toggle Paciente/Médico no cadastro, seleção única em `.slot-grid` e `.date-strip .date-item`, envio de mensagem no chat (form-chat, input-mensagem, lista-mensagens). Código organizado em funções nomeadas e comentários no topo.
- **calendar.js** – Módulo `CarePlusCalendar` (IIFE): calendário mensal com navegação anterior/próximo, dias da semana, dias do mês, marcação de “hoje” e “selecionado”, callback `onSelect(date)`. Opções: `initialYear`, `initialMonth`, `initialDate`, `onSelect`. Usado em `agenda.html` e `agenda-medico.html`.

### Páginas (`src/assets/pages/`)

#### Auth (`auth/`)
- **login.html** – CPF, senha, botão Entrar, Google/Facebook, links “Esqueci senha” e “Não tenho conta”. Layout com `.auth-card`.
- **cadastro.html** – Toggle Paciente/Médico, nome, CPF, senha, Criar conta, redes sociais, “Já tenho conta”.
- **esqueci-senha.html** – Header, CPF ou e-mail, Enviar link, mensagem de sucesso (exibida por JS na página), “Voltar ao login”.

#### Paciente (`paciente/`)
- **home-paciente.html** – Header com logo e notificação, `.home-welcome` (Olá + subtítulo), `.home-level` (Nível 1, Iniciante, pontos, barra), grid de features (Agenda, Histórico, Mensagens, Ajuda), `.home-wallet-cta` (acesso à carteira digital: saldo, barra, link para carteira-digital.html).
- **agenda.html** – Calendário (calendar.js), mensagem da data selecionada, eventos do dia, lista de consultas marcadas, botão Marcar consulta.
- **marcar-consulta.html** – Busca, lista de médicos (cards com Selecionar).
- **selecionar-medico.html** – **Sem calendário.** Apenas card “Data escolhida” (ex.: Sexta-feira, 31 de outubro de 2025) e link “Alterar data” para `agenda.html`. Grid de horários e botão Confirmar.
- **confirmar-consulta.html** – Resumo da data, profissional, local, detalhes (textarea), botão Confirmar.
- **consulta-agendada.html** – Tela de sucesso (ícone, texto, dados da consulta, Ver localização, botões Histórico e Agenda).
- **detalhes-consulta.html** – Dados do médico e da consulta, detalhes, botão Cancelar consulta.
- **cancelar-consulta.html** – Fluxo de cancelamento (conteúdo conforme implementado na página).
- **cancelado-sucesso.html** – Sucesso com botões Página inicial, Agenda, Histórico, Carteira digital.
- **mensagens.html** – Busca, lista de conversas (Dr. Claudio, Dr. Roger).
- **mensagens-chat.html** – Header com nome do médico, bolhas de mensagens, input e botão enviar (comportamento em app.js).
- **historico-paciente.html** – Busca/filtro, listagem por período (Ontem, Último mês) com consultas e pontos.
- **ajuda.html** – Accordion de perguntas frequentes, card de contato (telefone, WhatsApp).
- **perfil-paciente.html** – Avatar, formulário (nome, CPF, sexo, idade, telefone), Salvar alterações. Formulário em `.form-card` onde aplicável.
- **menu-paciente.html** – Lista de opções (Agenda, Histórico, Mensagens, Carteira Digital, Ajuda; Meu perfil, Sair) com `.menu-list` e `.app-card`.
- **carteira-digital.html** – Bloco de nível (wallet-hero: Nível 2, Explorador, progresso 2/250, barra), card de saldo (1.350), botões Trocar pontos e Meus cupons, histórico de movimentações.
- **carteira-recompensas.html** – Lista de recompensas (descontos) com custo em pontos, links para reivindicar.
- **carteira-reivindicar.html** – Tela de reivindicação da recompensa.
- **meus-cupons.html** – Lista de cupons do usuário.
- **meus-cupons-codigo.html** – Exibição do código do cupom.
- **cupom-resgatado.html** – Sucesso com código do cupom e botões.
- **ver-localizacao.html** – Tela de localização (conteúdo conforme implementado).

#### Médico (`medico/`)
- **home-medico.html** – Mensagem de boas-vindas, cards de acesso (Agenda, Histórico, Mensagens, Clientes) com `.home-welcome` e `.app-card`.
- **agenda-medico.html** – Calendário (calendar.js), busca, lista “Consultas do dia” e “Canceladas” (ids e textos atualizados conforme script do calendário).
- **clientes-medico.html** – Lista de clientes.
- **historico-medico.html** – Histórico do médico.
- **mensagens-medico.html** – Lista de conversas.
- **mensagens-chat-medico.html** – Chat do médico.
- **detalhes-consulta-medico.html** – Detalhes da consulta.
- **detalhes-consulta-cancelada-medico.html** – Detalhes da consulta cancelada.
- **detalhes-cliente.html** – Detalhes do cliente.
- **perfil-medico.html** – Perfil do médico.
- **menu-medico.html** – Menu com `.menu-list` e `.app-card`.
- **cancelamento-sucesso-medico.html** – Sucesso de cancelamento.
- **moedas-devolvidas-sucesso-medico.html** – Sucesso de moedas devolvidas.

---

## 2. Decisões e implementações importantes

### Tema e identidade visual
- Cores principais: teal (`#004C5F`), verde (`#00a878`), vermelho para ações destrutivas, laranja para pontos.
- Fundo em gradiente escuro; cards brancos; header e nav com gradiente teal.
- Fonte Inter (Google Fonts). Bordas arredondadas (16px / 12px). Sombras suaves.

### Carteira digital e gamificação
- Níveis com nome (ex.: Nível 1 – Iniciante, Nível 2 – Explorador).
- Barra de progresso “X / 250 pts no nível” e “Y pts para o próximo nível”.
- Saldo em destaque; botões Trocar pontos e Meus cupons; histórico com ícones (ganho/perda) e cores.
- Na home do paciente: bloco de nível (`.home-level`) e bloco de acesso à carteira (`.home-wallet-cta`) sem calendário na própria home.

### Selecionar médico
- **Calendário removido.** Exibe apenas a data escolhida (ex.: “Sexta-feira, 31 de outubro de 2025”) e o link “Alterar data” para a Agenda. Horários disponíveis e botão Confirmar mantidos.

### Animações
- Entrada: header (slideInDown), nav (slideInUp), conteúdo em cascata (fadeInUp com delays).
- Hover: cards e botões com translação e sombra suaves; nav com scale leve.
- Respeito a `prefers-reduced-motion` (durações mínimas quando “reduzir movimento” está ativo).

### Organização do CSS
- Estilos comuns em `common.css`; por contexto em `auth.css`, `paciente.css`, `medico.css`; animações em `animations.css`. Uma página só referencia `style.css`, que importa os demais.

### Código JavaScript
- **app.js**: funções nomeadas (aplicarMascaraCPF, aplicarMascaraTelefone, etc.) e comentários no topo descrevendo cada bloco.
- **calendar.js**: cabeçalho com uso e opções; lógica de calendário em `render` e `build`; API `CarePlusCalendar.init(id, options)`.

---

## 3. Onde alterar o quê

| Objetivo                    | Onde alterar                          |
|----------------------------|----------------------------------------|
| Cores, fontes, layout base | `src/assets/css/common.css`           |
| Telas de login/cadastro    | `src/assets/css/auth.css` + `auth/*.html` |
| Home e carteira paciente   | `src/assets/css/paciente.css` + `paciente/*.html` |
| Fluxo médico               | `src/assets/css/medico.css` + `medico/*.html` |
| Animações                  | `src/assets/css/animations.css`       |
| Máscaras, chat, slots      | `src/assets/js/app.js`                 |
| Calendário mensal          | `src/assets/js/calendar.js`           |

---

*Documentação gerada para o projeto Care Plus – Challenge FIAP.*
