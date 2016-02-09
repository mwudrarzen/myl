from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from .models import Card
import json

@login_required(login_url='/login/')
def cards(request):
	cards = Card.objects.all()
	paginator = Paginator(cards, 2)
	page = request.GET.get('page')

	try:
		p = paginator.page(page)
	except PageNotAnInteger:
		p = paginator.page(1)
	except EmptyPage:
		p = paginator.page(paginator.num_pages)

	c = {
		'data': {
			'settings': {
				'core_content': True,
			},
			'template': 'cards',
			'js_include': '',
		},
		'page': p,
	}
	c.update({'data_to_json': json.dumps(c['data'])})
	return render(request, 'cards.html', c)

@login_required(login_url='/login/')
def card(request, slug):
	card = get_object_or_404(Card, slug=slug)

	c = {
		'data': {
			'settings': {
				'core_content': True,
			},
			'template': 'card',
			'js_include': '',
		},
		'card': card,
	}
	c.update({'data_to_json': json.dumps(c['data'])})
	return render(request, 'card.html', c)
