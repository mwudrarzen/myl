define(['scripts/templates'], function (templatesModule) {
	console.log('iniciando cards.js');

	var obj = {
		//
	};

	$(document).on('click', '.card-url', function () {
		console.log($(this));
	});

	return obj;
});
