import React from 'react';

import styles from './home.module.css';


function HomePage () {
    return (
        <section className={styles.home}>
            <div className={styles.title}>
                <p className="text text_type_main-small mb-2">Home! Sweet home!</p>
            </div>
        </section>
    )
};

export default HomePage;