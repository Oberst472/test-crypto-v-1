import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';
import { FeeProps } from '../../../types';

const BlockFee = ({className, c14Fee, networkFee, totalFee, children }: FeeProps) => {
    return (
        <div className={clsx(styles['block-fee'], className)}>
            <span className={clsx(styles['block-fee__title'])}>{children}</span>
            <span className={clsx(styles['block-fee__box'])}>
                <span className={clsx(styles['block-fee__subtitle'])}>Network Fee</span>
                <span className={clsx(styles['block-fee__val'])}>{networkFee}</span>
            </span>

            <span className={styles['block-fee__symbol']}>+</span>

            <span className={clsx(styles['block-fee__box'])}>
                <span className={clsx(styles['block-fee__subtitle'])}>c14 Fee</span>
                <span className={clsx(styles['block-fee__val'])}>{c14Fee}</span>
            </span>

            <span className={styles['block-fee__symbol']}>=</span>

            <span className={clsx(styles['block-fee__box'])}>
                <span className={clsx(styles['block-fee__subtitle'])}>Total Fee</span>
                <span className={clsx(styles['block-fee__val'])}>{totalFee}</span>
            </span>
        </div>
    );
};

export default BlockFee;
