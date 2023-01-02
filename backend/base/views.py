from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
import random
from django.db.models import Q
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class ExerciseView(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()

def exercises(r):
    exercises = Exercise.objects.all()
    serializer = ExerciseSerializer(exercises,many=True)
    return JsonResponse(serializer.data,safe=False)

def foods(r):
    foods = Food.objects.all()
    serializer = FoodSerializer(foods,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def workouts(r):
    workouts = Workout.objects.all()
    serializer = WorkoutSerializer(workouts,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def my_workouts(r):
    workouts = Workout.objects.filter(user=r.user.id)
    serializer = WorkoutSerializer(workouts,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def my_training_log(r):
    trainings = Training.objects.filter(user=r.user.id)
    serializer = TrainingSerializer(trainings,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def my_meal_log(r):
    meals = Meal.objects.filter(user=r.user.id)
    serializer = MealSerializer(meals,many=True)
    return JsonResponse(serializer.data,safe=False)

def users(r):
    for user in User.objects.all():
        Token.objects.get_or_create(user=user)
    users = User.objects.all()
    serializer = UserSerializer(users,many=True)
    return JsonResponse(serializer.data,safe=False)

def token(r):
    user = User.objects.get(id=2)
    token = Token.objects.get(user=user)
    return JsonResponse({"token":token.key})

@api_view(['GET'])
def diets(r):
    diets = Diet.objects.all()
    serializer = DietSerializer(diets,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def my_diets(r):
    diets = Diet.objects.filter(user=r.user.id)
    serializer = DietSerializer(diets,many=True)
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def profiles(r):
    users = User.objects.all()
    res = []
    for user in users:
        profile = Profile.objects.get(user = user.id)
        res.append(ProfileSerializer(profile).data)
    return JsonResponse(res,safe=False)