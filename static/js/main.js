define(['jqueryui', 'waitForImages'], function(){
	var interfaz = {
		config: {
			fadeInDelay: 750,
			fadeOutDelay: 750
		},
		elementos: {
			loader: $('#loader'),
			contenido: $('#core-content')
		},
		inicializar: function(){
			/*
			var url = '/static/test.png';
			$('<img>').attr('src', url).load(function(){
				this.remove();
				$('body').css({'background-image':'url(' + url + ')'});
				$('body').waitForImages(function(){
					interfaz.mostrarInterfaz();
				});
			});*/
			interfaz.mostrarInterfaz();
		},
		mostrarInterfaz: function(){
			this.elementos.loader.fadeOut(this.config.fadeOutDelay);
			this.elementos.contenido.fadeIn(this.config.fadeInDelay);
		}
	};

	$('.url').click(function(){
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

	interfaz.inicializar();
});