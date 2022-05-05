import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

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

  const panelRef = useRef(null);
  const scrollRef = useRef(null);
  const bunsRef = useRef(null);
  const mainsRef = useRef(null);
  const saucesRef = useRef(null);

  return (
    <>
    <div style={{ display: 'flex' }} ref={panelRef}>
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

    <div className={styles['ingredients-scroll']} ref={scrollRef} onScroll={ s => {
      const panelOffset = panelRef.current.getBoundingClientRect().top; // определить координаты панели
      const bunsOffset = bunsRef.current.getBoundingClientRect().top;   // определить координаты заголовков
      const saucesOffset = saucesRef.current.getBoundingClientRect().top;
      const mainsOffset = mainsRef.current.getBoundingClientRect().top;

      const bunsDistance = Math.abs(panelOffset - bunsOffset);  // вычислить расстояние между панелью и заголовком
      const saucesDistance = Math.abs(panelOffset - saucesOffset);
      const mainsDistance = Math.abs(panelOffset - mainsOffset);

      let distances = [ // создать массив объектов, связывающих заголовок и расстояние до панели
        {tab: 'buns', distance: bunsDistance},
        {tab: 'sauces', distance: saucesDistance},
        {tab: 'mains', distance: mainsDistance},
      ];

      distances.sort((a, b) => a.distance - b.distance); // сортировать массив по расстоянию

      setCurrent(distances[0].tab);
      }}> 
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

TabPanel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired
    })
  )
};

export default TabPanel;


