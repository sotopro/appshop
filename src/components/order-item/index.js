import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const OrderItem = ({item, onDelete}) => {
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
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-outline" size={20} />
        </TouchableOpacity>
        </View>
        
    </View>
  );
};



export default OrderItem;
