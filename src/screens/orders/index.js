import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ORDERS } from '../../utils/data/orders';
import OrderItem from "../../components/order-item";

const Orders = () => {
    const items = ORDERS;


    const renderItems = (data) => (
        <OrderItem item={data.item} />
    )
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;