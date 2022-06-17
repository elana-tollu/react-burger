import { Middleware, MiddlewareAPI } from 'redux';
import {
    WS_START,
    WS_SUCCESS,
    WS_ERROR,
    WS_MESSAGE,
    WS_CLOSE
} from 'services/actions/actions';
import { refreshToken } from 'utils/api';
import { getTokens } from 'utils/auth';

export function wsMiddleware() {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            if(action.type === WS_START && action.all) {
                socket = new WebSocket('wss://norma.nomoreparties.space/orders/all');
                setSocketHandlers(socket, dispatch);
            }
            if(action.type === WS_START && !action.all) {
                refreshToken().then(() => {
                    const accessToken = getTokens()?.accessToken?.slice(7);
                    socket = new WebSocket('wss://norma.nomoreparties.space/orders?token=' + accessToken);
                    setSocketHandlers(socket, dispatch);
                });
            }
            if(action.type === WS_CLOSE) {
                if(socket) {
                    socket.close();
                }
            }

            next (action);
        }

        
    }
}

function setSocketHandlers(socket, dispatch) {
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