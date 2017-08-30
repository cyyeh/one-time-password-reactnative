import React, { Component } from 'react';
import firebase from 'firebase';
import {
	View, 
	Text
} from 'react-native';
import {
	FormLabel,
	FormInput,
	Button
} from 'react-native-elements';
import axios from 'axios';

const ROOL_URL = 'https://us-central1-one-time-p.cloudfunctions.net';

class SignInForm extends Component {
	state = { phone: '', code: '' }; //ES7

	handleSubmit = async () => {
		const { phone, code } = this.state;
		try {
			let { data } = await axios.post(`${ROOL_URL}/verifyOneTimePassword`, { 
				phone: phone, code: code 
			});

			firebase.auth().signInWithCustomToken(data.token);
		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return (
			<View>
				<View style={{ marginBottom: 10 }}>
					<FormLabel>Enter Phone Number</FormLabel>
					<FormInput 
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
					/>					
				</View>
				<View style={{ marginBottom: 10 }}>
					<FormLabel>Enter Code</FormLabel>
					<FormInput 
						value={this.state.code}
						onChangeText={code => this.setState({ code })}
					/>					
				</View>				
				<Button 
					onPress={this.handleSubmit}
					title={'Submit'} 
				/>
			</View>
		);
	}
}

export default SignInForm;