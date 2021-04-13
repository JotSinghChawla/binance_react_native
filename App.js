import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, } from 'react-native';
import { NineCubesLoader, TextLoader } from 'react-native-indicator';
import Login from './components/Login'

export default function App() {

  const [loading, setLoading] = useState(true)

  setTimeout( () => setLoading(false), 3000);

  if(loading) {
    return (
      <View style={styles.container}>
        <NineCubesLoader size={30} color='#ddd' />
      </View>
    );
  }
  else {
    return (
      <>
        <View style={styles.container}>
            <Login />
        </View>
      </>
    );
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
