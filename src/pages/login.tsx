import React, {FunctionComponent} from 'react';

import PageLogin from '../components/page-login/page-login';
import styles from './home.module.css';

export const Login: FunctionComponent<{}> = () => {  
  return (
    <>

      <div className={styles.app}>
       
        <section>
            <PageLogin />
        </section>

      </div>
    </>
  );
}

export default Login;