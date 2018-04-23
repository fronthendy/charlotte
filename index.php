<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="css/daterangepicker.min.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="css/style.css">
  <title>Charlotte</title>
</head>

<body>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li><a href="#">The Queen city</a></li>
          <li><a href="#">My Reservations</a></li>
          <li><a href="#">Guide</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="title text-center">
        <img class="svg" src="img/crown.svg" alt="Crown" />
        <p class="sub-title">WELCOME TO</p>
        <h1>CHARLOTTE</h1>
        <p class="sub-title">THE QUEEN CITY</p>
      </div>
    </section>
    <section class="search">
      <div class="box-white">
        <h2>Select the dates to stay in Charlotte</h2>
        <form class="form-search-hotel">
          <div class="row">
            <div class="col-md-6">
              <label for="date-checkin">CHECK-IN</label>
              <input type="text" name="date-checkin" id="date-checkin" placeholder="Choose a date">
              <label for="date-checkout">CHECK-OUT</label>
              <input type="text" name="date-checkout" id="date-checkout" placeholder="Choose a date">
              <button class="button-primary">Search hotels</button>
            </div>
            <div class="col-md-6">
              <div id="date-range-container"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </section>
    <section class="result">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-center">
            <h2>Best choices between <span class="date-start"></span> and <span class="date-end"></span></h2>
          </div>
          <div class="col-md-3 col-xs-12">
            <form id="search-filter">
                <fieldset>
                  <legend>Filters</legend>
                  <div class="input-group">
                    <label>Price Range per <b>night</b></label>
                    <div class="col-xs-12">
                      <div id="slider-range"></div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6 text-left">
                        <label class="pull-left">Min</label>
                        <input type="text" id="range-price-min" class="range-price pull-left text-left" name="range-price-min" disabled>
                      </div>
                      <div class="col-xs-6 text-right">
                        <label class="pull-right">Max</label>
                        <input type="text" id="range-price-max" class="range-price pull-right text-right" name="range-price-max" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="input-group">
                    <label>Stars</label>
                    <label for="stars-1" class="filter-stars">
                      <input type="checkbox" name="stars" id="stars-1">
                      <span class="checkmark"></span>
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                    </label>
                    <label for="stars-2" class="filter-stars">
                      <input type="checkbox" name="stars" id="stars-2">
                      <span class="checkmark"></span>
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                    </label>
                    <label for="stars-3" class="filter-stars">
                      <input type="checkbox" name="stars" id="stars-3">
                      <span class="checkmark"></span>
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                    </label>
                    <label for="stars-4" class="filter-stars">
                      <input type="checkbox" name="stars" id="stars-4">
                      <span class="checkmark"></span>
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-outline.svg" alt="star-outline" />
                    </label>
                    <label for="stars-5" class="filter-stars">
                      <input type="checkbox" name="stars" id="stars-5">
                      <span class="checkmark"></span>
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                      <img src="img/star-filled.svg" alt="star-filled" />
                    </label>
                  </div>
                </fieldset>
              </form>
          </div>
          <div class="col-md-9 col-xs-12">
            <div class="list-result">
              <div class="box-item col-md-offset-2">
                <div class="col-md-2 col-xs-12">
                  <div class="wrapper-img">
                    <a href="#">
                      <img src="img/hotel-example.jpg" alt="Hyatt Place Charlotte Airport/Lake Pointe">
                    </a>
                  </div>
                </div>
                <div class="col-md-7 col-sm-8 col-xs-12 border-right">
                  <div class="stars">
                    <img src="img/star-filled.svg" alt="star-filled" />
                    <img src="img/star-filled.svg" alt="star-filled" />
                    <img src="img/star-filled.svg" alt="star-filled" />
                  </div>
                  <h1 class="hotel-name"><a href="#">Hyatt Place Charlotte Airport/Lake Pointe</a></h1>
                  <p class="description">This hotel is located 7 miles from downtown Charlotte and 5 miles from Charlotte Douglas International Airport.</p>
                  <button class="book-now button-default">Book now</button>
                  <button class="price-history button-primary">Price history</button>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12 text-right">
                <div class="values">
                  <p class="title-sale">Total <b> 8 nights</b></p>
                  <p class="value-sale">$670</p>
                  <p class="title-normal">Per night</p>
                  <p class="value-normal">$670</p>
                </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <nav class="social-links">
        <ul>
          <li>
            <a href="#">
              <img class="svg" src="img/facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="svg" src="img/twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="svg" src="img/instagram.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
      </nav>
      <p>© 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</p>
    </div>
  </footer>
  <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script src="js/jquery.daterangepicker.min.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <script src="js/app.js"></script>
</body>

</html>
