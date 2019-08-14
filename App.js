import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginLogo}>
          <Image style={styles.logoIcon} source={require("./src/logo.png")} />
          <Text
            style={{
              color: "white",
              fontSize: 20
            }}
          >
            WOPEN ENGLISH
          </Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email or Phone"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener("login")}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableHighlight>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              alignSelf: "stretch",
              marginHorizontal: 20,
              marginBottom: 30
            }}
          >
            <TouchableHighlight
              style={styles.buttonRegister}
              onPress={() => this.onClickListener("register")}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                Sign up for Wopen English
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttonForgotPassWord}
              onPress={() => this.onClickListener("restore_password")}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                Forgot the password
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDB2C3"
  },
  loginLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoIcon: {
    width: 150,
    height: 150
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 0,
    borderRadius: 10,
    alignSelf: "stretch",
    marginHorizontal: 20
  },
  loginButton: {
    backgroundColor: "#00009E"
  },
  loginText: {
    color: "white"
  }
});
