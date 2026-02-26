/**
 * Care Plus - Calendário mensal reutilizável
 *
 * Uso:
 *   1. Inclua um <div id="meu-calendario"></div> na página.
 *   2. Chame: CarePlusCalendar.init('meu-calendario', { ... opções ... });
 *
 * Opções:
 *   - initialYear: número (ex.: 2025)
 *   - initialMonth: 0-11 (0 = janeiro)
 *   - initialDate: string 'YYYY-MM-DD' para dia inicial selecionado
 *   - onSelect: function(date) {} chamada ao clicar em um dia
 *
 * Usado em: agenda.html (paciente), agenda-medico.html (médico).
 */
var CarePlusCalendar = (function () {
  var MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var DIAS_SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  function getDaysInMonth(y, m) {
    var first = new Date(y, m, 1);
    var last = new Date(y, m + 1, 0);
    return { days: last.getDate(), startWeekday: first.getDay() };
  }

  function render(containerId, options) {
    options = options || {};
    var container = document.getElementById(containerId);
    if (!container) return null;

    var state = {
      year: options.initialYear != null ? options.initialYear : new Date().getFullYear(),
      month: options.initialMonth != null ? options.initialMonth : new Date().getMonth(),
      selectedDate: options.initialDate ? new Date(options.initialDate) : null,
      onSelect: options.onSelect || function () {}
    };

    function build() {
      var y = state.year;
      var m = state.month;
      var info = getDaysInMonth(y, m);
      var html = '';

      html += '<div class="careplus-calendar">';
      html += '  <div class="calendar-header">';
      html += '    <button type="button" class="calendar-nav calendar-prev" aria-label="Mês anterior"><i class="bi bi-chevron-left"></i></button>';
      html += '    <span class="calendar-title">' + MESES[m] + ' ' + y + '</span>';
      html += '    <button type="button" class="calendar-nav calendar-next" aria-label="Próximo mês"><i class="bi bi-chevron-right"></i></button>';
      html += '  </div>';
      html += '  <div class="calendar-weekdays">';
      for (var i = 0; i < 7; i++) html += '<span class="calendar-weekday">' + DIAS_SEMANA[i] + '</span>';
      html += '  </div>';
      html += '  <div class="calendar-days">';

      for (var e = 0; e < info.startWeekday; e++) html += '<span class="calendar-day calendar-day-empty"></span>';
      for (var d = 1; d <= info.days; d++) {
        var isSelected = state.selectedDate && state.selectedDate.getFullYear() === y && state.selectedDate.getMonth() === m && state.selectedDate.getDate() === d;
        var today = new Date();
        var isToday = today.getFullYear() === y && today.getMonth() === m && today.getDate() === d;
        var cls = 'calendar-day';
        if (isSelected) cls += ' calendar-day-selected';
        if (isToday) cls += ' calendar-day-today';
        html += '<button type="button" class="' + cls + '" data-date="' + y + '-' + (m + 1) + '-' + d + '">' + d + '</button>';
      }
      html += '  </div>';
      html += '</div>';

      container.innerHTML = html;

      container.querySelector('.calendar-prev').addEventListener('click', function () {
        if (state.month === 0) { state.year--; state.month = 11; } else state.month--;
        build();
      });
      container.querySelector('.calendar-next').addEventListener('click', function () {
        if (state.month === 11) { state.year++; state.month = 0; } else state.month++;
        build();
      });
      container.querySelectorAll('.calendar-day[data-date]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var parts = btn.getAttribute('data-date').split('-');
          state.selectedDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
          state.onSelect(state.selectedDate);
          build();
        });
      });

      return state;
    }

    build();
    return state;
  }

  return { init: render, render: render };
})();
