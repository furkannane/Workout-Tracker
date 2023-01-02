from django.contrib import admin
from.models import Exercise,Food,Workout,Diet,Training,Meal,Profile

# Register your models here.

class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","calorie","target")

class FoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","calorie","fat","taste","protein","carb")

class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","user")

class TrainingAdmin(admin.ModelAdmin):
    list_display = ('notes', 'day', 'performance', "workout","user")

class DietAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","user")

class MealAdmin(admin.ModelAdmin):
    list_display = ('day', 'taste', "diet","user")

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('title', 'image',"user")

admin.site.register(Exercise, ExerciseAdmin)
admin.site.register(Food, FoodAdmin)
admin.site.register(Workout, WorkoutAdmin)
admin.site.register(Training, TrainingAdmin)
admin.site.register(Diet, DietAdmin)
admin.site.register(Meal, MealAdmin)
admin.site.register(Profile, ProfileAdmin)