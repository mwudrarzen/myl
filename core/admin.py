from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import ExtendedUserProfile

class ExtendedUserProfileInline(admin.StackedInline):
	model = ExtendedUserProfile
	can_delete = False
	verbose_name_plural = 'Perfil de usuario extendido'

class UserAdmin(UserAdmin):
	inlines = (ExtendedUserProfileInline, )

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
