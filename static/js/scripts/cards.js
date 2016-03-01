define(['scripts/templates', 'scripts/card'], function (templatesModule, cardModule) {
	console.log('iniciando cards.js');

	var obj = {
		//
	};

	$(document).on('click', '.card-url', function () {
		console.log($(this));
	});

	return obj;
});
