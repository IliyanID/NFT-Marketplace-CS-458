import { ethers } from "ethers";
import MarketplaceJSON from "../../static/contracts/Marketplace.json";
import NFTJSON from "../../static/contracts/NFT.json";
const { mktAddress, nftAddress } = require("../deploy");

const balanceInEth = (balance:any) => {
    const array = balance.split(".")
    const decimals = array[1].substring(0, 5)
    return array[0].concat(`.${decimals}`) 
}

//@ts-ignore
export const init = web3 => {

    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(web3);
    const signer = provider.getSigner();
    const MKTContract = new ethers.Contract(mktAddress, MarketplaceJSON.abi, signer);
    const NFTContract = new ethers.Contract(nftAddress, NFTJSON.abi, signer);
    //@ts-ignore
    const price = ethers.utils.parseUnits("0.0001", "ether");
    return {
        // read-only methods

        fetchAll: async () => {
            let current = await NFTContract.getCurrentToken();
            //@ts-ignore
            let count = ethers.BigNumber.from(current).toNumber();
            let tokens:any[] = [];
            for(let i = 0 ; i < count ; i++) {
                const token = await MKTContract.getTokenForId(i);
                tokens = [...tokens, token];
            }
            return await Promise.all(tokens.map(async token => {
                //@ts-ignore
                let price = ethers.utils.formatUnits(token.price.toString(), 'ether');
                let item = {
                    price,
                    tokenId: token.tokenId.toNumber(),
                    seller: token.seller,
                    owner: token.owner,
                    tokenURI: token.tokenURI,
                    name: token.name,
                    description: token.description,
                    isListed: token.isListed,
                }
            return item;
            }))
        },
        connectWallet: () => {
            return new Promise(async resolve => {
                const account = await signer.getAddress();
                provider.getBalance(account).then((balance:any) => {
                    //@ts-ignore
                    const balanceEth = ethers.utils.formatEther(balance)
                    const accountBalance = balanceInEth(balanceEth);
                    //@ts-ignore
                    window.ethereum.on('accountsChanged', function (accounts){
                        window.location.reload()
                    })
                    resolve({ admin: account, balance: accountBalance })
                })
            })
        },
        // write to the Blockchain
        mintNFT: (...args:any) => {
            const [tokenURI] = args
            return new Promise(async resolve => {
                try {
                    const currentID = await NFTContract.getCurrentToken();
                    //@ts-ignore
                    const tokenId = ethers.BigNumber.from(currentID).toNumber();
                    await NFTContract.mint(tokenURI)    
                    resolve({ tokenId })
                } catch(e) {
                    console.error(e)
                }
            
            })
        }, 
        listNFT: (...args:any) => { 
            const [tokenId, name, tokenURI] = args;
            return new Promise(async resolve => {
                try {
                    const transaction = await MKTContract.listNFT(nftAddress, tokenId, name, tokenURI, {
                        gasLimit: 550000, 
                        value: price.toString()
                    })
                    await transaction.wait()
                    resolve(undefined)
                } catch(e) {
                    console.error(e)
                }
            })
        }, 
        buyNFT: (...args:any) => {
            const [tokenId] = args;

            return new Promise(async resolve => {
                try {
                    const transaction = await MKTContract.buyNFT(nftAddress, tokenId, {
                        gasLimit: 550000, 
                        value: price.toString()
                    })
                    await transaction.wait()
                    resolve(undefined)
                } catch(e) {
                    console.error(e)
                }
            })
        }, 
        sellNFT: (...args:any) => {
            const [tokenId] = args;
            return new Promise(async resolve => {
                try {
                    await NFTContract.approve(mktAddress, tokenId);
                    const transaction = await MKTContract.resellNFT(nftAddress, tokenId, {
                        gasLimit: 550000, 
                        value: price.toString()
                    })
                    await transaction.wait()
                    resolve(undefined)
                } catch(e) {
                    console.error(e)
                }
            })
        },
        getAccount: () => {
            return new Promise(async resolve => {
              try {
                const account = await signer.getAddress();
                resolve(account)
              } catch (e) {
                console.error(e)
              }
            })
          }, 
        getOwner: (...args:any) => {
            const [tokenId] = args
            return new Promise(async resolve => {
                try {
                    const owner = await MKTContract.getOwner(tokenId);
                    console.log('owner', owner)
                    resolve(owner)
                } catch (e) {
                console.error(e)
                }
            })
        }, 
        getMktBalance: (...args:any) => {
            return new Promise(async resolve => {
               try {
                    const balance = await MKTContract.getMarketPlaceBalance();
                    //@ts-ignore
                    const contractBalance = ethers.utils.formatEther(balance)
                    resolve({contractBalance, account: args[0] })
               } catch (e) {
                  console.error(e)
               }
            })    
        }, 
        getCount : () => {
          return new Promise(async resolve => {
            try {
                 const count = await MKTContract.getTotalcount()
                 resolve(count)
            } catch (e) {
               console.error(e)
            }
         }) 
        },
        getItemsSold: (...args:any) => {
          return new Promise(async resolve => {
            const sold = await MKTContract.getItemsSold()
            //@ts-ignore
            const itemsSold = ethers.BigNumber.from(sold).toNumber()
            resolve({itemsSold, ...args[0] })
          })
        }
      }
}