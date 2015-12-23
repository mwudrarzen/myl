from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.cards),
	url(r'^(?P<slug>[-\w]+)/', views.card)
]