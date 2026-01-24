from rest_framework import serializers
from .models import Person
from .services import PersonService

class PersonDTO(serializers.ModelSerializer):
    peso_ideal = serializers.SerializerMethodField()

    class Meta:
        model = Person
        fields = [
            'id',
            'nome',
            'data_nascimento',
            'cpf',
            'sexo',
            'altura',
            'peso',
            'peso_ideal'
        ]

    def get_weight(self, obj):
        return PersonService.get_ideal_weight(obj)
