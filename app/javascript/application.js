// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"
//= require jquery.flexslider
//= require jquery.flexslider-min
$(document).ready(function(){
    $('.flexslider').flexslider();
});

$(document).on("turbolinks:load", function() {
    $('.flexslider').flexslider();
});