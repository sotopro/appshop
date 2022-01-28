 import React from 'react';
 import {
   SafeAreaView,
   View,
   FlatList
 } from 'react-native';
import CategoryItem from '../../components/categories-item/index';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action';
 import styles from './styles';
 
 const Categories = ({navigation}) => {
   const categories = useSelector(state => state.categories.categories);
   const dispatch = useDispatch();
   
   const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', 
      {
        name: item.title,
        color: item.color,
      }
    );
  }

  const renderCategories = ({item}) => {
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    )
  }

   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <FlatList
            data={categories}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Categories;
 