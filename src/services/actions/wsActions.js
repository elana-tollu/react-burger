
export const WS_START = 'WS_START';
export const WS_SUCCESS = 'WS_SUCCESS';
export const WS_ERROR = 'WS_ERROR';
export const WS_MESSAGE = 'WS_MESSAGE';
export const WS_CLOSE = 'WS_CLOSE';

export const wsActions = {
    start :  WS_START,
    close: WS_CLOSE,
    onsuccess: WS_SUCCESS,
    onerror :  WS_ERROR,
    onmessage : WS_MESSAGE
};