from ..tasks import PersonTask
from ..models import Person

class PersonService:
    @staticmethod
    def create(dto):
        return PersonTask.create(dto)
    
    @staticmethod
    def update(person_id, dto):
        return PersonTask.update(person_id, dto)
    
    @staticmethod
    def delete(person_id):
        return PersonTask.delete(person_id)
    
    @staticmethod
    def search(filters):
        return PersonTask.search(filters)
    
    @staticmethod
    def get_ideal_weight(person: Person) -> float:
        return PersonTask.calculate_ideal_weight(person.altura, person.sexo)