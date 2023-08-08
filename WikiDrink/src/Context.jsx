import { useState, useContext, createContext } from "react"

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isSidebarOpen , setIsSidebarOpen] = useState(true)

    const setSidebarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return <AppContext.Provider value={
       { isSidebarOpen,
        setSidebarOpen,
        }
    }>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}