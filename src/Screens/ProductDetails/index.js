import React, {useLayoutEffect, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import theme from 'src/Utils/theme';
import Loader from 'src/Components/Loader';
import * as Api from 'src/Utils/Api';
import ApiConstants from 'src/Utils/apiConstants';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {verticalScale} from 'react-native-size-matters';
import {SwiperFlatList, Pagination} from 'react-native-swiper-flatlist';

const ProductDetails = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [isReadMoreShow, setIsReadMoreShow] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [productDetails, setProductDetails] = useState();
  const onProductDeatilsSucess = async data => {
    data?.description?.length > 60
      ? setIsReadMoreShow(true)
      : setIsReadMoreShow(false);
    setProductDetails(data);
    setLoading(false);
  };

  const getProductDeatils = () => {
    setLoading(true);
    Api.getApicall(
      ApiConstants.BASE_URL + 'products/' + route.params.data.toString(),
      onProductDeatilsSucess,
    );
  };

  const onReadMoreClick = () => {
    setShowFullContent(prev => !prev);
  };

  useLayoutEffect(() => {
    getProductDeatils();
  }, []);

  const cardItem = ({item}) => {
    return (
      <View>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  const customPagination = props => {
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
    <ScrollView style={styles.container}>
      <Loader loading={loading} />
      <View>
        {/* Close Icon */}
        <AntDesign
          onPress={() => navigation?.navigate('ProductList')}
          name="close"
          size={verticalScale(20)}
          color={theme.WHITE}
          style={styles.icon}
        />
        <SwiperFlatList
          showPagination
          data={productDetails?.images}
          renderItem={cardItem}
          PaginationComponent={customPagination}
        />
      </View>
      {!loading && (
        <View style={styles.footerContainer}>
          <Text style={styles.dateTxt}>24th June at 11:23 AM</Text>
          <Text style={styles.title}>{productDetails?.brand}</Text>
          <Text style={styles.description}>
            {showFullContent
              ? productDetails?.description
              : `${productDetails?.description?.slice(0, 60)}...`}
            {isReadMoreShow && (
              <Text style={styles.readmoreText} onPress={onReadMoreClick}>
                {showFullContent ? 'read less' : 'read more'}
              </Text>
            )}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ProductDetails;
