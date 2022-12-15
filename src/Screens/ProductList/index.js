import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import theme from 'src/Utils/theme';
import SearchBar from 'src/Components/SearchBar';
import Loader from 'src/Components/Loader';
import * as Api from 'src/Utils/Api';
import ApiConstants from 'src/Utils/apiConstants';
import styles from './style';
import { SwiperFlatList, Pagination } from 'react-native-swiper-flatlist';


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
  console.log('searchList ', searchList);
  console.log('orderList --- >>> ', orderList);
  console.log('searchText == >> == ', searchText);
  console.log('paginationInfo --- >>> ', paginationInfo);
  const [dataCount, setdataCount] = useState(0);
  const [searchDataCount, setSearchDataCount] = useState(0);
  console.log('dataCount --- ', dataCount);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const onProductListSucess = async data => {
    console.log('DATA', data);
    data?.products?.length > 0 ?setPaginationInfo({...data,isPaginationAllowed:true}):setPaginationInfo({...data,isPaginationAllowed:fasle});
    setOrderList(prevState => [...prevState, ...data?.products]);
    // orderList.lenght > 0 ? setOrderList(...orderList, ...data?.products) : setOrderList(data?.products);
    setLoading(false);
  };

  const onProductSearchSucess = async data => {
    console.log('DATA', data);
    data?.products?.length > 0
      ? setSearchList(prevState => ({
          ...data,
          products: [...prevState?.products, ...data?.products,],
          isPaginationAllowed: true
        }))
      : setSearchList(prev => ({...prev, isPaginationAllowed: false}));
    setLoading(false);
  };

  const getProductList = (limit, skip) => {
    console.log('getProductList ', paginationInfo?.limit * dataCount);
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
    // getProductList(dataCount * limitAndSkipCount);
  }, []);

  const getProductListSearch = (text, limit=10,skip=0) => {
    // setLoading(true);
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
    setSearchList(searchInitialState);
    getProductListSearch(text);
    // const filteredData = searchCredentialsList(credentials, text)
    // setOrderList(data?.products)
    setSearchText(text);
  };

  const onScrollHandler = () => {
    const incresedCount = dataCount + 1;
    if (paginationInfo?.total / paginationInfo?.limit > incresedCount) {
      setdataCount(pState => pState + 1);
      getProductList(
        paginationInfo?.limit,
        incresedCount * paginationInfo?.limit,
      );
      // setOnEndReachedCalledDuringMomentum(true);
      console.log('api call should not be hit ');
    }
  };

  const scrollHandlerForSearchedItem = () => {
    if (searchList?.isPaginationAllowed) {
      const skipNo = searchList?.limit + searchList?.skip;
      // const limitNo = !!searchList?.limit
      getProductListSearch(searchText, searchList?.limit, skipNo);
    }
  };


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

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login', { data: item.id })}>
      <View style={styles.mainCardView}>
      <SwiperFlatList
        showPagination
        data={item?.images}
        renderItem={cardItem}
        PaginationComponent={customPagination}
      />
      <View>
        <Text style={styles.title}>{item?.brand}</Text>
        <Text style={styles.description}>{item?.description}</Text>
        </View>
      </View>
     </TouchableWithoutFeedback>
  );

  const listEmptyComponent = () => (
    <View style={{marginTop: '45%', alignSelf: 'center'}}>
      <Image
        source={require('../../Assets/images/searchEmpty.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.noSearch}>No results found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <SearchBar
        searchPhrase={searchText}
        setSearchPhrase={setSearchText => search(setSearchText)}
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
          ListHeaderComponent={<View style={{width: '100%'}} />}
          ListFooterComponent={<View style={{width: '100%', height: 28}} />}
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
          ListHeaderComponent={
            <View style={{width: '100%'}} />
          }
          ListFooterComponent={<View style={{width: '100%', height: 28}} />}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ProductList;