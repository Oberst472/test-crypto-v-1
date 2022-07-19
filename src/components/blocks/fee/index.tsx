import React from 'react';
import Item from './item';
import styles from './style.module.scss'
import clsx from 'clsx';
import { FeeProps } from 'types';

const BlockFee = ({className, c14Fee, networkFee, totalFee, children }: FeeProps) => {
    return (
        <div className={clsx(styles['block-fee'], className)} data-testid='block-fee'>
            <span className={clsx(styles['block-fee__title'])}>{children}</span>

            <Item val={networkFee || 0}>Network Fee</Item>

            <span className={styles['block-fee__symbol']}>+</span>

            <Item val={c14Fee || 0}>c14 Fee</Item>

            <span className={styles['block-fee__symbol']}>+</span>

            <Item val={totalFee || 0}>Total Fee</Item>
        </div>
    );
};

export default BlockFee;
