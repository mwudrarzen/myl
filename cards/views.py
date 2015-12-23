from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from .models import Card

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

	return render(request, 'cards.html', {
		'template': 'cards',
		'head': True,
		'community': False,
		'page': p,
	})

@login_required(login_url='/login/')
def card(request, slug):
	card = get_object_or_404(Card, slug=slug)
	return render(request, 'card.html', {
		'template': 'card',
		'head': True,
		'community': False,
		'card': card,
	})
