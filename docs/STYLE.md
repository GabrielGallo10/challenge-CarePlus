# Estilos – Care Plus

Os estilos estão divididos em arquivos por contexto. Todas as páginas linkam apenas **style.css**, que importa os demais.

---

## Arquivos

| Arquivo | Conteúdo |
|--------|----------|
| **style.css** | Ponto de entrada. Importa: common, animations, auth, paciente, medico. |
| **common.css** | Variáveis do tema, body, header, nav inferior, botões, cards, logo, formulários (bg-careplus), badge, barra de pontos, success-check, slot-grid, date-strip, main-container, utilitários, avatar, calendário. Inclui também: screen-title, section-title, app-card, feature-card, consult-card, form-card. |
| **animations.css** | Keyframes e variáveis de duração/easing. Animações de entrada (header, nav, conteúdo em cascata). Transições em cards, botões, barra, badge, success-check, nav. Respeita `prefers-reduced-motion`. |
| **auth.css** | Layout centralizado (page-auth), logo em branco, auth-card, btn-social, auth-links, auth-toggle (Paciente/Médico). |
| **paciente.css** | home-welcome, home-level (nível do usuário), home-wallet-cta (acesso à carteira na home), menu-list, profile-header, carteira digital (wallet-hero, nível, saldo, progresso, histórico, recompensas). |
| **medico.css** | Estilos específicos do fluxo médico (reservado para customizações). |

---

## Onde mudar

- **Cores e layout global** → `common.css` (variáveis `:root` e blocos de layout).
- **Telas de login/cadastro** → `auth.css` e páginas em `pages/auth/`.
- **Carteira e gamificação** → `paciente.css` (classes `wallet-*`, `home-level`, `home-wallet-cta`).
- **Animações** → `animations.css`.
- **Telas do médico** → `medico.css` e páginas em `pages/medico/`.
