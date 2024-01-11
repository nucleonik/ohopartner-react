import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const Forgetpasswordmodal = () => {
  const [openModal, setOpenModal] = React.useState(false);

  function closeForgotPasswordModal() {
    setOpenModal(false);
  }
  const transparent = 'rgba(0,0,0,0.5)';
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
                source={require('/Users/rowno/OneDrive/Pictures/test1/my-app/assets/password_icon_gradient.png')}
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
                <Image
                  source={require('/Users/rowno/OneDrive/Pictures/test1/my-app/assets/email_icon.png')}
                />
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
};

export default Forgetpasswordmodal;
