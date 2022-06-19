
export function wsMiddleware(wsActions) {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            if(action.type === wsActions.start) {
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
