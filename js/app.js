document.addEventListener("DOMContentLoaded", function() {

	/*----------colorText--------------*/

	const colorText = () => {

		const txtArray = document.getElementsByClassName('company-text-header')

		const arr = [...txtArray]

		arr.forEach((item, index, array) => {
			let leftSideWord = array[index].innerHTML.slice(0, -3)
			let rightSideWord = array[index].innerHTML.slice(-3) 
			return array[index].innerHTML = `${leftSideWord}<span>${rightSideWord}</span>`
		})

	}

	/*----------Owl carousel-----------*/

	$(document).ready(function(){
	  $('.owl-carousel').owlCarousel();
	})

	$(".reviews").owlCarousel({
	 	items: 1,
	 	smartSpeed: 700,
	 	loop: true,
	 	dots: false,
	 	nav: true,
	 	navSpeed: 700/true,
	 	navText: [`
	 	<div class="vector vector-left">
			<img src='../images/dest/Vector-left.svg'/>
	 	</div>`, 
	 	`<div class="vector vector-right">
			<img src='../images/dest/Vector-right.svg'/>
	 	</div>`]
	 });


	/*----------PgwSlider--------------*/

	$(document).ready(function() {
	    $('.pgwSlider').pgwSlider();
	});

	/*----------imgCaption-------------*/

	$(function capt() {
	    $('.figure-img').captionjs({
	    	'class_name': 'captionjs',
	    	'mode': 'animated',
	    	'is_responsive': false,
	    	'inherit_styles': true,
	    	'force_dimensions': false
	    	});
	});


	/*----------tabs-------------*/

	tabs('init')
	document.getElementById('left-arrow-tab').addEventListener('click', (e) => tabs(false))
	document.getElementById('right-arrow-tab').addEventListener('click', (e) => tabs(true))

	/*------------mmenu------------*/
	$(function() {
			$('#menu').mmenu({
			extensions: [ 'fx-menu-slide', 'fx-panels-slide-up', 'fx-listitems-fade', 'pagedim-black', 'position-left', 
			'theme-dark', 'border-full' ],
			navbar: {
				title: '<div class="company-text-header">EventBizPro</div>'
			},
			"iconbar": {
              "use": true,
              "top": [
              	"<a href='#/'><i class='fa fa-phone fa-rotate-270'></i></a>"
              ],
              "bottom": [
                 "<a href='#/'><i class='fa fa-facebook'></i></a>",
                 "<a href='#/'><i class='fa fa-twitter'></i></a>",
                 "<a href='#/'><i class='fa fa-instagram'></i></a>",
                 "<a href='#/'><i class='fa fa-youtube-play'></i></a>"
              ]
           },
           "iconPanels": true
		});
		colorText()
	});
	
});

ymaps.ready(init);
var myMap;

function init() {     
    myMap = new ymaps.Map("map", {
        center: [53.881261, 27.482531],
        zoom: 15,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom'); 
    myPlacemark = new ymaps.Placemark([53.880119,27.493923], {
         hintContent: 'г. Минск ул. Уманская д.3',
         balloonContent: 'г. Минск ул. Уманская д.3'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/dest/Vector.svg',
            iconImageSize: [32, 43],
            iconImageOffset: [-13, -53]
        });
    
    myMap.geoObjects.add(myPlacemark);
};


const tabs = (bool) => {


	const tabs = document.getElementById('tabs')

	const arr = [...tabs.children]

	arr.forEach( async (item, index, array) => {
		if (array[index].control.checked === true) {
			if (bool === 'init') {
				return array[index].classList.remove('d-none')
			}
			if ((index === 0 && !bool) || (index === arr.length-1 && bool)) {
				return index
			}
			(bool) ? idx = index + 1 : idx = index - 1
			id = await array[idx].control.id
			document.getElementById(id).checked = true
			array[idx].classList.remove('d-none')
			if (array[idx-1]) {
				array[idx-1].classList.add('d-none')
			}
			if (array[idx+1]) {
				array[idx+1].classList.add('d-none')
			}
		}
	})


	return arr
};
