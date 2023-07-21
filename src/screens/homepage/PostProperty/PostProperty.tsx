import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TypeOfProperty from './TypeOfProperty';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import { useNavigation } from '@react-navigation/native';

const PostProperty = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [areaType, setAreaType] = useState<'residential' | 'commercial'>(
    'residential',
  );
  const [lookingTo, setLookingTo] = useState<'Sell' | 'Rent / Lease'>('Sell');
  const navigation = useNavigation()

//   const Validate = () => {

//   }
  const handleNext = () => {
    navigation.navigate('PostPropertySecond' as never)
    // const isValid = Validate()
    // if(isValid) {

    // }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.hamBurgerMenu}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Ionicons name="close" size={responsiveWidth(10)} />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.headerItems}>
       <View style={styles.hamBurger}>
       <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Ionicons name="menu" size={responsiveWidth(10)} />
        </TouchableOpacity>
       </View>
        <View style={styles.basicDetails}>
          <Text style={styles.steps}>Step 1 of 3</Text>
          <Text style={styles.basicDetailsText}>Add Basic Details</Text>
          <Text>Your Intent, Property type & Contact details</Text>
          <View style={styles.main}>
            <Text style={styles.pb10}>You're Looking to ? </Text>
            <View style={styles.lookingTo}>
              <TouchableOpacity
                onPress={() => {
                  setLookingTo('Sell');
                }}
                style={
                  lookingTo === 'Sell'
                    ? styles.pressedSellrent
                    : styles.Sellrent
                }>
                <Text>Sell</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setLookingTo('Rent / Lease');
                }}
                style={
                  lookingTo === 'Rent / Lease'
                    ? styles.pressedSellrent
                    : styles.Sellrent
                }>
                <Text>Rent/Lease</Text>
              </TouchableOpacity>
            </View>
            <Text>What King Of Property ?</Text>
            <View style={styles.propertyTYpe}>
              <TouchableOpacity
                onPress={() => {
                  setAreaType('residential');
                }}
                style={
                  areaType === 'residential'
                    ? styles.typeColor
                    : styles.residential
                }>
                <Text>Residential</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAreaType('commercial');
                }}
                style={
                  areaType === 'commercial'
                    ? styles.typeColor
                    : styles.residential
                }>
                <Text>Commercial</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TypeOfProperty />
          <View style={{marginTop: responsiveHeight(4)}}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default PostProperty;

const styles = StyleSheet.create({
  hamBurgerMenu: {
    flex: 1,
    marginTop: responsiveScreenWidth(10),
  },
  hamBurger: {
    paddingHorizontal: responsiveScreenWidth(3.5)
  },
  headerItems: {
    gap: responsiveHeight(2)
  },
  steps: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetails: {
    paddingHorizontal: responsiveScreenWidth(5),
    gap: responsiveHeight(4),
    
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
    main: {
    
    },
  propertyTYpe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveScreenHeight(2),
    gap: responsiveScreenWidth(7),
  },
  residential: {
    borderWidth: responsiveWidth(0.1),
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
  
  typeColor: {
    borderWidth: responsiveWidth(0.3),
    borderColor: '#8BC83F',
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
  pb10: {
    paddingTop: responsiveScreenHeight(2),
  },
  lookingTo: {
    paddingVertical: responsiveScreenHeight(1.8),
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
  },

  bronPress: {
    borderColor: '#8BC83F',
  },
  Sellrent: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: 'white',
    padding: 8,
  },
  pressedSellrent: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    padding: 8,
  },
});
