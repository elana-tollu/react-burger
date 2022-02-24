import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import {data} from '../utils/data.js'
import ListOfIngridients from '../ListOfIngridients/ListOfIngridients';
import styles from './TabPanel.module.css';


function ingredientsOfType (ings, type) {
  return ings.filter(element => element.type === type);
};

function TabPanel () {
  const [current, setCurrent] = useState('one')

  const buns = ingredientsOfType(data, 'bun');
  const mains = ingredientsOfType(data, 'main');
  const sauces = ingredientsOfType(data, 'sauce');

  const scrollRef = useRef(null);
  const bunsRef = useRef(null);
  const mainsRef = useRef(null);
  const saucesRef = useRef(null);

  return (
    <>
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, bunsRef);
        }}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, saucesRef);
        }}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={ v => {
          setCurrent(v);
          scroll(scrollRef, mainsRef);
        }}>
        Начинки
      </Tab>
    </div>

    <div className={styles.ingredientsScroll} ref={scrollRef}> 
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

function scroll(parentRef, childRef) {
  const offset = childRef.current.offsetTop - parentRef.current.offsetTop;
  parentRef.current.scrollTop = offset;
}
