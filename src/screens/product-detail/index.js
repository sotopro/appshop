 import React from 'react';
 import {
   SafeAreaView,
   Text,
   View,
   Button
 } from 'react-native';
 import { useSelector } from 'react-redux';

 import styles from './styles';
 
 const ProductDetail = ({navigation, route}) => {
   const bread = useSelector(state => state.breads.selected);
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>{bread.name}</Text>
         <Text>{bread.description}</Text>
         <Text>{bread.weight}</Text>
         <Text>$ {bread.price}</Text>
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 