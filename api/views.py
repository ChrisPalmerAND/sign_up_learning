from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import SessionSerializer
from .models import Session


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all().order_by('name')
    serializer_class = SessionSerializer