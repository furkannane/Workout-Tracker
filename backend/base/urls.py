from django.urls import path
from . import views

urlpatterns = [
    path("exercises",views.exercises,name="exercises"),
    path("foods",views.foods,name="foods"),
    path("workouts",views.workouts,name="workouts"),
    path("my-workouts",views.my_workouts,name="my-workouts"),
    path("my-training-log",views.my_training_log,name="my-training-log"),
    path("my-meal-log",views.my_meal_log,name="my-meal-log"),
    path("users",views.users,name="users"),
    path("token",views.token,name="token"),
    path("diets",views.diets,name="diets"),
    path("my-diets",views.my_diets,name="my-diets"),
    path("profiles",views.profiles,name="profiles"),
]