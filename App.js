import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, Modal,  TouchableOpacity } from 'react-native';
import React from 'react';
import Authentication from './components/pages/Authentication';
import {NavigationContainer} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
const [openModal, setOpenModal]= React.useState(false)
function openForgotPasswordModal() {
  setOpenModal(true);
}

function closeForgotPasswordModal() {
  setOpenModal(false);
}
const transparent = 'rgba(0,0,0,0.5)'; 
function renderModal() {

  return (
    <Modal 
    visible={openModal} 
    animationType='none' 
    transparent={true}>
    <TouchableOpacity
          style={{
            flex: 1,
            width: '100%',
            height: '100%'
          }}
          onPress={closeForgotPasswordModal}
        >
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: transparent,
      }}>
        <View style={{
          backgroundColor: 'white',
          padding: 15,
          width: '90%',
          height: 500,
          borderRadius: 10,
        }}>
          <Text>Why did you forgot your password?</Text>
          <TouchableOpacity onPress={closeForgotPasswordModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>  
    </Modal>
  )
  
}
  return (
    <View style={{
      flex: 1,
      paddingTop: 120,
      paddingLeft: 25,
      flexDirection: 'column',
      
    }}>
      
      <View>
        <Image style={{
          height: 80,
          width: 170,
        }} source={require('../my-app/assets/ohologo.png')}></Image>
      </View>
      
      <View style={{
        flexDirection: 'row'
      }}>
      <Text style={{
        fontSize: 25,
        fontWeight: 600,
        paddingRight: 5,
      }}>Host</Text>
      <Text style={{
        fontSize: 25,
        paddingRight: 5,
      }}>the</Text>
      <Text style={{
        fontSize: 25,
        fontWeight: 600,
      }}>Perfect Date</Text>
      
      </View>
      <View style={{
        marginTop: 15,
      }}> 
      <Image style={{
        width: 240,
        height: 30
        
      }} source={require('../my-app/assets/zig.png')}/>
      </View>
      <View
       style={{
        marginTop: 40,
        width: 350
       }}>
      <Text style={{
        fontSize: 16,
        lineHeight: 24
      }}>
        To create a safe and delightful dinning experience, we collaborate with local cafes and restaurants, just like yours. Our goal is to enable our users to meet their potential partners ina a secure settings.
      </Text></View>
      <View
      style={{
        marginTop: 34,
        flexDirection: 'row'
      }}>
      
        <TextInput 
        style={{
          height: 50, 
          borderColor: '#eee', 
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1, 
          color:'#595959',
          width: 290,
          paddingLeft: 15,
        }}
        placeholder='Enter your email'

        autoCapitalize='none'
        autoCorrect={false}>
          
        </TextInput>
        <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          align: 'center',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#eee',
          width: 50

        }}>
        <Image source={require('../my-app/assets/email_icon.png')}/>
        </View>
        </View>
        <View
      style={{
        marginTop: 15,
        flexDirection: 'row'
      }}>
      
        <TextInput 
        style={{
          
          height: 50, 
          borderColor: '#eee', 
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1, 
          color:'#595959',
          width: 233,
          paddingLeft: 15,
          
        }}
        placeholder='Type your password'
        secureTextEntry={true}

        autoCapitalize='none'
        autoCorrect={false}
        >
        </TextInput>
        <View
        style={{
          
          justifyContent: 'center',
          alignContent: 'center',
          align: 'center',
          borderWidth: 1,
          borderColor: '#eee',
          width: 50,
          paddingLeft: 7,
          marginRight: 7,
          
        }}>
        <Image source={require('../my-app/assets/password_icon.png')}/>
        </View>
        <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          align: 'center',
          borderWidth: 1,
          borderColor: '#eee',
          width: 50,
          paddingLeft: 7,
        }}>
        <Image source={require('../my-app/assets/password_hide_icon.png')}/>
        </View>
        </View>
        <TouchableOpacity
        onPress={() => setOpenModal(true)}>
        <View
        style={{
          
          marginTop: 15,
          marginRight: 25,
          alignItems: 'flex-end',
          
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 700,

          }}>
            Forgot Password
          </Text>
        </View>
        </TouchableOpacity>
     
        <NavigationContainer>
        <TouchableOpacity>
        <View style={{
          justifyContent: 'flex-start'
        }}>
        <LinearGradient 
        colors={['rgba(196, 35, 83, 100)' , 'rgba(25, 4, 10, 100)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.05, 1.1771]}
        style={{
          marginTop: 40,
          height: 60,
          width: 340,
          borderRadius: 22,
          alignItems: 'center',
          justifyContent: 'center',
          
          }}>
            <Text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 600,
            }}>Sign in</Text>
        </LinearGradient>
        </View>
        </TouchableOpacity>
        </NavigationContainer>
      <StatusBar style="auto" />
      {renderModal()}
    </View>
  );
}

