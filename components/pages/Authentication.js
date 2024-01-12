import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import React from 'react';
import { Link } from '@react-navigation/native';
import Signinbutton from '../Signinbutton';
import Toplogoandtext from '../Toplogoandtext';

export default function Authentication() {
  const [openModal, setOpenModal] = React.useState(false);

  function closeForgotPasswordModal() {
    setOpenModal(false);
  }
  const transparent = 'rgba(0,0,0,0.5)';
  function renderModal() {
    return (
      <Modal visible={openModal} animationType="none" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: transparent,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              width: '90%',
              height: 350,
              borderRadius: 8,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 23,
                  marginLeft: 10,
                }}
              >
                <Image
                  style={{
                    height: 32,
                    width: 32,
                  }}
                  source={require('../../assets/password_icon_gradient.png')}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    marginLeft: 10,
                  }}
                >
                  Request New Password
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 30,
                  marginLeft: 10,
                  marginTop: 15,
                }}
              >
                Please enter your registered email below and tap the submit
                button. We will send you a new password in your email.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <TextInput
                  style={{
                    height: 50,
                    borderColor: '#eee',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                    color: '#595959',
                    width: 255,
                    paddingLeft: 15,
                    marginLeft: 10,
                    marginTop: 20,
                  }}
                  placeholder="Enter your email"
                  autoCapitalize="none"
                  autoCorrect={false}
                ></TextInput>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    align: 'center',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderColor: '#eee',
                    width: 50,
                    marginTop: 20,
                  }}
                >
                  <Image source={require('../../assets/email_icon.png')} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: 305,
                marginTop: 40,
              }}
            >
              <TouchableOpacity onPress={closeForgotPasswordModal}>
                <Text
                  style={{
                    fontSize: 20,
                    marginRight: 20,
                    letterSpacing: 2,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    letterSpacing: 2,
                    color: '#BE2653',
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    // <KeyboardAvoidingView
    //   style={{
    //     flex: 1,
    //   }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 120,
        paddingLeft: 25,
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      <TouchableWithoutFeedback
      // onPress={() => {
      //   Keyboard.dismiss();
      // }}
      >
        <>
          {!Keyboard.isVisible() && <Toplogoandtext />}

          <View
            style={{
              marginTop: 40,
              width: 350,
            }}
          >
            {!Keyboard.isVisible() && (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                }}
              >
                To create a safe and delightful dinning experience, we
                collaborate with local cafes and restaurants, just like yours.
                Our goal is to enable our users to meet their potential partners
                ina a secure settings.
              </Text>
            )}
          </View>
          <View
            style={{
              marginTop: 34,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={{
                height: 50,
                borderColor: '#eee',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                color: '#595959',
                width: 290,
                paddingLeft: 15,
              }}
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCorrect={false}
            ></TextInput>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                align: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderColor: '#eee',
                width: 50,
              }}
            >
              <Image source={require('../../assets/email_icon.png')} />
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={{
                height: 50,
                borderColor: '#eee',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                color: '#595959',
                width: 233,
                paddingLeft: 15,
              }}
              placeholder="Type your password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            ></TextInput>
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
              }}
            >
              <Image source={require('../../assets/password_icon.png')} />
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
              }}
            >
              <Image source={require('../../assets/password_hide_icon.png')} />
            </View>
          </View>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <View
              style={{
                marginTop: 15,
                marginRight: 25,
                alignItems: 'flex-end',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Forgot Password
              </Text>
            </View>
          </TouchableOpacity>
        </>
      </TouchableWithoutFeedback>
      <Link to={{ screen: 'Reservation', params: { id: 'jane' } }}>
        <Signinbutton />
      </Link>

      <StatusBar style="auto" />
      {renderModal()}
    </ScrollView>
    // </KeyboardAvoidingView>
  );
}
