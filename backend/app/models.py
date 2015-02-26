from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    ''' Creates a token whenever a User is created '''
    if created:
        Token.objects.create(user=instance)


class Member(models.Model):
    ''' Model features for a member '''
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=200, blank=True, null=True)
    calling = models.CharField(max_length=200, blank=True, null=True)
    companionship = models.ForeignKey('Companionship', related_name="companionship", blank=True, null=True)
    hometeachers = models.ForeignKey('Companionship', related_name="hometeachers", blank=True, null=True)
    notes = models.CharField(max_length=2000, default="", blank=True, null=True)

    def __unicode__(self):
        return u'%s' % self.name

    class Meta:
        verbose_name_plural = 'Members'

class Companionship(models.Model):
    def __unicode__(self):
        companionship = Member.objects.filter(companionship__isnull=False, companionship=self.pk)
        return u'%s' % ' - '.join([str(m.name) for m in companionship]) 
    class Meta:
        verbose_name_plural = 'Companionships'