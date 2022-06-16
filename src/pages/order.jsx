import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import { useSelector } from 'react-redux';

import styles from './home.module.css';
import OrderInfo from 'components/order-info/order-info';


function Order () {  
    let { id } = useParams();
    const [order, ingredients] = useSelector(store => [
        store.orders.find(o => o._id === id), 
        store.ingredients
    ]);
    const burgerIngredients = order.ingredients.map(id => ingredients.find(ingredient => ingredient._id === id));
    
    if(ingredients.length === 0) {
        return (
            <p className="text text_type_main-large">
                Информация о заказе в пути
            </p>
            )
    }
  
    return (
        <div className={styles.app}>
            <OrderInfo
                orderId={order.number} 
                orderStatus={order.status}
                orderDate={order.createdAt} 
                orderTitle={order.name} 
                orderIngredients={burgerIngredients}
            />
        </div>
    );
};

export default Order;