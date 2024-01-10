import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, } from 'react-native';
import React from 'react';

const Authentication = () => {
  return (
    <View>
    <View style={{
        flex: 1,
        paddingTop: 100,
        paddingLeft: 25,
        flexDirection: 'column',
        
      }}>
        
        <View>
          <Image style={{
            height: 80,
            width: 170,
          }} source={require('/Users/asif.hossain/OneDrive/Pictures/oho/my-app/assets/ohologo.png')}></Image>
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
          
        }} source={require('/Users/asif.hossain/OneDrive/Pictures/oho/my-app/assets/zig.png')}/>
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
          <Image source={require('/Users/asif.hossain/OneDrive/Pictures/oho/my-app/assets/email_icon.png')}/>
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
          <Image source={require('/Users/asif.hossain/OneDrive/Pictures/oho/my-app/assets/password_icon.png')}/>
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
          <Image source={require('/Users/asif.hossain/OneDrive/Pictures/oho/my-app/assets/password_hide_icon.png')}/>
          </View>
          </View>
          <View
          style={{
            flex: 1,
            marginTop: 15,
            marginRight: 15,
            alignItems: 'flex-end'
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: 700,
  
            }}>
              Forgot Password
            </Text>
          </View>
          
  
        <StatusBar style="auto" />
      </View></View>
  )
}

export default Authentication