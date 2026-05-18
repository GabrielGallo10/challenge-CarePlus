/**
 * Care Plus - Comportamento dinâmico da aplicação
 * Máscaras, toggles, seleção de horários, chat, validação e interações modernas.
 */

document.addEventListener('DOMContentLoaded', function () {
  aplicarMascaraCPF();
  aplicarMascaraTelefone();
  configurarTogglePacienteMedico();
  configurarSelecaoSlots();
  configurarSelecaoDateStrip();
  configurarChat();
  configurarValidacaoFormularios();
  configurarToggleSenha();
  configurarFeedbackBotoes();
  configurarScrollSuave();
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
 * Máscara de telefone ((xx) xxxxx-xxxx ou (xx) xxxx-xxxx)
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
 * Toggle Paciente / Médico na tela de cadastro
 */
function configurarTogglePacienteMedico() {
  var btnPaciente = document.getElementById('btn-tipo-paciente');
  var btnMedico = document.getElementById('btn-tipo-medico');
  var camposMedico = document.getElementById('campos-medico');
  var btnCriarConta = document.getElementById('btn-criar-conta');

  if (!btnPaciente || !btnMedico) return;

  btnPaciente.addEventListener('click', function () {
    btnPaciente.classList.add('active');
    btnMedico.classList.remove('active');
    if (camposMedico) camposMedico.style.display = 'none';
    if (btnCriarConta) btnCriarConta.setAttribute('data-destino', '../paciente/home-paciente.html');
  });

  btnMedico.addEventListener('click', function () {
    btnMedico.classList.add('active');
    btnPaciente.classList.remove('active');
    if (camposMedico) camposMedico.style.display = 'block';
    if (btnCriarConta) btnCriarConta.setAttribute('data-destino', '../medico/home-medico.html');
  });

  if (btnCriarConta) {
    btnCriarConta.addEventListener('click', function () {
      var destino = btnCriarConta.getAttribute('data-destino') || '../paciente/home-paciente.html';
      window.location.href = destino;
    });
  }
}

/**
 * Seleção única de horário em .slot-grid
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
 * Seleção única de data em .date-strip .date-item
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
 * Envio de mensagem no chat
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
    bubble.style.animation = 'fadeInUp 0.3s ease both';
    bubble.innerHTML = '<div class="rounded-3 px-3 py-2 d-inline-block" style="background: var(--careplus-teal); color: #fff; max-width: 80%;"><span>' + escapeHtml(texto) + '</span><small class="d-block opacity-75 mt-1">' + formatarHora(new Date()) + '</small></div>';
    lista.appendChild(bubble);
    input.value = '';
    lista.scrollTop = lista.scrollHeight;
  });
}

/**
 * Validação básica de formulários obrigatórios
 */
function configurarValidacaoFormularios() {
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var invalido = false;
      form.querySelectorAll('[required]').forEach(function (campo) {
        if (!campo.value.trim()) {
          campo.classList.add('is-invalid');
          invalido = true;
        } else {
          campo.classList.remove('is-invalid');
          campo.classList.add('is-valid');
        }
      });
      if (invalido) e.preventDefault();
    });

    form.querySelectorAll('[required]').forEach(function (campo) {
      campo.addEventListener('input', function () {
        if (campo.value.trim()) {
          campo.classList.remove('is-invalid');
          campo.classList.add('is-valid');
        }
      });
    });
  });
}

/**
 * Toggle de visibilidade da senha em inputs password com botão .toggle-senha
 */
function configurarToggleSenha() {
  document.querySelectorAll('.toggle-senha').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.input-group').querySelector('input');
      var icon = btn.querySelector('i');
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        if (icon) { icon.classList.remove('bi-eye'); icon.classList.add('bi-eye-slash'); }
      } else {
        input.type = 'password';
        if (icon) { icon.classList.remove('bi-eye-slash'); icon.classList.add('bi-eye'); }
      }
    });
  });
}

/**
 * Feedback visual ao clicar em botões de ação principal
 */
function configurarFeedbackBotoes() {
  document.querySelectorAll('.btn-success-careplus, .btn-danger-careplus').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.style.transform = 'scale(0.97)';
      setTimeout(function () { btn.style.transform = ''; }, 150);
    });
  });
}

/**
 * Scroll suave para links internos
 */
function configurarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
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
