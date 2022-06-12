import React, { useState, useEffect }  from 'react';
import { logout } from 'utils/api';

import styles from './home.module.css';
import { Redirect } from 'react-router-dom';


function Logout () {  
    const [isLoggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        logout()
            .then(() => setLoggedOut(true))
    }, []); 

  if (isLoggedOut) {
     return (<Redirect to="/login"></Redirect>)
  } 
  return (<div className={styles.app}>Logout</div>);
};

export default Logout;