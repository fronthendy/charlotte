$(function() {
  $('.title h1').addClass('ready');

  let minPrice = 0;
  let maxPrice = 600;
  let rateSelected = ["1", "2", "3", "4", "5"];
  let dateCheckin;
  let dateCheckout;
  let daysSelected;

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
      dateCheckin = new Date(s1+"T00:00:00");
      dateCheckout = new Date(s2+"T00:00:00");;
    }
  });

  $('#slider-range').slider({
    range: true,
    min: 100,
    max: 600,
    values: [100, 600],
    slide: function(event, ui) {
      $('#range-price-min').val('$' + ui.values[0]);
      $('#range-price-max').val('$' + ui.values[1]);
    },
    stop: function(event, ui) {
      minPrice = ui.values[0];
      maxPrice = ui.values[1];
      filterHotels(minPrice, maxPrice, rateSelected);
    }
  });

  $('#range-price-min').val('$' + $('#slider-range').slider('values', 0));
  $('#range-price-max').val('$' + $('#slider-range').slider('values', 1));

  let rateHtml = "<img src='img/star-filled.svg' alt='star-filled' />";

  $('#search-hotel').click(function(event) {
    event.preventDefault();
    if ($("input#date-checkin").val() != '' && $("input#date-checkout").val() != '') {
      $("section.result").show();
      $.ajax({
        url: 'hotels.json',
        success: function(data) {
          listResult(data.hotels);
          $('html, body').animate({
            scrollTop: ($('#wrapper-result').offset().top)
          }, 500);
        }
      });
    }
    daysSelected = Math.round(Math.abs((dateCheckout.getTime() - dateCheckin.getTime())/(24*60*60*1000)))
    console.log(daysSelected);
  });

  $("input[name='stars']").change(function() {
    let rateSelected = [];
    $("input[name='stars']:checked").each(function() {
      rateSelected.push($(this).val());
    });
    filterHotels(minPrice, maxPrice, rateSelected);
  });

  let filterHotels = (min, max, rateSelected) => {
    $.ajax({
      url: 'hotels.json',
      success: function(data) {
        let filtered = data.hotels.filter((obj) => obj.price >= min && obj.price <= max && rateSelected.includes(String(obj.rate)));
        listResult(filtered);
      }
    });
  };

  let priceHistoryChart = (idCanvas, history) => {
    let canvas = document.getElementById(idCanvas);
    canvas = canvas.getContext('2d');
    let months = history.map((obj) => obj.month);
    let price = history.map((obj) => obj.value);

    let purpleOrangeGradient = canvas.createLinearGradient(0, 0, 0, 600);
    purpleOrangeGradient.addColorStop(0, '#fbb366');
    purpleOrangeGradient.addColorStop(1, '#f4a990');

    let purpleOrangeGradientHover = canvas.createLinearGradient(0, 0, 0, 600);
    purpleOrangeGradientHover.addColorStop(0, '#f98101');
    purpleOrangeGradientHover.addColorStop(1, '#ef7140');

    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                data: price,
                backgroundColor: purpleOrangeGradient,
    						hoverBackgroundColor: purpleOrangeGradientHover
            }]
        },

        options: {
          legend: {
            display: false
          },
          scales: {
						xAxes: [{
							gridLines: {
                display: false
              }
						}],
						yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
						}]
					},
          tooltips: {
              callbacks: {
                  label: function(tooltipItem, data) {
                      return "$"+tooltipItem.yLabel;
                  }
              }
          }

        }
    });
  };

  let listResult = (data) => {
    $('.list-result').empty();
    if(data.length > 0){
      $.each(data, function(key, value) {

        let boxItem = `<div class='box-item col-md-offset-2' id="${key}">
                        <div class='col-md-2 col-sm-8 col-xs-7 xxs-12 pull-left'>
                            <div class='wrapper-img'>
                              <a href='#'>
                                <img src='${value.image}' alt='${value.name}'>
                              </a>
                            </div>
                          </div>
                          <div class='col-md-3 col-sm-4 col-xs-5 xxs-12 text-right pull-right'>
                          <div class='values'>
                            <div class="row">
                              <div class="col-xs-12 xxs-6">
                              <p class='title-sale'>Total <b> ${daysSelected} nights</b></p>
                              <p class='value-sale'>$${(daysSelected*value.price).toFixed(1)}</p>
                              </div>
                              <div class="col-xs-12 xxs-6">
                              <p class='title-normal'>Per night</p>
                              <p class='value-normal'>$${value.price}</p>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div class='col-md-7 col-sm-12 col-xs-12 border-rightpull-right'>
                            <div class='stars'>
                              ${rateHtml.repeat(value.rate)}
                            </div>
                            <h1 class='hotel-name'><a href='#'>${value.name}</a></h1>
                            <p class='description'>${value.description}</p>
                            <button class='book-now button-default'>Book now</button>
                            <button class='price-history button-primary'  data-toggle="collapse" data-target="#history-${key}">Price history</button>
                          </div>
                          <div class="col-xs-12 col-md-offset-2 col-md-10 collapse" id="history-${key}">
                              <p class="canvas-title">Price history for 2017</p>
                                <canvas id="chart-${key}" width="100%" height="30"></canvas>
                          </div>
                        <div class='clearfix'></div>
                      </div>`;
        $('.list-result').append(boxItem);
              priceHistoryChart("chart-"+key, value.price_history);
      });
    }else {
      $('.list-result').append(`<div class="alert text-center" role="alert">Ops, did not match any hotel!</div>`);
    }
  };

  $(".arrow-collapse").on('click', function(e) {
    e.preventDefault();
  });


});
