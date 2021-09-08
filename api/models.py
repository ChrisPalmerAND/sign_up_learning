from django.db import models

# Create your models here.
from django.db import models
class Session(models.Model):
    name = models.CharField(max_length=60)
    link = models.CharField(max_length=500)
    description = models.CharField(max_length=1000, null=True)
    def __str__(self):
        return self.name