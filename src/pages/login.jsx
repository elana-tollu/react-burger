import React from 'react';

import PageLogin from '../components/page-login/page-login.jsx';
import styles from './home.module.css';

function Login() {
  
  return (
      <div className={styles.app}>
       
        <section>
            <PageLogin />
        </section>

      </div>
  );
}

export default Login;