import { useState, useContext, createContext } from "react"
import useFetch from "./useFetch"

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [query , setQuery] = useState('negroni')
    const {isLoading , data, isError, count} = useFetch(`s=${query}`)

    const [isSidebarOpen , setIsSidebarOpen] = useState(false)

    const setSidebarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const searchCocktail = (input) => {
        setQuery(input)
    }

    return <AppContext.Provider value={
       { isSidebarOpen,
        setSidebarOpen,
        searchCocktail,
        query,
        count,
        data,
        isError,
        isLoading
        }
    }>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}