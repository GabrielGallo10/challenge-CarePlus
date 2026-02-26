# Care Plus – Challenge FIAP

Aplicação web **HTML, CSS, Bootstrap 5 e JavaScript** que simula o app Care Plus (Part of Bupa), com fluxos de **paciente** e **médico**, autenticação, agenda, mensagens e carteira digital com gamificação.

---

## Estrutura do projeto

```
Challenge/
├── index.html                    # Redireciona para o login
├── README.md                     # Este arquivo
├── DOCUMENTACAO.md               # Registro do que foi implementado
└── src/
    └── assets/
        ├── css/
        │   ├── style.css         # Entry point (importa os demais)
        │   ├── common.css        # Tema, layout, componentes globais
        │   ├── animations.css    # Animações e transições
        │   ├── auth.css          # Telas de login/cadastro
        │   ├── paciente.css      # Home, carteira, nível, etc.
        │   ├── medico.css        # Fluxo médico
        │   └── README.md         # Documentação dos estilos
        ├── js/
        │   ├── app.js            # Máscaras, toggle, slots, chat
        │   └── calendar.js       # Calendário mensal reutilizável
        └── pages/
            ├── auth/             # login, cadastro, esqueci-senha
            ├── paciente/         # Telas do paciente
            └── medico/            # Telas do médico
```

Todas as páginas HTML usam `../../css/style.css` e, quando necessário, `../../js/app.js` e `../../js/calendar.js`.

---

## Como rodar

1. Abra a **pasta do projeto** como raiz (ex.: Live Server no VS Code apontando para `Challenge/`).
2. Acesse `index.html` na raiz: ele redireciona para `src/assets/pages/auth/login.html`.
3. Para simular mobile, use F12 e ative o modo responsivo.

**Importante:** as páginas usam caminhos relativos (`../../css/`, `../../js/`). O servidor deve ter a pasta do projeto como raiz para os links entre páginas funcionarem.

---

## Tecnologias

- **HTML5**
- **CSS3** (variáveis, Flexbox, Grid, animações, `prefers-reduced-motion`)
- **Bootstrap 5** (CDN) – grid, utilitários, componentes
- **Bootstrap Icons** (CDN)
- **JavaScript** (vanilla) – sem frameworks

---

## Funcionalidades implementadas

- **Autenticação:** login, cadastro (Paciente/Médico), esqueci senha.
- **Paciente:** home com nível e carteira, agenda com calendário, marcar consulta, selecionar médico (data fixa + horários), confirmar, detalhes, cancelar, mensagens (lista e chat), histórico, ajuda, perfil, menu. Carteira digital com níveis, pontos, recompensas, cupons.
- **Médico:** home, agenda com calendário, clientes, histórico, mensagens, perfil, menu, detalhes de consulta e de cliente, cancelamento e sucesso.
- **Calendário:** componente reutilizável em `agenda.html` e `agenda-medico.html` (ver `calendar.js`).
- **Máscaras:** CPF e telefone em inputs com `data-mask="cpf"` e `data-mask="telefone"` (ver `app.js`).
- **Chat:** envio de mensagem com bolha e hora (ver `app.js`).

Detalhes de cada tela e decisões de implementação estão em **DOCUMENTACAO.md**.
