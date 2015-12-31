from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from shop.models import Icon
import json

def get_default_decks():
	default_cards = {}
	for i in range(50):
		i = i + 1
		default_cards.update({'card_%s' % i: None})

	default_decks = {}
	for i in range(10):
		i = i + 1
		default_decks.update({
			'deck_%s' % i: {
				'id': i,
				'name': None,
				'description': None,
				'is_created': False,
				'is_complete': False,
				'cards': default_cards
			}
		})

	return default_decks

class ExtendedUserProfile(models.Model):
	user = models.OneToOneField(User)
	gold = models.IntegerField(default=850, blank=False)
	decks = models.TextField(default=get_default_decks(), blank=False)
	icons = models.ManyToManyField(Icon)

	def get_decks_in_json(self):
		decks = eval(self.decks)
		return json.dumps(decks)
