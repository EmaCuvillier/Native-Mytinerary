import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ScrollView,
  Alert
} from 'react-native';
import Header from '../components/Header'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const SignUp = (props)=> {
  const [nuevoUsuario, setNuevoUsuario] = useState({firstName:'', lastName:'',email:'',password:'',picture:'',country:'native'})
  const capturarInput = (e, name) =>{
    const campo = name
    const valor = e
    setNuevoUsuario({
        ...nuevoUsuario,
        [campo]: valor
    })
  }
  const enviarUsuario = async()=>{
    const respuesta = await props.crearUsuario(nuevoUsuario)
      if(respuesta){
      Alert.alert(
        "Error",
        `${respuesta.details[0].context.label}. ${respuesta.details[0].message} `,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }
  return (<>
      <StatusBar/> 
      <Header  props={props} style={styles.navLogin}/>
      <ScrollView style={styles.containerFormSignUp}>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <Text style={styles.loginTitleText}>SignUp</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(e)=>capturarInput(e, "firstName")}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(e)=>capturarInput(e, "lastName")}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(e)=>capturarInput(e, "email")}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  onChangeText={(e)=>capturarInput(e, "password")}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Image url</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(e)=>capturarInput(e, "picture")}
                />
              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText} onPress={()=>enviarUsuario()}>Sign Up</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerFormSignUp:{
    marginTop: 80,
  },
  centerizedView:{
    height: 530,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: "center"
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 8,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  crearUsuario: usersActions.crearUsuario
}
export default connect(null,mapDispatchToProps)(SignUp)