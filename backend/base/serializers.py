from rest_framework import serializers
from .models import Exercise,Food,Workout,Diet,Training,Meal,Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'name', 'description', 'image_l','image_s',"target","calorie")

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'description', 'image_l','image_s',"taste","calorie","fat","protein","carb")

class WorkoutSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    exercises = ExerciseSerializer(read_only=True, many=True)
    class Meta:
        model = Workout
        fields = ('id', 'name', 'description', 'image_l','image_s',"exercises","user")

class TrainingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    workout = WorkoutSerializer(read_only=True)
    class Meta:
        model = Training
        fields = ('id', 'notes', 'day', 'performance','workout',"user")

class DietSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    foods = FoodSerializer(read_only=True, many=True)
    class Meta:
        model = Diet
        fields = ('id', 'name', 'description', 'image_l','image_s',"foods","user")

class MealSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    diet = DietSerializer(read_only=True)
    class Meta:
        model = Meal
        fields = ('id', 'day', 'taste','diet',"user")

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Profile
        fields = ('id', 'title', 'image',"user")




