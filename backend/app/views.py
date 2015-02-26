from app.models import *
from app.serializers import *

from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from django.contrib.auth.models import User


class UserList(generics.ListCreateAPIView):
    """List all users or create a new User"""
    permission_classes = (permissions.IsAuthenticated,)
    model = User
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    """Retrieve, update or delete a User instance."""
    permission_classes = (permissions.IsAuthenticated,)
    model = User
    serializer_class = UserSerializer


class MemberList(generics.ListCreateAPIView):
    """List all members or create a new Member"""
    model = Member
    serializer_class = MemberSerializer

    def get(self, request, format=None):
        members = Member.objects.all()
        json = [self.serializeMember(member) for member in members]
        return Response(json)

    def serializeMember(self, member):
        hometeachers = Member.objects.filter(companionship__isnull=False, companionship=member.hometeachers)
        companionship = Member.objects.filter(companionship__isnull=False, companionship=member.companionship)
        families = Member.objects.filter(hometeachers__isnull=False, hometeachers=member.companionship)
        return {
            "id": member.id,
            "name": member.name,
            "email": member.email,
            "phone": member.phone,
            "calling": member.calling,
            "hometeachers": [h.name for h in hometeachers],
            "companionship": [c.name for c in companionship],
            "families": [f.name for f in families],
            "notes": member.notes
        }

class MemberDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete a Member."""
    model = Member
    serializer_class = MemberSerializer
