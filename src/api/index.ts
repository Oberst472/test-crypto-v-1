import { ApiGetInfoDataType } from '../types';

const url = 'https://api-qjoa5a5qtq-uc.a.run.app'

export const apiGetInfo = async function (data: ApiGetInfoDataType) {
    return await fetch(`${url}/quotes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)
    })
}
