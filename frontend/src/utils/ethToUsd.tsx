import axios from 'axios'

export const ethToUsd = async(eth:number) => {
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const ethPriceInUsd = response.data.ethereum.usd;
        const usdAmount = eth * ethPriceInUsd;
        return usdAmount;
    }
    catch(e){
        return 0
    }

}