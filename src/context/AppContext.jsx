import { createContext } from "react";
import PropTypes from 'prop-types';
import { useStatus } from "../hooks/useStatus";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const language = useStatus('languageStorage',localStorage.getItem('languageStorage')?JSON.parse(localStorage.getItem('languageStorage')):'english');

    const theme = useStatus('themeStorage',localStorage.getItem('themeStorage')?JSON.parse(localStorage.getItem('themeStorage')):'violet');


    return <AppContext.Provider value={{language,
                                        theme
                                        }}>
        {children}
    </AppContext.Provider>
}

AppContextProvider.propTypes = {children:PropTypes.array}

export {AppContextProvider};