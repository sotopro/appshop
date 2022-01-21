 import React from 'react';
 import {
   SafeAreaView,
   Text,
   View,
   Button
 } from 'react-native';

 import styles from './styles';
 
 const ProductDetail = ({navigation, route}) => {
   const { product } = route.params
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>{product.name}</Text>
         <Text>{product.description}</Text>
         <Text>{product.weight}</Text>
         <Text>$ {product.price}</Text>
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 