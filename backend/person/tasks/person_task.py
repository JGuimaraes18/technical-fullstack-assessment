from ..models import Person

class PersonTask:

    @staticmethod
    def create(data):
        return Person.objects.create(**data)

    @staticmethod
    def update(person_id, data):
        person = Person.objects.get(id=person_id)
        for campo, valor in data.items():
            setattr(person, campo, valor)
        person.save()
        return person

    @staticmethod
    def delete(person_id):
        person = Person.objects.get(id=person_id)
        person.delete()

    @staticmethod
    def search(filtros):
        return Person.objects.filter(**filtros)
    
    @staticmethod
    def calculate_ideal_weight(height: float, sex: str) -> float:
        if sex == 'M':
            return round((72.7 * height) - 58, 2)
        elif sex == 'F':
            return round((62.1 * height) - 44.7, 2)
        return None
