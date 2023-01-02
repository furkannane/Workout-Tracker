import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './screens/HomeScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ExerciseDetailsScreen from './screens/ExerciseDetailsScreen';
import FoodsScreen from './screens/FoodsScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen';
import PopularWorkoutsScreen from './screens/PopularWorkoutsScreen';
import PopularWorkoutDetailsScreen from './screens/PopularWorkoutDetailsScreen';
import PopularDietsScreen from './screens/PopularDietsScreen';
import PopularDietDetailsScreen from './screens/PopularDietDetailsScreen';
import MyWorkoutsScreen from './screens/MyWorkoutsScreen';
import MyDietsScreen from './screens/MyDietsScreen';
import TrainingLogScreen from './screens/TrainingLogScreen';
import MealLogScreen from './screens/MealLogScreen';
import AthletesScreen from './screens/AthletesScreen';


const Stack = createStackNavigator()

export default function App() {

  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home Screen'>
      <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Exercises Screen" component={ExercisesScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Exercise Details Screen" component={ExerciseDetailsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Foods Screen" component={FoodsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Food Details Screen" component={FoodDetailsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Popular Workouts Screen" component={PopularWorkoutsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Popular Workout Details Screen" component={PopularWorkoutDetailsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Popular Diets Screen" component={PopularDietsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Popular Diet Details Screen" component={PopularDietDetailsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="My Workouts Screen" component={MyWorkoutsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="My Diets Screen" component={MyDietsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Training Log Screen" component={TrainingLogScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Meal Log Screen" component={MealLogScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Athletes Screen" component={AthletesScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
