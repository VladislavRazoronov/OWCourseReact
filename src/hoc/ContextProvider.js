import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {
    let characters = useState(null)
    let title = useState(null)
    return (
        <Context.Provider value = {{characters:characters,title:title}}>
            {children}
        </Context.Provider>
    )
}

export{
    ContextProvider,
    Context
}
