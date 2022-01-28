 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   FlatList,
   View,
 } from 'react-native';
import { BREADS } from '../../utils/data/breads';
import { useDispatch, useSelector } from 'react-redux';
import { filterBreads, selectBread } from '../../store/actions/breads.action';
import ProductItem from '../../components/products-item/index';
import styles from './styles';
 
 const Products = ({navigation, route}) => {
  
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBread)
  const category = useSelector(state => state.categories.selected);
  
  const handleSelectedProduct = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('ProductDetail', 
      {
        name: item.name,
      }
    );
  }

  const renderProducts= ({item}) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, [])

   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
         data={categoryBreads}
         renderItem={renderProducts}
         keyExtractor={item => item.id}
       />
    </View>
  </SafeAreaView>
   );
 };
 
 
 
 export default Products;
 