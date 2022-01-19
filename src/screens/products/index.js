 import React from 'react';
 import {
   SafeAreaView,
   Text,
   View,
   Button
 } from 'react-native';

 import styles from './styles';
 
 const Products = ({navigation}) => {
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>Products</Text>
         <Button title="Go to Product Detail" onPress={() => navigation.navigate('ProductDetail')} />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Products;
 