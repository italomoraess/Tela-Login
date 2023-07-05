import { useState } from 'react';
import { 
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';

export default function App() {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLoginBtn = () => {
    console.log(emailField)
    console.log(passwordField) 
  }

  const handleForgetBtn = () => {}
  
  const handleSignUpBtn = () => {}

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />

        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField}
            placeholder='Digite seu email'
            placeholderTextColor='#999'
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField}
            placeholder='*******'  
            placeholderTextColor='#999'
            secureTextEntry
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetBtn}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>  

        <TouchableOpacity style={styles.button} onPress={handleLoginBtn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tenho conta?</Text>
          <TouchableOpacity onPress={handleSignUpBtn}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>
            Criado por Italo Moraes
          </Text>
        </View>
        
      </View>
    </ScrollView>
  );
}
