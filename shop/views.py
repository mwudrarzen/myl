from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, Http404
from django.shortcuts import render
from .models import Icon
import json

@login_required(login_url='/login/')
def shop(request):
	shop_icons = Icon.objects.exclude(price=0).exclude(enabled=False).values()
	user_icons = request.user.userprofile.icons.exclude(enabled=False).values()  # los iconos gratuitos no son propiedad del usuario

	for shop_icon in shop_icons:
		if shop_icon in user_icons:
			shop_icon['owned'] = True

	c = {
		'data': {
			'settings': {
				'head': True,
				'community': False,
			},
			'template': 'shop',
			'js_include': '',
		},
		'shop_icons': shop_icons,
	}
	c.update({'data_to_json': json.dumps(c['data'])})
	return render(request, 'shop.html', c)

def buy(request):
	if request.method == 'POST':
		response = {}
		try:
			data = json.loads(request.body)
		except:
			response.update({'success': False, 'data': {'text': 'Ha ocurrido un error al obtener los datos enviados'}})
			return HttpResponse(json.dumps(response), content_type='application/json')

		if data['itemtype'] == 'deck':  # comprar mazo - IGNORAR (INCOMPLETO)
			return HttpResponse('buying deck')

		elif data['itemtype'] == 'pack':  # comprar sobre - IGNORAR (INCOMPLETO)
			return HttpResponse('buying pack')

		elif data['itemtype'] == 'icon':  # comprar icono
			# comprar icono
			try:
				target_icon = Icon.objects.get(id=data['itemid'])
			except Icon.DoesNotExist:
				response.update({'success': False, 'data': {'text': 'No existe el icono'}})
				return HttpResponse(json.dumps(response), content_type='application/json')

			if target_icon.enabled:
				if target_icon.price > 0:
					user_icons = request.user.userprofile.icons.exclude(enabled=False)
					try:
						user_icons.get(id=data['itemid'])
						response.update({'success': False, 'data': {'text': 'Ya tienes el icono'}})
						return HttpResponse(json.dumps(response), content_type='application/json')
					except:
						pass
					if request.user.userprofile.clp >= target_icon.price:
						request.user.userprofile.clp = request.user.userprofile.clp - target_icon.price
						request.user.userprofile.icons.add(target_icon)
						request.user.userprofile.save()
						response.update({'success': True, 'data': {'text': 'Icono comprado', 'clp': request.user.userprofile.clp}})
					else:
						response.update({'success': False, 'data': {'text': 'Dinero insuficiente'}})
				else:
					response.update({'success': False, 'data': {'text': 'Icono gratuito'}})
			else:
				response.update({'success': False, 'data': {'text': 'Icono deshabilitado'}})
			# /comprar icono
		elif data['itemtype'] == 'bundle':  # comprar paquete - IGNORAR (INCOMPLETO)
			return HttpResponse('buying bundle')

		else:  # tipo de item invalido
			response.update({'success': False, 'data': {'text': 'El tipo de item es invalido'}})

		return HttpResponse(json.dumps(response), content_type='application/json')

	raise Http404
