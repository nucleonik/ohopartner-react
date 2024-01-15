import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          marginLeft: 15,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            width: 350,
            lineHeight: 25,
          }}
        >
          You can navigate to a different section of the app using the menu belw
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginTop: 25,
          }}
        >
          OUTLETS
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('All My Outlets')}>
          <View
            style={{
              width: 350,
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EDEDED',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <Image source={require('../../assets/alloutlets.png')} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                All My Outlets
              </Text>
            </View>
            <Image source={require('../../assets/sidearrow.png')} />
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginTop: 25,
            }}
          >
            INFORMATION
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: 350,
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EDEDED',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <Image source={require('../../assets/faq.png')} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                FAQ
              </Text>
            </View>
            <Image source={require('../../assets/sidearrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Terms Of Use')}>
          <View
            style={{
              width: 350,
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EDEDED',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <Image source={require('../../assets/terms.png')} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Terms Of Use
              </Text>
            </View>
            <Image source={require('../../assets/sidearrow.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
          <View
            style={{
              width: 350,
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EDEDED',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <Image source={require('../../assets/privacy.png')} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Privacy Policy
              </Text>
            </View>
            <Image source={require('../../assets/sidearrow.png')} />
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginTop: 25,
            }}
          >
            SIGN OUT
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: 350,
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EDEDED',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <Image source={require('../../assets/signout.png')} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Sign Out
              </Text>
            </View>
            <Image source={require('../../assets/sidearrow.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default More;
