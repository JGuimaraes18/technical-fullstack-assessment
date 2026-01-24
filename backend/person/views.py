from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import PersonDTO
from .services import PersonService

# Create your views here.

class PersonController(APIView):

    def post(self, request):
        serializer = PersonDTO(data=request.data)
        serializer.is_valid(raise_exception=True)

        person = PersonService.create(serializer.validated_data)
        return Response(PersonDTO(person).data, status=status.HTTP_201_CREATED)

    def get(self, request):
        person = PersonService.search(request.query_params.dict())
        return Response(PersonDTO(person, many=True).data)

    def put(self, request, pk):
        serializer = PersonDTO(data=request.data)
        serializer.is_valid(raise_exception=True)

        person = PersonService.update(pk, serializer.validated_data)
        return Response(PersonDTO(person).data)

    def delete(self, request, pk):
        PersonService.delete(pk)
        return Response(status=status.HTTP_204_NO_CONTENT)

class PersonIdealWeightController(APIView):

    def get(self, request, person_id):
        try:
            person = Person.objects.get(id=person_id)
        except Person.DoesNotExist:
            return Response({"error": "Pessoa não encontrada!"}, status=status.HTTP_404_NOT_FOUND)

        ideal_weight = PersonService.get_ideal_weight(person)
        
        return Response({"peso_ideal": ideal_weight}, status=status.HTTP_200_OK)