export const BrowseOptionHeader = (props:{children:JSX.Element[]}) => {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'20px',
            padding:'10px'
        }}>
            {props.children}
        </div>
    )
}
export const BrowseOptionHeaderItem = (props:{option:string,selected:boolean,onClick:()=>void}) =>{
    return (
        <div 
            onClick={props.onClick}
            key={`BrowseOption-${props.option}`}
            style={{
                fontSize:'25px',
                borderBottom:`2px solid var(--${props.selected?'secondary':'primary'}-color)`,
                padding:'10px',
                cursor:'pointer',
                userSelect:'none',
                transition:'.5s'
            }}
        >
            {props.option}
        </div>
    )
}