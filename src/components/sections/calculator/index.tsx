import React, { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss'
import { InfoType, Info } from 'types';
//@ts-ignore
import {Transition} from 'react-transition-group'

import BlockCurrencyInfo from 'components/blocks/currencyInfo';
import BlockFee from 'components/blocks/fee';
import UiLoading from 'components/ui/loading';
import UiBtn from 'components/ui/btn';
import { apiGetInfo } from 'api';

const obj = {
    source_currency: 'USD',
    target_crypto_asset_id: 'b2384bf2-b14d-4916-aa97-85633ef05742',
}
const SectionCalculator = () => {
    const [info, setInfo] = useState(null as InfoType | null)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isOnceLoading, setIsOnceLoading] = useState(true)
    const [throttle, setThrottle] = useState(null as any)

    useEffect(() => {
        const d = async () => {
            await getInfo({source_amount: '100.00'})
            setIsOnceLoading(false)
        }
        d()
    }, [])

    const getInfo = async function (info: Info): Promise<void | boolean> {
        const data = {...obj, ...info}
        try {
            const res = await apiGetInfo(data)
            const resInfo = await res.json()
            setInfo(resInfo)

            const val = res.ok ? '' : resInfo.message
            setErrorMessage(val)

        } catch (e) {
            console.log(e);
            setErrorMessage('Error!')
        }
    }
    const changeAmount = async function (e: ChangeEvent<HTMLInputElement>, name: string) {
        if (errorMessage) setErrorMessage('')
        const val = e.target.value || 0

        setInfo({...info, [name]: val} as InfoType)
        clearTimeout(throttle)

        setThrottle(setTimeout(async () => {
            setIsLoading(true)
            await getInfo({[name]: val})
            setIsLoading(false)
        }, 500))

    }
    // @ts-ignore
    return (
        <section className={clsx(styles['section-calculator'])}>
            {errorMessage && <span className={clsx(styles['section-calculator__error'])}>{errorMessage}</span>}

            <h1 className={clsx(styles['section-calculator__title'])}>Select your Amount</h1>

            <BlockCurrencyInfo
                isFocus
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
                currency={'usdc evmos'}
                name={'target_amount'}
                changeVal={changeAmount}
            >
                You receive
            </BlockCurrencyInfo>

            <UiBtn className={clsx(styles['section-calculator__btn'])}>Buy now</UiBtn>

            <Transition
                in={isLoading}
                timeout={500} unmountOnExit
            >
                {(state: string) => <UiLoading className={`ui-loading--${state}`} />}
            </Transition>

            <Transition
                in={isOnceLoading}
                timeout={500} unmountOnExit
            >
                {(state: string) => <UiLoading bg className={`ui-loading--${state}`} />}
            </Transition>
        </section>
    );
};

export default SectionCalculator;
