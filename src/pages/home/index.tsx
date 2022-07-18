import React from 'react';
import styles from './style.module.scss'
import SectionCalculator from '../../components/sections/calculator';
import clsx from 'clsx';

const PageHome = () => {
    return (
        <div className={clsx(styles['page-home'])}>
            <SectionCalculator/>
        </div>
    );
};

export default PageHome;
