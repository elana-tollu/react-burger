import React, {useEffect, useState}  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import {  useSelector } from 'react-redux';

import styles from './home.module.css';
import OrderInfo from 'components/order-info/order-info';
import Modal from 'components/modal/modal.jsx';
import Orders from './orders';
import FeedPage from './feed';
import { loadOrder } from 'utils/api';


function Order () {  
    let { orderNumber } = useParams();
    let location = useLocation();
    let background = location.state && location.state.background;

    let history = useHistory();
    let back = () => {
        history.goBack();
    };

    const [orderFromStore, ingredients] = useSelector(store => [
        store.orders.find(o => o.number === orderNumber), 
        store.ingredients
    ]);

    const [order, setOrder] = useState(orderFromStore);
    
    useEffect(() => {
        if(!order) {
            loadOrder(orderNumber) 
            .then (data => {
                setOrder(data.orders[0]);
            });
        }
    }, []);    
    if(ingredients.length === 0 || !order) {
        return (
            <p className="text text_type_main-large">
                Информация о заказе в пути
            </p>
            )
    }

    const burgerIngredients = order.ingredients.map(id => ingredients.find(ingredient => ingredient._id === id));

    const orderInfo =  
            <OrderInfo
                orderId={order.number} 
                orderStatus={order.status}
                orderDate={order.createdAt} 
                orderTitle={order.name} 
                orderIngredients={burgerIngredients}
            />

    const orderModal = (
        <Modal 
          onClose={back}> 
          { orderInfo }
        </Modal>
      );
  
    return (
        <>
        <Router>
            <Switch location={background || location}>
                <Route exact path="/profile/orders">
                    <Orders/>
                </Route>
                <Route exact path="/feed">
                    <FeedPage/>
                </Route>
                <Route path="/feed/:id">
                    <div className={styles.app}>
                        <section className={styles.modal}>
                            { orderInfo }
                        </section>
                    </div>
                </Route>
                <Route path="/profile/orders/:id">
                    <div className={styles.app}>
                        <section className={styles.modal}>
                            { orderInfo }
                        </section>
                    </div>
                </Route>
            </Switch>
        </Router>
        {background && orderModal}
        </>
    );
};

export default Order;