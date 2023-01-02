from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Exercise(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    calorie = models.IntegerField()
    target = models.TextField()
    image_s = models.TextField(default="")
    image_l = models.TextField(default="")

    def _str_(self):
        return self.name

class Workout(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    image_s = models.TextField(default="")
    image_l = models.TextField(default="")
    exercises = models.ManyToManyField(Exercise)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=2)

    def _str_(self):
        return self.name

class Training(models.Model):
    notes = models.TextField()
    day = models.IntegerField()
    performance = models.IntegerField()
    workout = models.ForeignKey(Workout,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=2)


class Food(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    calorie = models.IntegerField()
    fat = models.IntegerField()
    taste = models.IntegerField()
    protein = models.IntegerField()
    carb= models.IntegerField()
    image_s = models.TextField(default="")
    image_l = models.TextField(default="")

    def _str_(self):
        return self.name

class Diet(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    image_s = models.TextField(default="")
    image_l = models.TextField(default="")
    foods = models.ManyToManyField(Food)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=2)

    def _str_(self):
        return self.name

class Meal(models.Model):
    day = models.IntegerField()
    taste = models.IntegerField()
    diet = models.ForeignKey(Diet,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=2)

class Profile(models.Model):
    image = models.TextField(default="")
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=2)
    title = models.TextField(default="")

