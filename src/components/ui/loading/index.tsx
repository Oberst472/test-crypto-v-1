import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';

const UiLoading = ({className, bg}: { className: string, bg?: boolean }) => {
    return (
        <div className={clsx(styles['ui-loading'], styles[className], styles[bg ? 'ui-loading--bg' : ''])}></div>
    );
};

export default UiLoading;
