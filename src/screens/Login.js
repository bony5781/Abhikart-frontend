import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import config from '../config';
import axios from 'axios';


const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': "application/json",
      'Accept': "application/json",
    }
    axios.post("http://10.0.2.2:5000/api/auth/login",
      { username: username, password: password }
      , {
        headers: headers
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/login.png')} style={styles.image} />
        <Text style={{fontSize: 25, fontFamily: 'Oswald', fontWeight: 700, color: '#03045e'}}> Login </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          name="username"
          value={username}
          onChangeText={setUsername}
          placeholder='Username'
        />
        <TextInput
          style={styles.input}
          name="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Password'
          require={true}
        />
        <Pressable
          style={styles.button}
          onPress={handeSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
      <View style={styles.registerContainer}>
        <Pressable
        style={styles.registerButton}
        onPress={()=> navigation.navigate("Register")}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#fff' }}>New user? Press Here</Text>
        </Pressable>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbe0b',
  },
  imageContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 180,
    margin: 20,
  },
  inputContainer: {
    flex: 0.4,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
    marginLeft: config.deviceWidth * 0.03,
    marginRight: config.deviceWidth * 0.03,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#588157',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: config.deviceWidth * 0.03,
    marginRight: config.deviceWidth * 0.03,
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  registerContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#219ebc',
    height: 60,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: config.deviceWidth * 0.03,
    marginRight: config.deviceWidth * 0.03,
    marginBottom: 15,
    borderRadius: 10,
  }
})

export default Login