import { useState } from "react"
import { Button, InputGroup } from "reactstrap"

export const HeaderFilters = () => {
    return (
        <div style={{
            display:'flex',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            gap:'20px'
            
        }}>
            <TimeFilter/>
            <Button style={{width:'200px'}}>View All</Button>
        </div>
    )
}

const TimeFilter = () => {
    const hourFilters = [
        {
            time:1,
            format:'h'
        },
        {
            time:6,
            format:'h'
        },
        {
            time:24,
            format:'h'
        },
        {
            time:7,
            format:'d'
        }
    ]
    const [SelectedFilter,setSelectedFilter] = useState(0)
    return (
        <InputGroup style={{display:'float',justifyContent:'flex-end'}}>
            {
                hourFilters.map((filter,index)=>{
                    const id = `HeaderFilter-${index}`
                    return (
                    <>
                        <Button 
                            key={id}
                            id={id}
                            disabled={index===SelectedFilter}
                            onClick={()=>{setSelectedFilter(index)}}
                        >
                            {filter.time}{filter.format}
                        </Button>
                    </>
    
                    )
                })
            }
        </InputGroup>
    )
}

