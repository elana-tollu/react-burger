
export const WS_START = 'WS_START';
export const WS_SUCCESS = 'WS_SUCCESS';
export const WS_ERROR = 'WS_ERROR';
export const WS_MESSAGE = 'WS_MESSAGE';
export const WS_CLOSE = 'WS_CLOSE';

export interface IFeedOrder {
    _id: string; 
    ingredients: string[];
    status: OrderStatus;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
} 

export enum OrderStatus {
    Done = 'done',
    Created = 'created',
    Pending = 'pending',
    Cancel = 'cancel'
}

export interface IOrdersData {
    total: number;
    totalToday: number;
    orders: IFeedOrder[];
}

export interface IWsMessage {
    readonly type: typeof WS_MESSAGE;
    readonly data: IOrdersData;
}

export function wsMessage (data: IOrdersData): IWsMessage {
    return {
        type: WS_MESSAGE,
        data
    }
}

export const wsActions = {
    start :  WS_START,
    close: WS_CLOSE,
    onsuccess: WS_SUCCESS,
    onerror :  WS_ERROR,
    onmessage : WS_MESSAGE
};

/*{
     action.data.total || 0,
    action.data.totalToday || 0,
     action.data.orders.sort((a, b)=> {
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        return -1;
    }),
}*/