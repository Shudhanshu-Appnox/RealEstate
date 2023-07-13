import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SearchPropertyService} from '../../services/properties';
import { useNavigation } from '@react-navigation/native';

const CategoryEstate: React.FC<any> = ({cityName}) => {
  const heartImage = require('../../../assets/images/Heart.png');
  const starImage = require('../../../assets/images/Star.png');
  const locationImage = require('../../../assets/images/Location.png');
  const mainImage = require('../../../assets/images/image26.png');
  const [cityData, setCityData] = useState([]);
  const navigation = useNavigation();
  const GetPropertyData = async () => {
    try {
      const res = await SearchPropertyService(cityName);
      
      const {result} = res.data;
      
      if (result.rows) {
        setCityData(result.rows);
      } else {
        setCityData([]);
      }
    } catch (error) {
      Alert.alert('', 'Error');
    }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);

  type ItemData = {
    id: string;
    title: string;
  };
  
  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  type ItemProps = {image: string};
  const getItemCount = () => 1;

  const Item = ({data}: any) => (
   
      <TouchableOpacity onPress={() => navigation.navigate('DetailedPage' as never, {data})} style={styles.container}>
        <View style={styles.featuredCard}>
          <ImageBackground style={styles.imageContainer} source={mainImage}>
            <TouchableOpacity style={styles.heartContainer}>
              <Image style={styles.heart} source={heartImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {data.price}
                <Text style={{fontSize: 8}}>/Month</Text>
              </Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailesHeadertext}>{data.title}</Text>
              <View style={styles.ratingContainer}>
                <Image style={styles.star} source={starImage} />
                <Text style={{fontSize: 10}}>{data.rating}</Text>
                <Image style={styles.star} source={locationImage} />
                <Text style={{fontSize: 10}}>{data.location}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <VirtualizedList
      showsVerticalScrollIndicator={false}
        data={cityData}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveScreenWidth(1),
  },

  featuredCard: {
    flexDirection: 'row',
    borderRadius: 40,
    backgroundColor: '#F5F4F8',
    padding: responsiveScreenWidth(1.5),
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    alignItems: 'flex-end',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    gap: responsiveHeight(9.5),
    paddingRight: responsiveScreenWidth(1.5),
    paddingTop: responsiveScreenHeight(1),
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    borderRadius: 50,
    backgroundColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(3),
    height: responsiveHeight(1.5),
  },
  button: {
    width: responsiveWidth(22),
    padding: responsiveScreenWidth(2),
    backgroundColor: '#234F68',
    borderRadius: 8,

    // padding: responsiveHeight(2),
  },
  details: {
    padding: responsiveScreenWidth(2),
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  star: {
    width: 9,
    height: 9,
  },
  price: {},
  detailsHeader: {
    width: responsiveScreenWidth(30),
    gap: responsiveHeight(1),
    // marginHorizontal: responsiveScreenWidth(2),
    // marginVertical: responsiveScreenHeight(1),
  },
  detailesHeadertext: {
    fontSize: 12,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CategoryEstate;
