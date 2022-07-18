import React, { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss'
import { InfoType, Info } from '../../../types';

import BlockCurrencyInfo from '../../blocks/currencyInfo';
import BlockFee from '../../blocks/fee';
import UiLoading from '../../ui/loading';
import UiBtn from '../../ui/btn';

import { apiGetInfo } from '../../../api';

const SectionCalculator = () => {
    const [info, setInfo] = useState(null as InfoType | null)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [throttle, setThrottle] = useState(null as any)

    useEffect(() => {
        getInfo({source_amount: '100.00'})
    }, [])

    const getInfo = async function (info: Info) {
        const obj = {
            source_currency: 'USD',
            target_crypto_asset_id: 'b2384bf2-b14d-4916-aa97-85633ef05742',
        }
        const data = {...obj, ...info}
        try {
            const res = await apiGetInfo(data)
            const info = await res.json()
            setInfo(info)
            if (!res.ok) setErrorMessage(info.message)
        } catch (e) {
            console.log(e);
            setErrorMessage('Error!')
        }
    }
    const changeAmount = async function (e: ChangeEvent<HTMLInputElement>, name: string) {
        if (errorMessage) setErrorMessage('')
        const val = e.target.value

        setInfo({...info, [name]: val} as InfoType)
        clearTimeout(throttle)

        setThrottle(setTimeout(async () => {
            setIsLoading(true)
            await getInfo({[name]: val})
            setIsLoading(false)
        }, 500))

    }
    return (
        <section className={clsx(styles['section-calculator'])}>
            {errorMessage && <span className={clsx(styles['section-calculator__error'])}>{errorMessage}</span>}
            <h1 className={clsx(styles['section-calculator__title'])}>Select your Amount</h1>

            <BlockCurrencyInfo
                sum={info?.source_amount}
                currency={'usd'}
                name={'source_amount'}
                changeVal={changeAmount}
            >
                You pay
            </BlockCurrencyInfo>

            <BlockFee
                className={styles['section-calculator__fee']}
                c14Fee={info?.absolute_internal_fee}
                networkFee={info?.fiat_blockchain_fee}
                totalFee={info?.total_fee}
            >
                Fees
            </BlockFee>

            <BlockCurrencyInfo
                sum={info?.target_amount}
                currency={'USDC EVMOS'}
                name={'target_amount'}
                changeVal={changeAmount}
            >
                You receive
            </BlockCurrencyInfo>

            <UiBtn className={clsx(styles['section-calculator__btn'])}>Buy now</UiBtn>

            {isLoading && <UiLoading/>}
        </section>
    );
};

export default SectionCalculator;
