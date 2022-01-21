import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={[styles.containerTouchable, {backgroundColor: item.color}]}
            onPress={() => onSelected(item)}
        >
        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default CategoryItem;
