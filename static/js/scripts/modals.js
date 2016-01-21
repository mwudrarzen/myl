define([], function () {
	console.log('iniciando modals.js');

	var modalsObj = {
		inicializar: function () {
			console.log('inicializando modalsObj');
		},
		crearModal: function (tipo, objeto) {
			var modal;
			switch(tipo) {
				case 'confirmacion': {
					modal = $('<div class="modals-confirmation"><div class="modals-confirmation-head"><div></div></div><div class="testasdf">ASDF</div></div>');
					$('#modals-container').append(modal).show();
					break;
				}
			}
		},
		eliminarModal: function () {
			//
		}
	};

	modalsObj.inicializar();
	modalsObj.crearModal('confirmacion', null);

	$('.testasdf').click(function () {
		alert('el mc se va a comer una mina rica, muy rica y puta este año :D');
	});

	return modalsObj;
});
 