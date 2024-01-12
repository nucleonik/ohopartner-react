import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const AnalyticsScreen = ({navigation}) => {
  const [openModal, setOpenModal] = React.useState(false)
  const transparent = 'rgba(0,0,0,0.5)';
  function closeBranchModal () {
    setOpenModal(false);
  }
  function renderBranchModal() {
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
          }}>
            <TouchableOpacity onPress={closeBranchModal}>
            <View
            >
              <Text
              style={{
                fontSize: 22,
                marginLeft: 20,
                marginTop: 25,
              }}>All Branch</Text>
              <Text
              style={{
                fontSize: 22,
                marginLeft: 20,
                marginTop: 40,
              }}>Yum Cha District, Gulshan</Text>
              <Text
              style={{
                fontSize: 22,
                marginLeft: 20,
                marginTop: 40,
              }}>Yum Cha District, Dhanmondi</Text>
              <Text
              style={{
                fontSize: 22,
                marginLeft: 20,
                marginTop: 40,
              }}>Yum Cha District, Uttara</Text>
            </View></TouchableOpacity>
            
          </View>
        </View>
       
      </Modal>
    )
  }
  return (
    <View
    style={{
      flex:1,
      backgroundColor: 'white',
    }}>
      <View style={{
        marginLeft: 15,
        marginTop: 25,
      }}>
      <Text
      style={{
        fontSize: 16,
        width: 350,
        lineHeight: 25,
      }}>
        You can find basic analytics of your restaurant in this section
      </Text>
      <Text
      style={{
        fontSize: 20,
        fontWeight: 600,
        marginTop: 25,
        marginBottom: 25,
      }}>
        Filter by Search
      </Text>
      <Text
      style={{
        fontSize: 16,
        width: 350,
        lineHeight: 25,
      }}>
        Select the branch name using the below button in order to see the analytics of a specific branch.
      </Text>
      </View>
      
      <TouchableOpacity onPress={() => setOpenModal(true)}>
      <LinearGradient
      
          colors={['rgba(196, 35, 83, 30)', 'rgba(25, 4, 10, 40)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.05, 1.1771]}
          style={{
            marginLeft: 15,
            marginTop: 20,
            height: 60,
            width: 350,
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
          style={{
            marginLeft: -4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 280,
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/branchscreen.png')}/>      
            <Text
            style={{
              textAlign: 'center',
              color: '#fff'
            }}>
              Branch Names
            </Text>
            <Image source={require('../../assets/downarrow.png')}/>
          </View>

        </LinearGradient>
        </TouchableOpacity> 
            {renderBranchModal()}
      
    </View>
  );
};

export default AnalyticsScreen;
