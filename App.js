import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCDAbJHdRHNdEGsyJEKzht_yC97ufa8Kag",
      authDomain: "one-time-p.firebaseapp.com",
      databaseURL: "https://one-time-p.firebaseio.com",
      projectId: "one-time-p",
      storageBucket: "one-time-p.appspot.com",
      messagingSenderId: "801678203087"
    };
    firebase.initializeApp(config);    
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
