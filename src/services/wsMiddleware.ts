import { Middleware, MiddlewareAPI } from "redux";
import { IWsActions, WS_START } from "./actions/wsActions";

export function wsMiddleware(wsActions: IWsActions): Middleware{
    return (store:  MiddlewareAPI) => {
        let socket: WebSocket;

        return next => action => {
            const dispatch = store.dispatch;
            if(action.type === WS_START) {
                socket = new WebSocket(action.url);
                if(socket) {
                    socket.onopen = () => {
                        dispatch({ type: wsActions.onsuccess });
                    };
                    socket.onerror = () => {
                        dispatch({ type: wsActions.onerror });
                    };
                    socket.onmessage = event => {
                        let data = JSON.parse(event.data);
                        dispatch({
                            type: wsActions.onmessage,
                            data
                        });
                    };                 
                }
            }
            if(action.type === wsActions.close) {
                if(socket) {
                    socket.close();
                }
            }

            next (action);
        }

        
    }
}
