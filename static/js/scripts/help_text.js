define([], function () {
	var obj = {
		elementId: '#core-hText',
		isActive: false,
		timer: null,
		delay: 750,
		margin: 30
	};

	$('.hText').on({
		'mouseenter': function () {
			var self = $(this);
			$(obj.elementId).html(self.attr('data-hText'));
			obj.timer = setTimeout(function () {
				obj.isActive = true;
				$(obj.elementId).show();
			}, obj.delay);
		},
		'mousemove': function (e) {
			$(obj.elementId).css('top', e.pageY + obj.margin);
			if(e.pageX > ($(document).width() / 100) * 50) {
				$(obj.elementId).css('left', e.pageX - (($(obj.elementId).width() + 20) + obj.margin));
			}
			else {
				$(obj.elementId).css('left', e.pageX + obj.margin);
			}
		},
		'mouseleave': function () {
			if(obj.isActive) {
				$(obj.elementId).hide();
				$(obj.elementId).empty();
				obj.isActive = false;
			}
			else {
				clearTimeout(obj.timer);
				$(obj.elementId).empty();
			}
		}
	});
});
