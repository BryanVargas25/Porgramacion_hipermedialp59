from django.db import models

# Create your models here.
class Curso(models.Model):
    Nombre=models.CharField(max_length=50)
    Descripcion=models.CharField(max_length=100)
    Fecha_de_inicio=models.CharField()
    fecha_fin=models.CharField()
    capacidad=models.PositiveBigIntegerField()
    números_de_horas=models.PositiveBigIntegerField()
    