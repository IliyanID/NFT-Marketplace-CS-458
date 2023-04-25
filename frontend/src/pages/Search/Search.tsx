import { Header } from "src/components/Header"

export const Search = () => {
    return (
        <div style={{
            display:'grid',
            gridTemplateRows:'fit-content(200px) 1fr',
            width:'100vw',
            height:'100vh'
        }}>
            <Header/>
            <SearchArea/>
        </div>
    )
}

export const SearchArea = () => {
    return (
        <div>
            
        </div>
    )
}