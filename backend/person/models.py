from django.db import models

# Create your models here.

class Person(models.Model):
    SEXO_CHOICES = (
        ('M', 'Masculino'),
        ('F', 'Feminino'),
    )

    nome = models.CharField(max_length=150, null=False)
    data_nascimento = models.DateField(null=False)
    cpf = models.CharField(max_length=11, unique=True, null=False)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, null=False)
    altura = models.FloatField(null=False)
    peso = models.FloatField(null=False)

    cadastro = models.DateTimeField(auto_now_add=True)
    atualizado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.nome} - CPF: {self.cpf}"
    
    class Meta:
        db_table = "Pessoa" 
        verbose_name = "Pessoa"
        verbose_name_plural = "Pessoas"