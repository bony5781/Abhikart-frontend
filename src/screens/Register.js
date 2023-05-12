import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import config from '../config';
import axios from 'axios';


const Register = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      const headers = {
        'Content-Type': "application/json",
        'Accept': "application/json",
      }
      axios.post("http://10.0.2.2:5000/api/auth/register",
        { username: username, email: email, password: password }
        , {
          headers: headers
        })
        .then(() => {
          Alert.alert("Account successfully created! Redirecting to login page")
          navigation.navigate("Login");
        })
        .catch(err => {
          console.log(err.response.data);
          Alert.alert("Something went wrong!! Try different username!")
        });
    } else {
      Alert.alert("Passwords don't match!!!!");
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/register.png')} style={styles.image} />
        <Text style={{ fontSize: 25, fontFamily: 'Oswald', fontWeight: 700, color: '#03045e' }}> Register </Text>
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
          name="email"
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
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
        <TextInput
          style={styles.input}
          name="repassword"
          value={passwordAgain}
          onChangeText={setPasswordAgain}
          secureTextEntry={true}
          placeholder='Password Again'
          require={true}
        />
        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
      <View style={styles.loginContainer}>
        <Pressable
        style={styles.loginButton}
        onPress={()=> navigation.navigate("Login")}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#fff' }}>Already a user? Login</Text>
        </Pressable>
      </View>
    </View>
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
  loginContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
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

export default Register