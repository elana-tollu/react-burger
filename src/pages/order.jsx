import React, {useEffect}  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styles from './home.module.css';
import OrderInfo from 'components/order-info/order-info';
import Modal from 'components/modal/modal.jsx';
import Orders from './orders';
import FeedPage from './feed';
import {WS_CLOSE, WS_START } from 'services/actions/actions';


function Order () {  
    let { id } = useParams();
    let location = useLocation();
    let background = location.state && location.state.background;

    let history = useHistory();
    let back = () => {
        history.goBack();
    };

    const [order, ingredients, ordersTotal] = useSelector(store => [
        store.orders.find(o => o._id === id), 
        store.ingredients,
        store.total
    ]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(ordersTotal === 0) {
            dispatch ({
                type: WS_START,
                url: 'wss://norma.nomoreparties.space/orders/all',
            })
            return () => {
                dispatch ({
                    type: WS_CLOSE,
                })
            };
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