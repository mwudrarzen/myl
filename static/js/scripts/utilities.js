define([], function () {
	console.log('iniciando utilities.js');

	var utilitiesObj = {
		cargarBackgroundImage: function (ruta, elemento, callback) {
			console.log('cargarBackgroundImage:' + ' ' + ruta);
			backgroundImage = $('<img>').attr('src', ruta).load(function () {
				$(this).remove();
				$(elemento).css('background-image', 'url("' + ruta + '")');
				console.log(ruta + ' ' + 'cargada (bgimg)');
				callback();
			});
		},
		zumbido: {
			activo: false,
			zumbar: function (elemento) {
				if(this.activo) return false;
				this.activo = true;
				var self = this;
				$(elemento).animate({
					'margin-left': -5,
					'margin-right': 5
				}, 100, function () {
					$(this).animate({
						'margin-left': 5,
						'margin-right': -5
					}, 100, function () {
						$(this).animate({
							'margin-left': -5,
							'margin-right': 5
						}, 100, function () {
							$(this).animate({
								'margin-left': 5,
								'margin-right': -5
							}, 100, function () {
								$(this).animate({
									'margin-left': 0,
									'margin-right': 0
								}, 100, function () {
									self.activo = false;
								});
							});
						});
					});
				});
			}
		}
	};

	return utilitiesObj;
})