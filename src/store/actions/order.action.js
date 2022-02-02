import { URL_API } from "../../utils/data/database";

export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();
            console.warn(result);
            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key
            }));
            dispatch({
                type: GET_ORDERS,
                payload: orders
            });
        }   catch (error) {
            console.warn(error.message);
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/orders/${id}.json`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch({
                type: DELETE_ORDER,
                orderId: id
            });
        } catch (error) {
            console.warn(error.message);
        }
    }
}