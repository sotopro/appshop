import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { CART } from "../../utils/data/cart";
import CartItem from "../../components/cart-item";
const Cart = () => {
    const items = CART;
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirm = () => {
        console.warn("Confirmar compra");
    }

    const handleDelete = (id) => {
        console.warn("Eliminar item", id);
    }

    const renderItems = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
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
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={() => handleConfirm()}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total:</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;