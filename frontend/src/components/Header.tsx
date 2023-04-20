import { Button, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, UncontrolledDropdown } from "reactstrap"
import { BiCartAlt, BiLogIn, BiLogOut, BiSearch, BiSliderAlt, BiUser, BiUserCircle } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom"
import { useToggle } from "../hooks/useToggle"
import { ConnectWalletModal } from "./modals/ConnectWalletModal"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { ManageWalletModal } from "./modals/ManageWalletModal"

export const Header = (props:{style?:React.CSSProperties}) => {
    const navigate = useNavigate()

 

    return (
        <div
        style={{
            borderRadius:'20px',
            zIndex:'9999',
            padding:'10px',
            display:'grid',
            gridTemplateColumns:'fit-content(400px) 1fr fit-content(200px) fit-content(200px)',
            gap:'40px',
            ...props.style
        }}>
            <div 
            onClick={()=>navigate('/')}
            
            style={{
                fontWeight:'bolder',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontSize:'25px',
                cursor:'pointer',
                userSelect:'none',
                color:'var(--secondary-color)',
                textDecoration:'none'
            }}>NFT Marketplace</div>
            <InputGroup>
                <Button><BiSearch size={25}/></Button>
                <Input placeholder="Search items, collections, and accounts"/>
            </InputGroup>
            <InputGroup>
                <WalletButton/>
                <UserDropDown/>
            </InputGroup>
            <Button><BiCartAlt size={25}/></Button>

        </div>
    )
}

export const WalletButton = () => {
    const [newWalletModal,toggleNewWalletModal] = useToggle()
    const [manageWalletModal,toggleManageWalletModal] = useToggle()
    const userState = useContext(UserContext)
    const navigate = useNavigate()

    if(userState.logged_in === true && userState.session.wallet_is_connected)
        return (
            <>
                <Button onClick={toggleManageWalletModal}>Manage Wallet</Button>
                <ManageWalletModal isOpen={manageWalletModal} toggle={toggleManageWalletModal}/>
            </>
        )
    
        return (
            <>
                <Button 
                    onClick={()=>{
                        if(userState.logged_in)
                            toggleNewWalletModal()
                        else
                            navigate('/auth/login')

                    }}
                >
                        Connect Wallet
                </Button>
                <ConnectWalletModal isOpen={newWalletModal} toggle={toggleNewWalletModal}/>
            </>
        )
}

export const UserDropDown = () => {
    const navigate = useNavigate()
    const userState = useContext(UserContext)
    const DropDownOptions = [
        {
            name:'Profile',
            icon:<BiUser size={25}/>,
            onClick:()=>{},
            meta:{},
            authenticated:true
        },
        {
            name:'Settings',
            icon:<BiSliderAlt size={25}/>,
            onClick:()=>{},
            meta:{},
            authenticated:true
        },
        {
            name:'',
            icon:<></>,
            onClick:()=>{},
            meta:{divider:true},
            authenticated:true
        },
        {
            name:'Logout',
            icon:<BiLogOut size={25}/>,
            onClick:()=>{navigate('/auth/login')},
            meta:{},
            authenticated:true
        },
        {
            name:'Login',
            icon:<BiLogIn size={25}/>,
            onClick:()=>{navigate('auth/login')},
            meta:{},
            authenticated:false
        }
    ]
    return (
        <UncontrolledDropdown>
            <DropdownToggle><BiUserCircle size={25}/></DropdownToggle>
            <DropdownMenu dark>
                {
                    DropDownOptions.map((option,index)=>{
                        const id = `DropDownUserProfile=${index}`

                        if(userState.logged_in === option.authenticated)
                        return (
                            <DropdownItem  
                                {...option.meta}
                                onClick={option.onClick}
                                id={id}
                                key={id}
                                style={{
                                    display:'grid',
                                    gridTemplateColumns:'20px 20px',
                                    gap:'30px'
                                }}
                            >
                                {option.icon}
                                <div>{option.name}</div>
                            </DropdownItem>
                        )
                    })
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}