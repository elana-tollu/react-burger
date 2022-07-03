import React from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import { MOVE_ORDER_ITEM } from '../../services/actions/actions';


import { DragIcon, ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ordered-ingredient.module.css'
import { useAppDispatch } from 'services/hooks';

function OrderedIngredient (props) {
    const currentIngredientIndex = props.index;
    const dispatch = useAppDispatch();

    const [{ opacity }, dragRef] = useDrag({
        type: 'orderItem',
        item: {dropIndex: currentIngredientIndex},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        }),
    });

    const [{}, dropRef] = useDrop({
        accept: 'orderItem',
        drop({dropIndex}) {
          dispatch ({
            type: MOVE_ORDER_ITEM,
            fromIndex: dropIndex,
            toIndex: currentIngredientIndex
          });
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

OrderedIngredient.propTypes = {
    ingredient: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

export default OrderedIngredient;