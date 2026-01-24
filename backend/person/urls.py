from django.urls import path
from .views import PersonController, PersonIdealWeightController

urlpatterns = [
    path('pessoas/', PersonController.as_view()),
    path('pessoas/<int:pk>/', PersonController.as_view()),
    path('pessoas/<int:pk>/calculo-peso/', PersonIdealWeightController.as_view()),

]
