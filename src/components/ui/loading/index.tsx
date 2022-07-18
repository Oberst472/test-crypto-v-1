import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';

const UiLoading = () => {
    return (
        <div className={clsx(styles['ui-loading'])}></div>
    );
};

export default UiLoading;
