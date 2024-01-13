

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NewsDetailsScreen from "./screens/news_details";



const Navigation = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Navigation.Navigator>
        <Navigation.Screen name='News' component={HomeScreen} options={{ headerShown: false }}></Navigation.Screen>
        <Navigation.Screen name='newsDetailsScreen' component={NewsDetailsScreen} options={{ headerShown: false }}></Navigation.Screen>
      </Navigation.Navigator>
    </NavigationContainer>
  )
}

