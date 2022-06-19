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
import Modal from 'components/modal/modal.jsx';
import Orders from './orders';
import FeedPage from './feed';


function Order () {  
    let { id } = useParams();
    let location = useLocation();
    let background = location.state && location.state.background;

    let history = useHistory();
    let back = () => {
        history.goBack();
    };

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