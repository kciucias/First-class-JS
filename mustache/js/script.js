(function() { 

'use strict';

//carousel
var flkty = new Flickity('.main-carousel', {
	pageDots: false, 
	wrapAround: true,
	cellAlign: "left",
	contain: true
});

// progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

//mustache
var templateSlide = document.getElementById('template-slide').innerHTML;
//var templateList = document.getElementById('template-product-list').innerHTML;
Mustache.parse(templateSlide);

var allSlides ='';

for(var i = 0; i < slides.length; i++){
		console.log(slides);
		allSlides += Mustache.render(templateSlide, slides[i]);
	}

var generateSlides = Mustache.render(templateSlide, {products:allSlides});

results.insertAdjacentHTML('beforeend', generateSlides);

})(); 