import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const TypeOfProperty = () => {
  const [areaType, setAreaType] = useState<
    | 'Apartment'
    | 'Independent House/Villa'
    | 'Independent/Builder Floor'
    | 'Plot/Land'
    | '1 RK/ Studio Aprtment'
  >();


  return (
    <SafeAreaView>
      <View style={styles.typeOfProperty}>
        <Text>Select Property Type</Text>
        <View style={{gap: responsiveScreenHeight(1)}}>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setAreaType('Apartment');
              }}
              style={
                areaType === 'Apartment' ? styles.typeColor : styles.noTypeColor
              }>
              <Text>Apartment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAreaType('Independent House/Villa');
              }}
              style={
                areaType === 'Independent House/Villa'
                  ? styles.typeColor
                  : styles.noTypeColor
              }>
              <Text>Independent House/Villa</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setAreaType('Independent/Builder Floor');
              }}
              style={
                areaType === 'Independent/Builder Floor'
                  ? styles.typeColor
                  : styles.noTypeColor
              }>
              <Text>Independent/Builder Floor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAreaType('Plot/Land');
              }}
              style={
                areaType === 'Plot/Land' ? styles.typeColor : styles.noTypeColor
              }>
              <Text>Plot/Land</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setAreaType('1 RK/ Studio Aprtment');
              }}
              style={
                areaType === '1 RK/ Studio Aprtment'
                  ? styles.typeColor
                  : styles.noTypeColor
              }>
              <Text>1 RK/ Studio Aprtment</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>More+</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default TypeOfProperty;

const styles = StyleSheet.create({
  typeOfProperty: {
    gap: responsiveScreenHeight(2),
    
  },
  propertyTYpe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(3),
  },

  commercial: {
    borderBottomWidth: 0,
  },
  typeColor: {
    borderWidth: responsiveWidth(0.3),
    borderColor: '#8BC83F',
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
  noTypeColor: {
    borderWidth: responsiveWidth(0.1),
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
});
