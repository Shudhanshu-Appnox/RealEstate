import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../component/common/inputs/inputComponent';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';

const PropertyFeatures = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.backButtonHeader}>
          <HeaderWithBackBtn />
        </View>
        <Text style={styles.textHeader}>
          Tell us the Top 4 unique property features
        </Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            onChangeText={setText}
            value={text}
            placeholder="Feature 1"
          />
          <CustomTextInput
            onChangeText={setText}
            value={text}
            placeholder="Feature 2"
          />
          <CustomTextInput
            onChangeText={setText}
            value={text}
            placeholder="Feature 3"
          />
          <CustomTextInput
            onChangeText={setText}
            value={text}
            placeholder="Feature 4"
          />
        </View>
        <View>
          <ExploreButton title="Confirm and post property" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PropertyFeatures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(3.5),
    marginVertical: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(2),
  },
  backButtonHeader: {
    marginBottom: responsiveScreenHeight(5),
  },
  textHeader: {
    fontSize: responsiveWidth(7),
  },
  inputContainer: {
    flex:1,
  },
});
