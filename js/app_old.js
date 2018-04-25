$(function() {
  $('.title h1').addClass('ready');
  // calendar
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
      $('span.date-start').text(s1);
      $('span.date-end').text(s2);
    }
  });

  //filter search
  $('#slider-range').slider({
    range: true,
    min: 100,
    max: 600,
    values: [100, 600],
    slide: function(event, ui) {
      $('#range-price-min').val('$'+ui.values[0]);
      $('#range-price-max').val('$'+ui.values[1]);
    },
    stop: function(event, ui) {
      filterRange(ui.values[0], ui.values[1]);
    }
  });

  // filter rate
  $('#range-price-min').val('$'+  $('#slider-range').slider('values', 0));
  $('#range-price-max').val('$'+  $('#slider-range').slider('values', 1));

  let rateHtml = "< img src = 'img/star-filled.svg'  alt = 'star-filled' / >" ;

  $('#search-hotel').click(function(event) {
    event.preventDefault();
    if ($(input# date - checkin).val() != '' && $(input# date - checkout).val() != '') {
      $(section.result).show();
      $.ajax({
        url: 'hotels.json',
        success: function(data) {
          listResult(data.hotels);
        }
      });
    }
  });

  $(input[name = 'stars']).change(function() {
    let rateSelected = [];
    $(input[name = 'stars']: checked).each(function() {
      rateSelected.push($(this).val());
    });
    $.ajax({
      url: 'hotels.json',
      success: function(data) {
        let filtered = data.hotels.filter((obj) => rateSelected.includes(String(obj.rate)));
        listResult(filtered);
      }
    });
  });

  let filterRange = (min, max) => {
    $.ajax({
      url: 'hotels.json',
      success: function(data) {
        let filtered = data.hotels.filter((obj) => obj.price >= min && obj.price <= max);
        listResult(filtered);
      }
    });
  };

  let listResult = (data) => {
    $('.list-result').empty();
    $.each(data, function(key, value) {
      let boxItem = `<div class='box-item col-md-offset-2'>
                      <div class='col-md-2 col-xs-12'>
                          <div class='wrapper-img'>
                            <a href='#'>
                              <img src='${value.image}' alt='${value.name}'>
                            </a>
                          </div>
                        </div>
                        <div class='col-md-7 col-sm-8 col-xs-12 border-right'>
                          <div class='stars'>
                            ${rateHtml.repeat(value.rate)}
                          </div>
                          <h1 class='hotel-name'><a href='#'>${value.name}</a></h1>
                          <p class='description'>${value.description}</p>
                          <button class='book-now button-default'>Book now</button>
                          <button class='price-history button-primary'>Price history</button>
                        </div>
                        <div class='col-md-3 col-sm-4 col-xs-12 text-right'>
                          <div class='values'>
                            <p class='title-sale'>Total <b> 8 nights</b></p>
                            <p class='value-sale'>$670</p>
                            <p class='title-normal'>Per night</p>
                            <p class='value-normal'>$${value.price}</p>
                          </div>
                      </div>
                      <div class='clearfix'></div>
                    </div>`;
      $('.list-result').append(boxItem);
    });
  };

});
