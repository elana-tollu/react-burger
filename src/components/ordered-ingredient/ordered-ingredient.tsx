import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ConnectDropTarget, useDrag, useDrop } from 'react-dnd';
import { moveOrderItem } from '../../services/actions/actions';
import { DragIcon, ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ordered-ingredient.module.css'
import { useAppDispatch } from 'services/hooks';
import { IIngredient } from 'utils/api';

interface IOrderedIngredientProps extends PropsWithChildren<any> {
  ingredient: IIngredient;
}

interface IDragItem {
  dropIndex: number;
}

export const OrderedIngredient: FunctionComponent<IOrderedIngredientProps> = (props) => {
    const currentIngredientIndex = props.index;
    const dispatch = useAppDispatch();

    const [{ opacity }, dragRef] = useDrag({
        type: 'orderItem',
        item: {dropIndex: currentIngredientIndex},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        }),
    });

    const [{}, dropRef]: [{}, ConnectDropTarget] = useDrop({
        accept: 'orderItem',
        drop(item: IDragItem) {
          dispatch (moveOrderItem(item.dropIndex, currentIngredientIndex));
        },
      }); 

    return (
        <section ref={(node) => dragRef(dropRef(node))} className={styles['ordered-ingredient']} style={{ opacity }}>
            <DragIcon type="primary" />

            <ConstructorElement
                text={props.ingredient.name}
                price={props.ingredient.price}
                thumbnail={props.ingredient.image}
                handleClose = {props.onClose}
            />
                        
        </section>
    )
}

export default OrderedIngredient;