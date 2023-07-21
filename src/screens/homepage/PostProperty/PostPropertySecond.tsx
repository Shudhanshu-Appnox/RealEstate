import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateCityName} from '../../../redux/reducers/filterReducer';

const PostPropertySecond = () => {
  const dispatch = useDispatch();
  const handleCityName = () => {
    dispatch(UpdateCityName(''));
  };

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.buttonBack}>
          <HeaderWithBackBtn />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.steps}>Step 2 of 3</Text>
          <Text style={styles.basicDetailsText}>Add Basic Details</Text>
          <Text>Your Intent, Property type & Contact details</Text>
        </View>
        <View>
          <Text style={styles.locatedText}>Where is it located ?</Text>
          <View style={styles.addCityNameContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCityName' as never)}
              style={styles.addCityName}>
              <Text>City</Text>
              <Ionicons style={styles.addFont} name={'add'} />
            </TouchableOpacity>

            {cityName ? (
              <View style={styles.showCityName}>
                <Text>{cityName}</Text>
                <TouchableOpacity onPress={() => handleCityName()}>
                  <Ionicons style={styles.removeFont} name={'close'} />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
        <View>
          <Text style={styles.locatedText}>Add Rooms Details</Text>
          <View>
            <Text></Text>
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPropertySecond;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveScreenWidth(4),
    gap: responsiveHeight(3)
  },
  buttonBack: {
    marginBottom: responsiveScreenHeight(6),

  },
  headerText: {},
  steps: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  locatedText: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '500'
  },
  addCityNameContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.1),
    borderRightWidth: 0,
    // marginHorizontal: responsiveScreenWidth(5),
    padding: 5,
    gap: responsiveWidth(5),
  },
  addCityName: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    gap: 5,
  },
  showCityName: {
    borderWidth: responsiveWidth(0.3),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    padding: 5,
  },
  addFont: {
    fontSize: responsiveFontSize(3),
  },
  removeFont: {
    fontSize: responsiveFontSize(2.5),
  },
});
