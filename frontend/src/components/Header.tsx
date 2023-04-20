import { Button, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, UncontrolledDropdown } from "reactstrap"
import './Header.css'
import { BiCartAlt, BiLogIn, BiSearch, BiSliderAlt, BiUser, BiUserCircle } from 'react-icons/bi'

export const Header = () => {

    return (
        <div
        style={{
            borderRadius:'20px',
            zIndex:'9999',
            padding:'10px',
            display:'grid',
            gridTemplateColumns:'fit-content(400px) 1fr fit-content(200px) fit-content(200px)',
            gap:'40px'
        }}>
            <div style={{
                fontWeight:'bolder',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontSize:'25px'
            }}>NFT Marketplace</div>
            <InputGroup>
                <Button><BiSearch size={25}/></Button>
                <Input placeholder="Search items, collections, and accounts"/>
            </InputGroup>
            <InputGroup>
                <Button>Connect Wallet</Button>
                <UserDropDown/>
            </InputGroup>
            <Button><BiCartAlt size={25}/></Button>
        </div>
    )
}

export const UserDropDown = () => {
    const DropDownOptions = [
        {
            name:'Profile',
            icon:<BiUser size={25}/>,
            onClick:()=>{},
            meta:{}
        },
        {
            name:'Settings',
            icon:<BiSliderAlt size={25}/>,
            onClick:()=>{},
            meta:{}
        },
        {
            name:'',
            icon:<></>,
            onClick:()=>{},
            meta:{divider:true}
        },
        {
            name:'Logout',
            icon:<BiLogIn size={25}/>,
            onClick:()=>{window.location.href='/auth/login'},
            meta:{}
        }
    ]
    return (
        <UncontrolledDropdown>
            <DropdownToggle><BiUserCircle size={25}/></DropdownToggle>
            <DropdownMenu dark>
                {
                    DropDownOptions.map((option,index)=>{
                        const id = `DropDownUserProfile=${index}`
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