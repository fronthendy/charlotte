$(function() {
  $(document).ready(function() {
    $('.title h1').addClass('ready');
  });

  $.dateRangePickerLanguages['custom'] = {
    'week-1': 'M',
    'week-2': 'T',
    'week-3': 'W',
    'week-4': 'T',
    'week-5': 'F',
    'week-6': 'S',
    'week-7': 'S',
    'month-name': ['January /', 'February /', 'March /', 'April /', 'May /', 'June /', 'July /', 'August /', 'September /', 'October /', 'November /', 'December /'],
  };

  $('#date-range-container').dateRangePicker({
    inline: true,
    container: '#date-range-container',
    alwaysOpen: true,
    singleMonth: true,
    showShortcuts: false,
    showTopbar: false,
    language: 'custom',
    setValue: function(s, s1, s2) {
      $('#date-checkin').val(s1);
      $('#date-checkout').val(s2);
      $('.form-search-hotel button').addClass('ready');
    }
  });

  $("#slider-range").slider({
    range: true,
    min: 100,
    max: 600,
    values: [100, 600],
    slide: function(event, ui) {
      $("#range-price-min").val("$" + ui.values[0]);
      $("#range-price-max").val("$" + ui.values[1]);
    }
  });

  $("#range-price-min").val("$" + $("#slider-range").slider("values", 0));
    $("#range-price-max").val("$" + $("#slider-range").slider("values", 1));
});
