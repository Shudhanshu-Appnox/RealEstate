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


const DetailedPage = ({route}: any) => {
  const {data} = route.param;
  console.log(data)
 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text>
          {data.location}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {},
});
