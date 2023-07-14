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
<<<<<<< Updated upstream
import { useNavigation } from '@react-navigation/native';
=======
import {useNavigation} from '@react-navigation/native';
import ImageSlider from '../../component/common/ImageSlider/ImageSlider';
>>>>>>> Stashed changes

const CategoryEstate: React.FC<any> = ({cityName}) => {
  const heartImage = require('../../../assets/images/Heart.png');
  const starImage = require('../../../assets/images/Star.png');
  const locationImage = require('../../../assets/images/Location.png');
  const mainImage = require('../../../assets/images/image26.png');

  const [cityData, setCityData] = useState([]);
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
   
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
=======
    <TouchableOpacity style={styles.container}>
      <View style={styles.featuredCard}>
        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailesHeadertext}>{data.title}</Text>
            <View style={styles.ratingContainer}>
              <Image style={styles.star} source={locationImage} />
              <Text style={{fontSize: 10}}>{data.location}</Text>
            </View>
          </View>
        </View>
        <ImageBackground style={styles.imageContainer} source={mainImage}>
          <TouchableOpacity style={styles.heartContainer}>
            <Image style={styles.heart} source={heartImage} />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={{}}>
          {data.price}
        </Text>
      </View>
    </TouchableOpacity>
>>>>>>> Stashed changes
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

    backgroundColor: 'white',
  },

  featuredCard: {
<<<<<<< Updated upstream
    flexDirection: 'row',
    borderRadius: 40,
=======
    width: responsiveWidth(94),
    borderRadius: responsiveWidth(10),
>>>>>>> Stashed changes
    backgroundColor: '#F5F4F8',
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: responsiveScreenWidth(83),
    height: responsiveScreenHeight(20),
    marginVertical: responsiveScreenHeight(4),
    marginHorizontal: responsiveScreenWidth(6),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8.7),
    height: responsiveHeight(4),
    borderRadius: responsiveScreenWidth(50),
    backgroundColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(3),
    height: responsiveHeight(1.5),
  },
  // padding: responsiveHeight(2),

  details: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.4)
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.6),
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
