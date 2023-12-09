import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/HomeScreen';
import CardDetailsScreen from './components/CardDetailsScreen/CarddetailsScreen';
import LoginScreen from './components/LogIn/LogInScreen';
import AddCard from './components/AddCard/AddCard';
import useAuthenticator from './store/useAuthenticatorStore';
import TicketScreen from './components/TicketScreen/TicketScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const { isAuthenticator, userName } = useAuthenticator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticator ? (
          <>
            <Stack.Screen name={`Welcome ${userName}`} component={HomeScreen} />
            <Stack.Screen name={`Add Card`} component={AddCard} />
            <Stack.Screen name={`Card Details`} component={CardDetailsScreen} />
            <Stack.Screen name={`Ticket`} component={TicketScreen} />
          </>
        ) : (
          <Stack.Screen name="Log In" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
