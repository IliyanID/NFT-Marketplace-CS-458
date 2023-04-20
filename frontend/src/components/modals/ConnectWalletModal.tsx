import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { CommonModalProps } from "./CommonModalProps"
import { WalletOptions } from "../../static/config/WalletOptions"
import { motion } from "framer-motion"
import { useState } from "react"

export const ConnectWalletModal = (props:CommonModalProps) => {

    
    return (
        <Modal {...props}>
            <ModalHeader>
                <h2>Connect your wallet</h2>
                <small>
                    If you don't have a 
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a style={{textDecoration:'none'}} rel="noreferrer" target={'_blank'} href="https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet"> wallet </a> 
                    yet, you'll need to create one.
                </small>
            </ModalHeader>
            <CustomModalBody/>
            <ModalFooter style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                gap:'20px'
            }}>
                <Button color="primary">Connect Wallet</Button>
                <Button onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const CustomModalBody = () => {
    return (
        <ModalBody>
            <SelectWalletType/>
        </ModalBody>
    )
}

const SelectWalletType = () => {
    const [selectedWallet,setSelectedWallet] = useState(-1)

    return (
        <div style={{
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            gap:'10px'
        }}>
            {WalletOptions.map((wallet,index)=>{
                const id = `NewWalletOption-${index}]`
                return (
                    <motion.div 
                    key={id}
                    id={id}
                    onClick={()=>setSelectedWallet(index)}
                    whileHover={{borderColor:'var(--accent-color)'}}
                    style={{
                        border:`2px solid var(--primary-color)`,
                        borderColor:`${(index===selectedWallet)?'var(--accent-color)':'var(--primary-color)'}`,
                        width:'200px',
                        textAlign:'center',
                        borderRadius:'10px',
                        padding:'10px',
                        display:'grid',
                        gridTemplateColumns:'20px 1fr',
                        alignItems:'center',
                        cursor:'pointer',
                        userSelect:'none',
                    }}
                    >
                        {wallet.icon}
                        <div>{wallet.walletType}</div>
                        
                    </motion.div>
                )
            })}
            <EnterWalletDetails selectedWallet={selectedWallet}/>
        </div>
    )
}

export const EnterWalletDetails = (props:{selectedWallet:number}) =>{
    if(props.selectedWallet<0)
        return <></>

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            width:'100%',
            marginTop:'30px'
        }}>
            <h4>Enter Your {WalletOptions[props.selectedWallet].walletType} Wallet Details</h4>
            <Input placeholder={'Wallet Name'}/>
            <Input placeholder={'Wallet Address'}/>
            <Input type='password' placeholder={'Private key'}/>
        </motion.div>
    )
}