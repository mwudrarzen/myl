define([], function () {
	console.log('iniciando head.js');

	var headObj = {
		inicializar: function () {
			console.log('inicializando headObj');
			this.renderizar();
		},
		renderizar: function () {
		},
		botones: {
			botonActivado: false,
			idBotonActivado: undefined,
			activarBoton: function (idElemento) {
				if(this.botonActivado) {
					if(idElemento == this.idBotonActivado) {
						return this.desactivarBoton(idElemento);
					}
					else {
						this.desactivarBoton(this.idBotonActivado);
					}
				}
				this.botonActivado = true;
				this.idBotonActivado = idElemento;
				$(idElemento).addClass('core-head-button-selected');
				if(idElemento == '#core-head-button-more') {
					$(idElemento).find('.icon').removeClass('icon-menu3').addClass('icon-menu4');
				}
			},
			desactivarBoton: function (idElemento) {
				if(!this.botonActivado) return false;
				this.botonActivado = false;
				this.idBotonActivado = undefined;
				$(idElemento).removeClass('core-head-button-selected');
				if(idElemento == '#core-head-button-more') {
					$(idElemento).find('.icon').removeClass('icon-menu4').addClass('icon-menu3');
				}
			}
		}
	};

	// click
	$('.core-head-button').click(function () {
		id = '#' + $(this).attr('id');
		headObj.botones.activarBoton(id);
	});
	$('#core-container').click(function () {
		if(headObj.botones.botonActivado) {
			headObj.botones.desactivarBoton(headObj.botones.idBotonActivado);
		}
	});

	headObj.inicializar();

	return headObj;
});
