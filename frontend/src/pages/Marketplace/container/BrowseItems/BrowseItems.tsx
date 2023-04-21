import { useContext, useState } from "react"
import { BrowseOptionHeader, BrowseOptionHeaderItem } from "./containers/BrowseHeader"
import { BrowseTable, BrowseTableTr } from "./containers/BrowseTable"
import { HeaderFilters } from "./containers/HeaderFilters"
import { MarketPlaceContext } from "src/context/MarketPlaceContext"

export const BrowseItems = () => {
    const BrowseOptions = ['Trending','Top']
    const [selectedHeader,setSelectedHeader] = useState(BrowseOptions[0])
    const state = useContext(MarketPlaceContext)
    return (
        <div style={{
            display:'grid',
            gridTemplateRows:'fit-content(600px) 1fr'
        }}>
            <BrowseOptionHeader>
                {
                    BrowseOptions.map(option=><BrowseOptionHeaderItem option={option} selected={option===selectedHeader} onClick={()=>setSelectedHeader(option)}/>)
                }
                <HeaderFilters/>
            </BrowseOptionHeader>
            <BrowseTable>
                {
                    state.BrowseItems.map((nft,index)=>{
                        return <BrowseTableTr nft={nft} index={index}/>
                    })
                }
            </BrowseTable>
        </div>
    )
}