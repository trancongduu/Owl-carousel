$(document).ready(function() {   $(.projects_collection_list).owlCarousel({     items: 3,     margin: 20,     loop: true,     autoplay: true,     autoplayTimeout: 3000,     autoplayHoverPause: true,     nav: true,     dots: true,     responsive: {       0: {         items: 1,       },       600: {         items: 2,       },       1000: {         items: 3,       }     }   }); });