import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, height: 100, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const HomeScreen = () => {
  
const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="bell" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="account" color={color} size={size} />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text> Lololol </Text>
//     </View>
//   );
// }
