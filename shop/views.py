from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import Icon
import json

@login_required(login_url='/login/')
def shop(request):
	shop_icons = Icon.objects.exclude(cost=0)
	user_icons = request.user.extendeduserprofile.icons.exclude(cost=0)

	c = {
		'settings': {
			'template': 'shop',
			'head': True,
			'community': False,
			'js_include': '',
		},
		'shop_icons': shop_icons,
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	return render(request, 'shop.html', c)
