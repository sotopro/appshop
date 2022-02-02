import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import OrderItem from "../../components/order-item";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/order.action";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const handleDeleteOrder = (id) => {
        console.warn(id)
        dispatch(deleteOrder(id));
    }
    const renderItems = (data) => (
        <OrderItem item={data.item} onDelete={handleDeleteOrder}/>
    )
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;