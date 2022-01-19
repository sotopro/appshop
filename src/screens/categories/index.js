 import React from 'react';
 import {
   SafeAreaView,
   Text,
   View,
   Button
 } from 'react-native';

 import styles from './styles';
 
 const Categories = ({navigation}) => {
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>Categories</Text>
         <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Categories;
 