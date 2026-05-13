# Care Plus – Challenge FIAP (Sprint 2)

Aplicação web **HTML, CSS, Bootstrap 5 e JavaScript** que simula o app Care Plus (Part of Bupa), com fluxos completos de **paciente** e **médico**, autenticação, agenda, mensagens, notificações e carteira digital com gamificação.

---

## Estrutura do projeto

```
challenge-care-plus-sprint2/
├── index.html                           # Redireciona para o login
├── README.md                            # Este arquivo
│
├── assets/                              # Código-fonte principal
│   ├── css/
│   │   ├── style.css                    # Entry point (importa os demais)
│   │   ├── common.css                   # Tema, layout, componentes globais
│   │   ├── animations.css               # Animações e transições
│   │   ├── auth.css                     # Telas de login/cadastro
│   │   ├── paciente.css                 # Home, carteira, nível, cupons
│   │   └── medico.css                   # Dashboard, agenda, clientes, perfil médico
│   ├── js/
│   │   ├── app.js                       # Máscaras, validação, toggle, slots, chat
│   │   └── calendar.js                  # Calendário mensal reutilizável
│   └── pages/
│       ├── auth/                        # Login, cadastro, esqueci senha
│       │   ├── index.html               # Redirect para login
│       │   ├── login.html
│       │   ├── cadastro.html
│       │   └── esqueci-senha.html
│       ├── paciente/                    # 22 telas do paciente
│       │   ├── home-paciente.html
│       │   ├── agenda.html
│       │   ├── marcar-consulta.html
│       │   ├── selecionar-medico.html
│       │   ├── confirmar-consulta.html
│       │   ├── consulta-agendada.html
│       │   ├── detalhes-consulta.html
│       │   ├── cancelar-consulta.html
│       │   ├── cancelado-sucesso.html
│       │   ├── mensagens.html
│       │   ├── mensagens-chat.html
│       │   ├── historico-paciente.html
│       │   ├── ajuda.html
│       │   ├── perfil-paciente.html
│       │   ├── menu-paciente.html
│       │   ├── notificacoes.html
│       │   ├── carteira-digital.html
│       │   ├── carteira-recompensas.html
│       │   ├── carteira-reivindicar.html
│       │   ├── meus-cupons.html
│       │   ├── meus-cupons-codigo.html
│       │   ├── cupom-resgatado.html
│       │   └── ver-localizacao.html
│       └── medico/                      # 13 telas do médico
│           ├── home-medico.html
│           ├── agenda-medico.html
│           ├── clientes-medico.html
│           ├── historico-medico.html
│           ├── mensagens-medico.html
│           ├── mensagens-chat-medico.html
│           ├── detalhes-consulta-medico.html
│           ├── detalhes-consulta-cancelada-medico.html
│           ├── detalhes-cliente.html
│           ├── perfil-medico.html
│           ├── menu-medico.html
│           ├── cancelamento-sucesso-medico.html
│           ├── moedas-devolvidas-sucesso.html
│           └── notificacoes-medico.html
│
└── src/
    ├── docs/
    │   ├── DOCUMENTACAO.md              # Registro detalhado do que foi implementado
    │   └── STYLE.md                     # Guia de estilos CSS
    └── assets/                          # Versão anterior (referência)
```

Todas as páginas HTML usam `../../css/style.css` e, quando necessário, `../../js/app.js` e `../../js/calendar.js`.

---

## Como rodar

1. Abra a **pasta do projeto** como raiz (ex.: Live Server no VS Code apontando para a raiz).
2. Acesse `index.html`: ele redireciona automaticamente para `assets/pages/auth/login.html`.
3. Para simular mobile, use **F12** e ative o modo responsivo (recomendado: 390 x 844 px).

> As páginas usam caminhos relativos (`../../css/`, `../../js/`). O servidor deve ter a pasta do projeto como raiz para os links entre páginas funcionarem.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | — | Marcação semântica em todas as páginas |
| **CSS3** | — | Custom properties, Flexbox, Grid, animações, `prefers-reduced-motion` |
| **Bootstrap** | 5.3.2 (CDN) | Grid, utilitários, componentes (accordion, forms) |
| **Bootstrap Icons** | 1.11.3 (CDN) | Iconografia em todas as telas |
| **JavaScript** | Vanilla (ES5) | Sem frameworks ou bundlers |
| **Google Fonts** | Inter (400–700) | Tipografia principal |

Projeto 100% estático — sem build tools, sem `package.json`, sem dependências locais.

---

## Funcionalidades implementadas

### Autenticação
- Login com CPF e senha, login social (Google/Facebook).
- Cadastro com toggle **Paciente / Médico** (campos específicos de médico aparecem dinamicamente).
- Recuperação de senha com feedback visual de sucesso.
- Toggle de visibilidade de senha (ícone de olho).

### Paciente (22 telas)
- **Home:** boas-vindas, nível e pontos, grid de funcionalidades, acesso rápido à carteira digital.
- **Agenda:** calendário mensal interativo (`calendar.js`), consultas do dia, botão para marcar consulta.
- **Marcar consulta:** busca de médicos, seleção de horário (data fixa + grid de slots), confirmação com resumo.
- **Detalhes e cancelamento:** visualização da consulta, fluxo de cancelamento com tela de sucesso.
- **Mensagens:** lista de conversas e chat com envio de mensagens em tempo real (bolhas + hora).
- **Histórico:** busca/filtro, agrupamento por período, pontos ganhos por consulta.
- **Notificações:** central com categorias (Hoje, Ontem, Esta semana), tipos variados (lembrete, pontos, mensagem, nível, cancelamento, cupom).
- **Carteira digital:** nível com nome e barra de progresso, saldo em destaque, trocar pontos, recompensas, cupons com código.
- **Ajuda:** FAQ em accordion, card de contato (telefone, WhatsApp).
- **Perfil e menu:** edição de dados pessoais, navegação completa.

### Médico (13 telas)
- **Home:** dashboard com cards de estatísticas (consultas hoje, pacientes, cancelamentos, avaliação), próxima consulta, acesso rápido.
- **Agenda:** calendário mensal, busca, consultas do dia e canceladas com badges de status (confirmada/cancelada/pendente).
- **Clientes:** lista de pacientes com busca, detalhes do cliente com histórico e contato.
- **Mensagens:** lista de conversas e chat.
- **Histórico:** consultas passadas com filtro.
- **Notificações:** central de notificações do médico.
- **Perfil e menu:** avatar com botão de edição, CRM, especialidade, navegação com header personalizado.
- **Cancelamento:** fluxo de cancelamento com tela de sucesso e devolução de moedas.

### Componentes reutilizáveis
- **Calendário:** componente `CarePlusCalendar` com navegação mensal e callback `onSelect` (`calendar.js`).
- **Máscaras:** CPF (`xxx.xxx.xxx-xx`) e telefone em inputs via `data-mask` (`app.js`).
- **Validação de formulários:** campos `[required]` com feedback visual `is-invalid` / `is-valid`.
- **Feedback em botões:** animação de escala ao clicar em botões de ação.
- **Scroll suave:** navegação interna com âncoras.

### Animações e acessibilidade
- Entrada: header (slideInDown), nav (slideInUp), conteúdo em cascata (fadeInUp com delays).
- Hover: cards e botões com translação e sombra suaves.
- Respeita `prefers-reduced-motion` (durações reduzidas quando ativo).

---

## Documentação

Detalhes de cada tela, decisões de design e tabela de referência rápida estão em `src/docs/DOCUMENTACAO.md`.
