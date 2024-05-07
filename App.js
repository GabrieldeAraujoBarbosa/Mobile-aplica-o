import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from './src/firebaseConnection'
import { useState, useEffect } from 'react'

export default function App() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuario, setUsuario] = useState('')

  asynt function logar() {
    await firebase.auth().sighInWithEmailAndPassword(email, senha).then((value) => {
      alert("Bem-vindo(a): "+ value.user.email)
    })

  }
  
  
  
  
  
  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha).then((value) => {
      alert("Usúario criado: "+ value.user.email)
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password') {
        alert("A sua senha deve possuir pelo menos 6 caracteres")
        return
      }
      if(error.code === 'auth/invalid-email') {
        alert("Esse e-mail é inválido. Tente novamente.")
        return
      }
      else {
        alert("Ops! Algo deu errado. Tente novamente")
        return
      }
    }) 
  }

  return (
    <View style={styles.container}>
    <TextInput
     style={styles.input}
     onChangeText={(texto) => setEmail(texto)}
     value={email}
     placeholder='Digite o seu e-mail'
    />
    <TextInput
     style={styles.input}
     onChangeText={(texto) => setSenha(texto)}
     value={senha}
     placeholder='Digite a sua senha'
    />
    <Button
    title='Cadastrar'
    onPress={cadastrar}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5
  }
});
