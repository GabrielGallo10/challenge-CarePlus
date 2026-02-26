/**
 * Care Plus - Comportamento dinâmico da aplicação
 * Responsável por: máscaras de input, toggle cadastro, seleção de horários/datas e chat.
 */

document.addEventListener('DOMContentLoaded', function () {
  aplicarMascaraCPF();
  aplicarMascaraTelefone();
  configurarTogglePacienteMedico();
  configurarSelecaoSlots();
  configurarSelecaoDateStrip();
  configurarChat();
});

/**
 * Máscara de CPF (xxx.xxx.xxx-xx) em inputs com data-mask="cpf"
 */
function aplicarMascaraCPF() {
  document.querySelectorAll('input[data-mask="cpf"]').forEach(function (input) {
    input.addEventListener('input', function (e) {
      var v = e.target.value.replace(/\D/g, '');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = v;
    });
  });
}

/**
 * Máscara de telefone ((xx) xxxxx-xxxx ou (xx) xxxx-xxxx) em inputs com data-mask="telefone"
 */
function aplicarMascaraTelefone() {
  document.querySelectorAll('input[data-mask="telefone"]').forEach(function (input) {
    input.addEventListener('input', function (e) {
      var v = e.target.value.replace(/\D/g, '');
      if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      else v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      e.target.value = v;
    });
  });
}

/**
 * Toggle Paciente / Médico na tela de cadastro (ids: btn-tipo-paciente, btn-tipo-medico)
 */
function configurarTogglePacienteMedico() {
  var btnPaciente = document.getElementById('btn-tipo-paciente');
  var btnMedico = document.getElementById('btn-tipo-medico');
  if (!btnPaciente || !btnMedico) return;
  btnPaciente.addEventListener('click', function () {
    btnPaciente.classList.add('active');
    btnMedico.classList.remove('active');
  });
  btnMedico.addEventListener('click', function () {
    btnMedico.classList.add('active');
    btnPaciente.classList.remove('active');
  });
}

/**
 * Seleção única de horário em .slot-grid (um botão .active por grid)
 */
function configurarSelecaoSlots() {
  document.querySelectorAll('.slot-grid').forEach(function (grid) {
    grid.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        grid.querySelectorAll('.btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  });
}

/**
 * Seleção única de data em .date-strip .date-item (um .active por strip)
 */
function configurarSelecaoDateStrip() {
  document.querySelectorAll('.date-strip .date-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var strip = item.closest('.date-strip');
      if (strip) strip.querySelectorAll('.date-item').forEach(function (i) { i.classList.remove('active'); });
      item.classList.add('active');
    });
  });
}

/**
 * Envio de mensagem no chat (form-chat, input-mensagem, lista-mensagens).
 * Adiciona bolha à direita com texto e hora e faz scroll para o fim.
 */
function configurarChat() {
  var form = document.getElementById('form-chat');
  var input = document.getElementById('input-mensagem');
  var lista = document.getElementById('lista-mensagens');
  if (!form || !input || !lista) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var texto = input.value.trim();
    if (!texto) return;

    var bubble = document.createElement('div');
    bubble.className = 'd-flex justify-content-end mb-2';
    bubble.innerHTML = '<div class="rounded-3 px-3 py-2 d-inline-block" style="background: var(--careplus-teal); color: #fff;"><span>' + escapeHtml(texto) + '</span><small class="d-block opacity-75">' + formatarHora(new Date()) + '</small></div>';
    lista.appendChild(bubble);
    input.value = '';
    lista.scrollTop = lista.scrollHeight;
  });
}

function escapeHtml(s) {
  var div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function formatarHora(d) {
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}
