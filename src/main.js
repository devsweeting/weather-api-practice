// import { Weather } from './weather';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    console.log(city);
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd23a7e1b7fed88d4e84030b2b680a35`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

  $('#randomBeer').click(function() {
    $.ajax({
      url: `https://api.punkapi.com/v2/beers/random`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showBeer').text(`Your random beer is ${response[0].name}`);
        $('.showDescription ').text(`With an APV of ${response[0].abv}. ${response[0].description}`);
        console.log(response[0].name);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
