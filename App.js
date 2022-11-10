import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './src/pages/Task';
import { NewTask } from './src/pages/NewTask';
import { Details } from './src/pages/Details';


export default function App() {
const Stack = createNativeStackNavigator()

return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Task' screenOptions={{headerTitleAlign:'center'}}  >
              <Stack.Screen
              name='Task'
              component={Task}
              options={{
                headerTintColor:"#191919",
              }} />

            <Stack.Screen
              name='NewTask'
              component={NewTask}
              options={{
                headerTintColor:"#121212",
              }} />
              
            <Stack.Screen 
              name='Details'
              component={Details}
              options={{
                headerTintColor:"#191919",
              }}
            />

          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


