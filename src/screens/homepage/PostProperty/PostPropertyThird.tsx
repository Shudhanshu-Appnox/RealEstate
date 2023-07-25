import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import {useNavigation} from '@react-navigation/native';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../component/common/inputs/inputComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostPropertyThird = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const handleNext = () => {
    navigation.navigate('PropertyFeatures' as never);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.btnBack}>
          <HeaderWithBackBtn />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.headerText}>
            <Text style={styles.steps}>Step 3 of 3</Text>
            <Text style={styles.basicDetailsText}>Photos & Pricing</Text>
          </View>
          <Text style={styles.textPropertyPhoto}>Add property photos</Text>
          <TouchableOpacity style={styles.uploadPhoto}>
            <Ionicons
              name="image"
              size={responsiveWidth(18)}
              color={'#F5F4F8'}
            />
            <Text style={styles.addPhotoText}>+ Add Photos</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text>Pricing Details</Text>
            <CustomTextInput
              onChangeText={setText}
              value={text}
              placeholder="Enter expected price"
            />
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPropertyThird;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(3),
  },
  btnBack: {
    marginVertical: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(6),
  },
  headerText: {
    gap: responsiveHeight(2),
  },
  steps: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  textPropertyPhoto: {
    marginTop: responsiveHeight(3.7),
    marginBottom: responsiveHeight(1),
  },
  uploadPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginVertical: responsiveScreenHeight(4),
    borderRadius: responsiveWidth(4),
    backgroundColor: '#DFDFDF',
    width: responsiveWidth(93),
    height: responsiveScreenHeight(30),
  },
  addPhotoText: {
    fontSize: responsiveFontSize(3),
    color: '#8BC83F',
  },
  inputContainer: {
    marginVertical: responsiveScreenHeight(3),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(2),
  },
});
