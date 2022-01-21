 import React from 'react';
 import {
   SafeAreaView,
   View,
   FlatList
 } from 'react-native';
import CategoryItem from '../../components/categories-item/index';
import { CATEGORIES } from '../../utils/data/categories';

 import styles from './styles';
 
 const Categories = ({navigation}) => {
   const handleSelectedCategory = (item) => {
    navigation.navigate('Products', 
      {
        categoryId: item.id,
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
            data={CATEGORIES}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Categories;
 