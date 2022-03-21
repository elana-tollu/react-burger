import { useState, useRef } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ListOfIngridients from '../list-of-ingredients/list-of-ingredients';

import styles from './tab-panel.module.css';

function ingredientsOfType (ings, type) {
  return ings.filter(element => element.type === type);
};

function scroll(parentRef, childRef) {
  const offset = childRef.current.offsetTop - parentRef.current.offsetTop;
  parentRef.current.scrollTop = offset;
}

function TabPanel (props) {
  
  const [current, setCurrent] = useState('buns')

  const buns = ingredientsOfType(props.data, 'bun');
  const mains = ingredientsOfType(props.data, 'main');
  const sauces = ingredientsOfType(props.data, 'sauce');

  const scrollRef = useRef(null);
  const bunsRef = useRef(null);
  const mainsRef = useRef(null);
  const saucesRef = useRef(null);

  return (
    <>
    <div style={{ display: 'flex' }}>
      <Tab value="buns" active={current === 'buns'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, bunsRef);
        }}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, saucesRef);
        }}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, mainsRef);
        }}>
        Начинки
      </Tab>
    </div>

    <div className={styles['ingredients-scroll']} ref={scrollRef}> 
      <ListOfIngridients  
      title = "Булки" 
      ingredients = {buns} 
      ref={bunsRef}/>

      <ListOfIngridients  
      title = "Соусы" 
      ingredients = {sauces} 
      ref={saucesRef}/>

      <ListOfIngridients  
      title = "Начинки" 
      ingredients = {mains} 
      ref={mainsRef}/>
    </div>
    </>
  );
}

export default TabPanel;


