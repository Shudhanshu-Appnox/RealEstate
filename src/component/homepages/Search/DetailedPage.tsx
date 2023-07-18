import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailedPage = ({route}: any) => {
  const heartImage = require('../../../../assets/images/Heart.png');
  const backgroundImage = require('../../../../assets/images/WingsTower.png');
  const shareImage = require('../../../../assets/images/Share.png');
  const propImage1 = require('../../../../assets/images/propImg1.png');
  const propImage2 = require('../../../../assets/images/propImg2.png');
  const propImage3 = require('../../../../assets/images/propImg3.png');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {},
});
