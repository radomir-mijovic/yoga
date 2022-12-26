import React, {useContext, useEffect, useState} from 'react';

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    return (
        <AppContext.Provider value={{

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)