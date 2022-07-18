export type ApiGetInfoDataType = {
    source_currency: string
    target_crypto_asset_id: string
    source_amount?: string
    target_amount?: string
}
export type InfoType = {
    absolute_internal_fee?: string
    expires_at?: string
    fiat_blockchain_fee?: string
    id?: string
    internal_fee_percent?: string
    source_amount?: string
    source_currency?: string
    target_amount?: string
    target_crypto_asset_id?: string
    total_fee?: string
}
export type BlockCurrencyInfoPropsType = {
    sum: string | number | undefined
    currency: string
    name: string
    changeVal: Function
    children: string
}

export type FeeProps = {
    c14Fee: string | undefined
    networkFee: string | undefined
    totalFee: string | undefined
    className: string
    children: string
}

export type Info = {
    source_amount?: string
    target_amount?: string
}

export type UiBtnProps = {
    children: string
    className: string
}
