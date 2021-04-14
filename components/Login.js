import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Alert, } from 'react-native';

const Login = ({ onLoginClick }) => {

  const [username, setUsername] = useState('random')
  const [password, setPassword] = useState('random')

  const handleLogin = () => {
    if( username === 'random' && password==='random' ) {
      onLoginClick()
    }
    else {
      Alert.alert('INVALID CREDENTIALS!', 'Try typing random in both field', [{text: 'Ok'}])
    }
  }

  return (
    <>
      <View style={styles.imageContainer}>
        <Image  style={styles.image} source={require('../assets/main_logo.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          defaultValue='random'
          onChangeText={(email) => setUsername(email)}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          defaultValue='random'
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'tomato',
  },
  image: {
    marginBottom: 40
  },  

  inputView: {
    backgroundColor: "#eee",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 20
  },

  loginBtn: {
    width:"80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },

  loginText: {
    fontSize: 20,
    color: 'white',
  }

});

export default Login;
