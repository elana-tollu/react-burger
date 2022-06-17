import { Middleware, MiddlewareAPI } from 'redux';
import {
    WS_START,
    WS_SUCCESS,
    WS_ERROR,
    WS_MESSAGE,
    WS_CLOSE
} from 'services/actions/actions';

export function wsMiddleware() {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch, getState } = store;
            const { type, payload } = action;
            if(type === WS_START) {
                socket = new WebSocket('wss://norma.nomoreparties.space/orders/all');
                if(socket) {
                    socket.onopen = () => {
                        dispatch({ type: WS_SUCCESS });
                    };
                    socket.onerror = () => {
                        dispatch({ type: WS_ERROR });
                    };
                    socket.onmessage = event => {
                        let data = JSON.parse(event.data);
                        dispatch({
                            type: WS_MESSAGE,
                            orders: data.orders, 
                            total: data.total, 
                            totalToday: data.totalToday,
                        });
                    };                 
                }
            }
            if(type === WS_CLOSE) {
                if(socket) {
                    socket.close();
                }
            }

            next (action);
        }

        
    }
}