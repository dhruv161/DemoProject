import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  Pressable
} from 'react-native';
import SearchBar from 'src/Components/SearchBar';
import Loader from 'src/Components/Loader';
import * as Api from 'src/Utils/Api';
import ApiConstants from 'src/Utils/apiConstants';
import styles from './style';
import {SwiperFlatList, Pagination} from 'react-native-swiper-flatlist';
import {getSessionData} from '../../Utils/asyncStorage';
import {LOGIN_KEY} from '../../Utils/Api';

const ProductList = ({navigation}) => {
  const searchInitialState = {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
    isPaginationAllowed: true,
  };
  const [searchText, setSearchText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paginationInfo, setPaginationInfo] = useState(searchInitialState);
  const [orderList, setOrderList] = useState([]);
  const [searchList, setSearchList] = useState(searchInitialState);
  const [dataCount, setdataCount] = useState(0);

  const onProductListSucess = async data => {
    data?.products?.length > 0
      ? setPaginationInfo({...data, isPaginationAllowed: true})
      : setPaginationInfo({...data, isPaginationAllowed: fasle});
    setOrderList(prevState => [...prevState, ...data?.products]);
    setLoading(false);
  };

  const onProductSearchSucess = async data => {
    data?.products?.length > 0
      ? setSearchList(prevState => ({
          ...data,
          products: [...prevState?.products, ...data?.products],
          isPaginationAllowed: true,
        }))
      : setSearchList(prev => ({...prev, isPaginationAllowed: false}));
    setLoading(false);
  };

  const getProductList = (limit, skip) => {
    setLoading(true);
    Api.getApicall(
      ApiConstants.BASE_URL +
        ApiConstants.PRODUCT +
        '?limit=' +
        limit +
        '&skip=' +
        skip,
      onProductListSucess,
    );
  };
  useEffect(() => {
    getProductList(10, 0);
  }, []);

  const getProductListSearch = (text, limit = 10, skip = 0) => {
    if (searchList?.limit < searchList?.total) {
      Api.getApicall(
        ApiConstants.BASE_URL +
          'products/search?q=' +
          text +
          '&limit=' +
          limit +
          '&skip=' +
          skip,
        onProductSearchSucess,
      );
    } else {
      Api.getApicall(
        ApiConstants.BASE_URL + 'products/search?q=' + text,
        onProductSearchSucess,
      );
    }
  };

  const search = text => {
    setSearchText(text);
    setSearchList(searchInitialState);
    getProductListSearch(searchText);
  };

  const onScrollHandler = () => {
    const incresedCount = dataCount + 1;
    if (paginationInfo?.total / paginationInfo?.limit > incresedCount) {
      setdataCount(pState => pState + 1);
      getProductList(
        paginationInfo?.limit,
        incresedCount * paginationInfo?.limit,
      );
    }
  };
  
  const scrollHandlerForSearchedItem = () => {
    if (!(searchList?.products?.length === searchList?.total)) {
      const skipNo = searchList?.limit + searchList?.skip;
      getProductListSearch(searchText, searchList?.limit, skipNo);
    }
  };

  const onProductClick = item => async () => {
    const token = await getSessionData(LOGIN_KEY);
    !!token
      ? navigation?.navigate('ProductDetails', {data: item?.id})
      : navigation?.navigate('Login', {data: item?.id});
  };

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

  const renderItem = ({item, index}) => {
    return (
      <Pressable onPress={onProductClick(item)}>
        <View style={styles.mainCardView}>
          <SwiperFlatList
            showPagination
            data={item?.images}
            renderItem={cardItem}
            PaginationComponent={customPagination}
          />
          <View style={styles.titleDescContainer}>
            <Text style={styles.title}>{item?.brand}</Text>
            <Text style={styles.description}>
              {item?.description?.length > 60
                ? `${item?.description?.slice(0, 60)?.trim()}...`
                : item?.description}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyItemContainer} key={new Date().getTime() / 1000}>
        <Image
          source={require('../../Assets/images/searchEmpty.png')}
          style={styles.emptyImage}
        />
        <Text style={styles.noSearch}>No results found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <SearchBar
        searchPhrase={searchText}
        setSearchPhrase={setSearchText =>search(setSearchText)}
        clicked={clicked}
        setClicked={setClicked}
      />
      {searchText?.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchList?.products}
          onEndReached={() => scrollHandlerForSearchedItem()}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={listEmptyComponent}
          renderItem={renderItem}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orderList}
          onEndReached={() => onScrollHandler()}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ProductList;
