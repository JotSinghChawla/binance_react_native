// import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, } from 'react-native';
import { NineCubesLoader, TextLoader } from 'react-native-indicator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, Chip } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './components/Login'
import HomeScreen from './components/HomeScreen'
import Portfolio from './components/Portfolio'
import Analytics from './components/Analytics'
import Account from './components/Account'



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'tomato',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-analytics" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="google-analytics" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
      name="Portfolio"
      component={Portfolio}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-donut" color={color} size={size} />
        ),
      }}
    />
      <Tab.Screen
        name="Profile"
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const [loading, setLoading] = useState(true)
  const [isLoggedin, setIsLoggedin] = useState(false)

  setTimeout( () => setLoading(false), 200);

  if(loading) {
    return (
      <View style={styles.container}>
        <NineCubesLoader size={30} color='black' />
      </View>
    );
  }
  else {
    if( !isLoggedin ) {
      return (
        <View style={styles.container}>
            <Login onLoginClick={ () => setIsLoggedin(true) } />
        </View>
      );
    }
    else {
      return (
        <PaperProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </PaperProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
