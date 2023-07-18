import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import CategoryEstate from '../../../screens/homepage/CategoryEstate';

const RenderSearchResult:React.FC<any> = ({route}) => {
  const {cityData, cityName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderWithBackBtn />
          <Text style={styles.typeText}>
            {/* <Text style={styles.typeTitle}>{route.params.title} </Text> */}
            Properties in
            <Text style={styles.cityname}> {cityName}</Text>
          </Text>
        </View>
        <CategoryEstate cityData={cityData} />
      </View>
    </SafeAreaView>
  );
};

export default RenderSearchResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: responsiveScreenHeight(2),
        paddingRight: responsiveScreenWidth(18)
    },
    typeText: {
        paddingTop: responsiveScreenHeight(1.5),
        fontSize: responsiveFontSize(3),
    },
    typeTitle: {
    
    },
    cityname: {
        color: '#8BC83F',
    },
});
