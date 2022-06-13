import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './home.module.css';
import { Redirect } from 'react-router-dom';
import { logoutAction } from 'services/actions/actions';


function Logout () {  
  const isLoggedIn = useSelector(store => store.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction ())}, []); 

  if (!isLoggedIn) {
     return (<Redirect to="/login"></Redirect>)
  } 
  return (<div className={styles.app}>Logout</div>);
};

export default Logout;