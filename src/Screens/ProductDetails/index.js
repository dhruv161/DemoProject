import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import theme from 'src/Utils/theme';
import Loader from "src/Components/Loader";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import styles from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import { verticalScale } from "react-native-size-matters";
import { SwiperFlatList, Pagination } from 'react-native-swiper-flatlist';

const ProductDetails = ({ navigation, route }) => {
  console.log('route', route.params.data)
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState();

  const onProductDeatilsSucess = async (data) => {
    setProductDetails(data);
    setLoading(false);
  };

  const getProductDeatils = () => {
    setLoading(true);
    Api.getApicall(
      ApiConstants.BASE_URL + "products/" + route.params.data.toString(),
      onProductDeatilsSucess
    );
  }

  useEffect(() => {
    getProductDeatils()
  }, []);

  const cardItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item }}
          style={styles.image}
        />
      </View>
    )
  }

  const customPagination = (props) => {
    return (
      <Pagination
        {...props}
        paginationStyle={styles.paginationContainer}
        paginationStyleItem={styles.pagination}
        paginationDefaultColor="#B8C7CD"
        paginationActiveColor="#003549"
      />
    );
  };


  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="close"
        size={verticalScale(20)}
        color={theme.WHITE}
        style={{ alignSelf: 'flex-start', paddingHorizontal: verticalScale(20), paddingVertical: verticalScale(10) }}
      />
      <SwiperFlatList
        showPagination
        data={productDetails?.images}
        renderItem={cardItem}
        PaginationComponent={customPagination}
      />
      </View>
      <View style={{ flex: 1, marginTop: verticalScale(30) }}>
      <Text style={styles.title}>{productDetails?.brand}</Text>
      <Text style={styles.description}>{productDetails?.price}</Text>
      <Text style={styles.description}>{productDetails?.description}</Text>
      </View>

    </View>
  );
};

export default ProductDetails;
