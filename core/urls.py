from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.main_menu),
    url(r'^signup/', views.signup),
    url(r'^login/', views.login),
    url(r'^logout/', views.logout),
    url(r'^test/', views.test),
]