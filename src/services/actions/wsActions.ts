
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

export interface IWsStart {
    readonly type: typeof WS_START;
    readonly url: string;
}

export function wsStart (url: string): IWsStart {
    return {
        type: WS_START,
        url
    }
}

export interface IWsClose {
    readonly type: typeof WS_CLOSE;
}

export function wsClose (): IWsClose {
    return {
        type: WS_CLOSE
    }
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

export type TWsActionType = 
    | typeof WS_START 
    | typeof WS_CLOSE 
    | typeof WS_ERROR 
    | typeof WS_MESSAGE 
    | typeof WS_SUCCESS;

export interface IWsActions {
    start :  TWsActionType;
    close: TWsActionType;
    onsuccess: TWsActionType;
    onerror :  TWsActionType;
    onmessage : TWsActionType;
}

export const wsActions: IWsActions = {
    start :  WS_START,
    close: WS_CLOSE,
    onsuccess: WS_SUCCESS,
    onerror :  WS_ERROR,
    onmessage : WS_MESSAGE
};
