from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import SessionSerializer
from .models import Session


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all().order_by('name')
    serializer_class = SessionSerializer