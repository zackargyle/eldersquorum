#carpet_direct/local/lib/python2.7/site-packages/django/
#contrib/admin/templates/admin
from django.contrib import admin
from app.models import *


class MemberAdmin(admin.ModelAdmin):
    ''' Admin layout for Address'''
    pass

class CompanionshipAdmin(admin.ModelAdmin):
	''' Admin layout for Companionship '''
	pass

''' Register Admin layouts into django'''
admin.site.register(Member, MemberAdmin)
admin.site.register(Companionship, CompanionshipAdmin)
