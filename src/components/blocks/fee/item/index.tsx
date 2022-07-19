import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

const Item = ({val, children}: {val: string | number, children: string}) => {
    return (
        <span className={clsx(styles['l-block-item'])}>
                <span className={clsx(styles['l-block-item__title'])}>{children}</span>
                <span className={clsx(styles['l-block-fee__val'])}>{val}</span>
        </span>
    );
};

export default Item;
