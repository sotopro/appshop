import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

const OrderItem = ({item}) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.details}>
          <Text>$ {item.total}</Text>
        </View>
    </View>
  );
};



export default OrderItem;
