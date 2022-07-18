import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';
import { UiBtnProps } from '../../../types';

const UiBtn = ({className, children}: UiBtnProps) => {
    return (
        <button className={clsx(styles['ui-btn'], className)}>
            {children}
        </button>
    );
};

export default UiBtn;
