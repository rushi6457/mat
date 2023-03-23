import { createContext, useRef } from "react";

export const ScrollContext = createContext();

const ScrollContextProvider = ({children}) =>{
    const homeRef = useRef(null)
    const cityRef = useRef(null)
    const newsRef = useRef(null)

    const handleScroll = (section) =>{
        let ref = newsRef

        if(section === 'home') ref = homeRef
        
        else if(section === 'cities') ref = cityRef

        ref.current.scrollIntoView({ behavior: 'smooth' });    
    }
    return (
        <ScrollContext.Provider value={{handleScroll,homeRef,newsRef,cityRef}}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContextProvider