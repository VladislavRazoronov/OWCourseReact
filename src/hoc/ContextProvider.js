import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {
    let episode = useState(null)
    return (
        <Context.Provider value = {episode}>
            {children}
        </Context.Provider>
    )
}

export{
    ContextProvider,
    Context
}
