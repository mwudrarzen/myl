from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.shop),
    url(r'^buy/', views.buy),
]