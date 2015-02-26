from app.models import *
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    """Serializes a User object"""
    class Meta:
        model = User
        fields = ('id', 'username')


class MemberSerializer(serializers.ModelSerializer):
    """Serializes an Member object"""
    class Meta:
        model = Member

class CompanionshipSerializer(serializers.ModelSerializer):
    """Serializes an Companionship object"""
    class Meta:
        model = Companionship
