import json

from django.core.management.base import BaseCommand
from app.models import *

class Command(BaseCommand):

    def _create_members(self, members):
        for m in members:
        	member = Member(
        		name=m['preferredName'],
        		email=m['email'],
        		phone=m['phone']
        	)
        	member.save()

    def handle(self, *args, **options):
    	json_data = open('members.json')
        members = json.load(json_data)
        self._create_members(members)