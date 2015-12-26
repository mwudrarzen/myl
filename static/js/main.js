define(['jqueryui', 'waitForImages', 'scripts/head', 'scripts/community', settings.js_include], 
	function (jqueryui, waitForImages, headModule, communityModule) {

	console.log('iniciando main');

	var loaderObj = {
		settings: {
			fadeInDuration: 750,
			fadeOutDuration: 750,
			backgroundImg: false,
			backgroundImgUrl: '/static/img/test.png'
		},
		inicializar: function () {
			console.log('inicializando loader')
			this.cargarImagenes();
		},
		cargarImagenes: function () {
			var self = this;
			if(this.settings.backgroundImg) {
				$('<img>').attr('src', this.settings.backgroundImgUrl).load(function () {
					this.remove();
					$('body').css({
						'background-image': 'url(' + self.settings.backgroundImgUrl + ')'
					});
					$('body').waitForImages(function () {
						self.finalizar();
					})
				})
			}
			else {
				$('body').waitForImages(function () {
					self.finalizar();
				})
			}
		},
		finalizar: function () {
			$('#loader').fadeOut(this.settings.fadeOutDuration);
			$('#core-content').fadeIn(this.settings.fadeInDuration);
		}
	};

	$('.url').click(function () {
		$(this).css({
			'cursor': 'default'
		});
		location.href = $(this).data('url');
	});

	$('.window').mousedown(function (event) {
		if(event.which == 1) {
			$('.window').css('z-index', 1000);
			$(this).css('z-index', 2000);
		}
	});

	$('.no-draggable').mouseover(function () {
		$('.draggable').draggable({
			disabled: true
		});
	})

	$('.no-draggable').mouseout(function () {
		$('.draggable').draggable({
			disabled: false,
			cursor: 'move !important',
			containment: 'window'
		});
	})

	loaderObj.inicializar();
});