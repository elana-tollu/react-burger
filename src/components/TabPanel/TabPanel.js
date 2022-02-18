import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {data} from '../utils/data.js'
import ListOfIngridients from '../ListOfIngridients/ListOfIngridients';
import styles from './TabPanel.module.css';

function ingredientsOfType (ings, type) {
  return ings.filter(element => element.type === type);
};

function TabPanel () {
  const [current, setCurrent] = React.useState('one')

  const buns = ingredientsOfType(data, 'bun');
  const mains = ingredientsOfType(data, 'main');
  const sauces = ingredientsOfType(data, 'sauce');


  // let ingredientsScroll = <div/>
  //   switch (current){
  //     case 'one' : 
  //       ingredientsScroll = [listBuns, listSauces, listMains];
  //       break;
  //     case 'two' :
  //       ingredientsScroll = [listSauces, listMains, listBuns];
  //       break;
  //     case 'three' :
  //       ingredientsScroll = [listMains, listBuns, listSauces];
  //       break;
  //   }
  
  return (
    <>
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>

    <div className={styles.ingredientsScroll}>
      <ListOfIngridients  title = "Булочки" ingredients = {buns} id = "buns"/>
      <ListOfIngridients  title = "Соусы" ingredients = {sauces} id = "sauces"/>
      <ListOfIngridients  title = "Начинки" ingredients = {mains} id = "mains"/>
    </div>
    </>
  );
}

export default TabPanel