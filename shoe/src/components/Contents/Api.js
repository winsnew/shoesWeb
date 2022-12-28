import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL;

export const getDataList = async () => {
    const product = await axios.get(`${baseUrl}`)
    console.log({datas: product})
    return product.data
}