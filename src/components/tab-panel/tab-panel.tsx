import { useState, useRef, MutableRefObject, FunctionComponent } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ListOfIngridients from '../list-of-ingredients/list-of-ingredients';

import styles from './tab-panel.module.css';
import { useAppSelector } from 'services/hooks';
import { IIngredient } from 'utils/api';

function ingredientsOfType (ings: IIngredient[], type: string) {
  return ings.filter(element => element.type === type);
};

function scroll(parentRef: MutableRefObject<any>, childRef: MutableRefObject<any>) {
  const offset = childRef.current.offsetTop - parentRef.current.offsetTop;
  parentRef.current.scrollTop = offset;
}

export const TabPanel: FunctionComponent<{}> = () => {
  const ingredients = useAppSelector(store => store.ingredients);
  
  const [current, setCurrent] = useState('buns')

  const buns = ingredientsOfType(ingredients, 'bun');
  const mains = ingredientsOfType(ingredients, 'main');
  const sauces = ingredientsOfType(ingredients, 'sauce');

  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bunsRef = useRef<HTMLElement>(null);
  const mainsRef = useRef<HTMLElement>(null);
  const saucesRef = useRef<HTMLElement>(null);

  return (
    <>
    <div className={styles['tab-panel']} ref={panelRef}>
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
      const panelOffset = panelRef.current!.getBoundingClientRect().top; // определить координаты панели
      const bunsOffset = bunsRef.current!.getBoundingClientRect().top;   // определить координаты заголовков
      const saucesOffset = saucesRef.current!.getBoundingClientRect().top;
      const mainsOffset = mainsRef.current!.getBoundingClientRect().top;

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

export default TabPanel;


