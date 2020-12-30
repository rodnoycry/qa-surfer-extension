
$(document).ready(function(){

	$(function sentToContentJS () {

		chrome.tabs.query({currentWindow: true, active: true},
			function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, 'links_count', setCount)
			});
		});

		function setCount (res) {
			links_count = Number(`${res.count}`)
			console.log('1234')
		};
	});

	$(function (){

			$("#main_button").on('click', function(){

				

				chrome.tabs.query({currentWindow: true, active: true},
					function (tabs) {
						chrome.tabs.sendMessage(tabs[0].id, 'links_count', setCount)
					});

				function setCount (res) {
					asdass = Number(`${res.count}`);
					console.log('1234')
				};
				var load_screen = $('<div class="load_screen" id="load_screen"></div>');
				var load_image = $('<img src="images/load.png" class="load_image" id="load_image">');
				$('#main_div').append(load_screen, load_image);
				$('#load_screen').animate({opacity: 1});
				$('#load_image').animate({opacity: 1});
				setTimeout(

					function () {

						$('#load_screen').fadeOut(500);
						$('#load_image').fadeOut(500);
						$('.auth').hide(1);

						var check_html = $('<p class="check" id="text_check_bold">Проверка страницы</p><p class="check" id="text_check">Ссылки: <span id="links_count">0</span></p><button class="check" id="check_button">Начать</button><img src="images/amojito.png" class="check" id="amojito_check">');
						
						$('#load_screen').hide(1);
						$('#load_image').hide(1);
						$('#main_div').append(check_html);
						$('.check').animate({opacity: 1});

						var currentNumber = $('#links_count').text();

						$({numberValue: currentNumber}).animate({numberValue: links_count}, {
							duration: 1500,
							easing: 'linear',
							step: function() { 
								$('#links_count').text(Math.ceil(this.numberValue)); 
							
						},

					});

				}, 1000);

			});

}, false)