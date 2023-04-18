import { useState } from "react"
import { BrowseOptionHeader, BrowseOptionHeaderItem } from "./containers/BrowseHeader"
import { trendingMock } from "../../../../static/mock/trendingMock"
import { BrowseTable, BrowseTableTr } from "./containers/BrowseTable"

export const BrowseItems = () => {
    const BrowseOptions = ['Trending','Top']
    const [selectedHeader,setSelectedHeader] = useState(BrowseOptions[0])
    return (
        <div style={{
            display:'grid',
            gridTemplateRows:'fit-content(600px) 1fr'
        }}>
            <BrowseOptionHeader>
                {
                    BrowseOptions.map(option=><BrowseOptionHeaderItem option={option} selected={option===selectedHeader} onClick={()=>setSelectedHeader(option)}/>)
                }
            </BrowseOptionHeader>
            <BrowseTable>
                {
                    trendingMock.map((nft,index)=>{
                        return <BrowseTableTr nft={nft} index={index}/>
                    })
                }
            </BrowseTable>
        </div>
    )
}