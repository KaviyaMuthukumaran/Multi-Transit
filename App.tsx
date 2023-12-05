import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/Home/HomeScreen'
import CardDetailsScreen from './components/CardDetailsScreen/CarddetailsScreen'
import LoginScreen from './components/LogIn/LogInScreen'
import AddCard from './components/AddCard/AddCard'
import useAuthenticator from './store/useAuthenticatorStore'
import TicketScreen from './components/TicketScreen/TicketScreen'
import { Text, View, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()
const App = () => {
  const { isAuthenticator, userName } = useAuthenticator()

  const Avatar: FC<{ userName: string }> = ({ userName }) => {
    const getInitials = (name: string): string => {
      const names = name.split(' ')
      return names
        .map((word) => (word.length > 0 ? word[0].toUpperCase() : ''))
        .join('')
    }

    const initials = getInitials(userName)

    return (
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticator ? (
          <>
            <Stack.Screen
              name={`Welcome`}
              options={{
                headerTitle: (props) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}
                  >
                    <Avatar userName={userName} />
                    <Text
                      style={{ fontWeight: 'bold', fontSize: 20 }}
                      {...props}
                    >
                      Welcome {userName}
                    </Text>
                  </View>
                ),
              }}
              component={HomeScreen}
            />
            <Stack.Screen name={`Add Card`} component={AddCard} />
            <Stack.Screen name={`Card Details`} component={CardDetailsScreen} />
            <Stack.Screen name={`Ticket`} component={TicketScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Log In"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    marginRight: 10,
  },
  avatarCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ff1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default App
