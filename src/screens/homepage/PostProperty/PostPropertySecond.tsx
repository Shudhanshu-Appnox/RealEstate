import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import OptionBtn from '../../../component/common/buttons/OptionBtn';
import ExploreButton from '../../../component/common/buttons/ExploreButton';

const PostPropertySecond = () => {
  const [noOfRooms, setNoOfRooms] = useState('');
  const [noOfBathRooms, setNoOfBathRooms] = useState('');
  const [noOfBalconies, setNoOfBalconies] = useState('');
  // const [availability, setAvailability] = useState('');
  const [noOfBedroomsError, setNoOfBedroomsError] = useState('');
  const [noOfBathroomsError, setNoOfBathroomsError] = useState('');
  const [noOfBalconiesError, setNoOfBalconiesError] = useState('');
  const dispatch = useDispatch();
  const handleCityName = () => {
    dispatch(UpdateCityName(''));
  };

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);

  const NoOfRooms = ['1', '2', '3', '4', '5', '5+'];
  const NoOfBathRooms = ['1', '2', '3', '4+'];
  const NoOfBalconies = ['1', '2', '3', 'More than 3'];
  // const availability = ['readyToMove', 'Under Construction'];
  const validate = () => {
    if(!noOfRooms) {
      setNoOfBedroomsError('Please select property');
      setNoOfBathroomsError('');
      setNoOfBalconiesError('')
      return false;
    } else if(!noOfBathRooms){
      
      setNoOfBedroomsError('');
      setNoOfBathroomsError('Please select bathrooms');
      setNoOfBalconiesError('');
      return false;
    } else if(!noOfBalconies) {
      setNoOfBedroomsError('');
      setNoOfBathroomsError('');
      setNoOfBalconiesError('Please select balconies');
      return false;
    } else { 
      setNoOfBedroomsError('');
      setNoOfBathroomsError('');
      setNoOfBalconiesError('');
      return true;
    }
}
const handleNext = () => {
  const isValid = validate();
  if(isValid) {
    navigation.navigate('PostPropertyThird' as never);
  }
  
};

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.buttonBack}>
            <HeaderWithBackBtn />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.steps}>Step 2 of 3</Text>
            <Text style={styles.basicDetailsText}>Property Details</Text>
          </View>

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
        <View style={{flex: 4}}>
          <Text style={styles.locatedText}>Add Rooms Details</Text>
          <Text style={styles.noOfBedroomsText}>No. of bedrooms</Text>
          <View style={styles.noOfBedrooms}>
            {NoOfRooms.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setNoOfRooms}
                style={
                  noOfRooms === option ? styles.colored : styles.notColored
                }
              />
            ))}
          </View>
          <Text style={styles.noOfBedroomsText}>No. of Bathrooms</Text>
          <View style={styles.noOfBedrooms}>
            {NoOfBathRooms.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setNoOfBathRooms}
                style={
                  noOfBathRooms === option ? styles.colored : styles.notColored
                }
              />
            ))}
          </View>
          <Text style={styles.noOfBedroomsText}>No. of Balconies</Text>
          <View style={styles.noOfBedrooms}>
            {NoOfBalconies.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setNoOfBalconies}
                style={
                  noOfBalconies === option ? styles.colored : styles.notColored
                }
              />
            ))}
          </View>
          <View>
            {/* <Text style={styles.noOfBedroomsText}>Availability</Text>
          <View style={styles.noOfBedrooms}>
            {availability.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setAvailability}
                style={
                  availability === option
                    ? styles.colored
                    : styles.notColored
                }
              />
            ))}
          </View> */}
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPropertySecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(4),
  },
  innerContainer: {
    flex: 3,
  },
  buttonBack: {
    marginBottom: responsiveScreenHeight(6),
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
  locatedText: {
    marginBottom: responsiveHeight(4)
  },
  addCityNameContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.1),
    borderRightWidth: 0,
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
  notColored: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(20),
    borderColor: 'gray',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveScreenHeight(1.9),
  },
  colored: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(20),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveScreenHeight(1.9),
  },
  noOfBedroomsText: {
    marginVertical: responsiveScreenHeight(2),
  },
  noOfBedrooms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(2),
  },
});
