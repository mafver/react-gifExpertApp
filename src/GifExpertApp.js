import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifRead } from "./components/GifRead"

export const GifExpertApp = () =>{
    const [ categories, setCategories ] = useState( ['One Punch Man'] )

    return(
        <>
            <h2>Gif Export App</h2> 
            <hr/>
            <AddCategory setCategories={ setCategories }/>

            <ol>
                { 
                    categories.map( category =>(
                        <GifRead 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

