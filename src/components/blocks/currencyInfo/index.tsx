import React, { useEffect, useMemo, useRef } from 'react';
import styles from './style.module.scss'
import { BlockCurrencyInfoPropsType } from 'types'
import clsx from 'clsx';

import img1 from 'assets/images/img-1.png'
import img2 from 'assets/images/img-2.png'

const BlockCurrencyInfo = ({sum, currency, name, changeVal, isFocus, children}: BlockCurrencyInfoPropsType) => {
    const img = useMemo(() => name === 'target_amount' ? img1 : img2, [name])
    const inp = useRef(null)

    useEffect(() => {
        //@ts-ignore
        if (isFocus && inp?.current) inp.current.focus()
    }, [])
    return (
        <article className={clsx(styles['block-currency-info'])}>
            <span
                className={clsx(styles['block-currency-info__title'])}
            >
                {children}
            </span>

            <input
                className={clsx(styles['block-currency-info__amount'])}
                type={'number'}
                ref={inp}
                value={sum || ''}
                onChange={(e) => changeVal(e, name)}
            />

            <span
                className={styles['block-currency-info__currency']}
            >
                 {currency}
                <img
                    className={styles['block-currency-info__currency-img']}
                    src={img}
                    alt="Currency"
                />
            </span>
        </article>
    );
};

export default BlockCurrencyInfo;
