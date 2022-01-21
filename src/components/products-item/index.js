import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const ProductItem = ({item, onSelected}) => {
  return (
    <View style={styles.container} >
        <TouchableOpacity 
            style={styles.containerTouchable}
            onPress={() => onSelected(item)}
        >
        <View>
            <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
            <Text style={styles.details}>$ {item.price}</Text>
            <Text style={styles.details}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default ProductItem;
