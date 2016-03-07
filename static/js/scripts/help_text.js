define([], function () {
	var helpTextObj = {
		elementId: '#core-hText',
		isActive: false,
		timer: null,
		delay: 750,
		margin: 30
	};

	$('.hText').on({
		'mouseenter': function () {
			var self = $(this);
			$(helpTextObj.elementId).html(self.attr('data-hText'));
			helpTextObj.timer = setTimeout(function () {
				helpTextObj.isActive = true;
				$(helpTextObj.elementId).show();
			}, helpTextObj.delay);
		},
		'mousemove': function (e) {
			$(helpTextObj.elementId).css('top', e.pageY + helpTextObj.margin);
			if(e.pageX > ($(document).width() / 100) * 50) {
				$(helpTextObj.elementId).css('left', e.pageX - (($(helpTextObj.elementId).width() + 20) + helpTextObj.margin));
			}
			else {
				$(helpTextObj.elementId).css('left', e.pageX + helpTextObj.margin);
			}
		},
		'mouseleave': function () {
			if(helpTextObj.isActive) {
				$(helpTextObj.elementId).hide();
				$(helpTextObj.elementId).empty();
				helpTextObj.isActive = false;
			}
			else {
				clearTimeout(helpTextObj.timer);
				$(helpTextObj.elementId).empty();
			}
		}
	});
});
