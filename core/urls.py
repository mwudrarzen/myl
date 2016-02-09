from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.core),
    url(r'^start/', views.start),
    url(r'^signup/', views.signup),
    url(r'^login/', views.login),
    url(r'^logout/', views.logout),
]